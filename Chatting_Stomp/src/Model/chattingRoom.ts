import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import SockJS from 'sockjs-client'
import { over } from 'stompjs'

// ChatApp 컴포넌트를 정의합니다.
const ChatApp = () => {
	// 상태 변수 선언
	const [jwtToken, setJwtToken] = useState('') // JWT 토큰을 저장
	const [patientRequestId, setPatientRequestId] = useState('') // 환자 요청 ID를 저장
	const [isConnected, setIsConnected] = useState(false) // WebSocket 연결 상태를 저장
	const [chatMessage, setChatMessage] = useState('') // 입력된 채팅 메시지를 저장
	const [messages, setMessages] = useState([]) // 수신된 메시지들을 저장

	// stompClient를 참조로 선언하여 컴포넌트가 다시 렌더링되어도 유지되도록 함
	const stompClient = useRef(null)

	// API의 기본 경로와 서버 호스트를 설정
	const apiPrefix = '/api' // API 프리픽스
	const host = process.env.REACT_APP_HOST || 'http://localhost:8080' // 환경 변수 또는 기본값

	// Axios 인스턴스 생성 및 설정
	const authAxios = axios.create({
		baseURL: apiPrefix, // 기본 URL 설정
		headers: { 'Content-Type': 'application/json' }, // 기본 헤더 설정
	})

	// JWT 토큰을 Axios 요청 헤더에 자동으로 포함시키기 위한 인터셉터 설정
	useEffect(() => {
		// 요청 인터셉터 추가
		const interceptor = authAxios.interceptors.request.use(
			config => {
				if (jwtToken) {
					// Authorization 헤더에 JWT 토큰 추가
					config.headers['Authorization'] = `Bearer ${jwtToken}`
				}
				return config // 수정된 설정 반환
			},
			error => Promise.reject(error), // 에러 발생 시 Promise 거부
		)

		// 컴포넌트 언마운트 시 인터셉터 제거
		return () => {
			authAxios.interceptors.request.eject(interceptor)
		}
	}, [jwtToken]) // jwtToken이 변경될 때마다 이 useEffect 실행

	/**
	 * WebSocket(SockJS) 연결을 설정하고 STOMP 클라이언트를 초기화합니다.
	 * @param {string} patientId - 채팅방에 참여할 환자 요청 ID
	 */
	const connectStomp = patientId => {
		// SockJS 클라이언트를 사용하여 서버의 /ws 엔드포인트에 연결
		const socket = new SockJS(`${host}/ws`)
		stompClient.current = over(socket) // STOMP 클라이언트 초기화

		// STOMP 연결 시도, JWT 토큰을 헤더에 포함
		stompClient.current.connect(
			{ Authorization: `Bearer ${jwtToken}` },
			onConnected,
			onError,
		)
	}

	/**
	 * STOMP 연결이 성공했을 때 호출되는 콜백 함수입니다.
	 * 특정 채팅방 주제에 구독을 시작합니다.
	 */
	const onConnected = () => {
		// STOMP 클라이언트를 사용하여 특정 주제에 구독
		stompClient.current.subscribe(
			`/sub/patient/${patientRequestId}`, // 구독할 주제
			onMessageReceived, // 메시지 수신 시 호출될 콜백 함수
			{ Authorization: `Bearer ${jwtToken}` }, // 추가 헤더 설정
		)
		setIsConnected(true) // 연결 상태 업데이트
		console.log('Connected and subscribed')
	}

	/**
	 * STOMP 연결에 실패했을 때 호출되는 콜백 함수입니다.
	 * @param {object} error - 에러 객체
	 */
	const onError = error => {
		console.error('Connection error: ', error)
		alert('WebSocket 연결에 실패했습니다.')
	}

	/**
	 * 서버로부터 메시지를 수신했을 때 호출되는 함수입니다.
	 * @param {object} message - 수신된 메시지 객체
	 */
	const onMessageReceived = message => {
		const messageData = JSON.parse(message.body) // 메시지 본문을 JSON으로 파싱
		setMessages(prevMessages => [...prevMessages, messageData]) // 메시지를 상태에 추가
	}

	/**
	 * 입력된 메시지를 서버로 전송하는 함수입니다.
	 */
	const sendMessage = () => {
		if (stompClient.current && stompClient.current.connected) {
			const message = {
				content: chatMessage, // 전송할 메시지 내용
			}
			// STOMP 클라이언트를 통해 메시지 전송
			stompClient.current.send(
				`/pub/patient/${patientRequestId}`, // 메시지를 보낼 목적지
				{ Authorization: `Bearer ${jwtToken}` }, // 헤더 설정
				JSON.stringify(message), // 메시지 본문
			)
			setChatMessage('') // 입력 필드 초기화
			console.log('Message sent:', message.content)
		} else {
			alert('서버에 연결되지 않았습니다.')
		}
	}

	/**
	 * WebSocket 연결을 시작하고 필요한 초기 작업을 수행하는 함수입니다.
	 */
	const connect = () => {
		if (isConnected) {
			alert('이미 연결되어 있습니다. 먼저 연결을 해제하세요.')
			return
		}

		if (!jwtToken || !patientRequestId) {
			alert('JWT Token과 Patient Request ID는 필수입니다.')
			return
		}

		clearMessages() // 기존 메시지 클리어

		// 환자 요청을 수락하고 채팅 히스토리를 로드한 후 WebSocket 연결
		acceptPatientRequest(patientRequestId)
			.then(() => {
				loadChatHistory(patientRequestId) // 채팅 히스토리 로드
				connectStomp(patientRequestId) // WebSocket 연결
			})
			.catch(error => {
				console.error('Subscription error:', error)
			})
	}

	/**
	 * WebSocket 연결을 해제하는 함수입니다.
	 */
	const disconnect = () => {
		if (stompClient.current && stompClient.current.connected) {
			stompClient.current.disconnect(() => {
				setIsConnected(false) // 연결 상태 업데이트
				console.log('Disconnected from the server')
				alert('성공적으로 연결을 해제했습니다.')
			})
		} else {
			alert('연결되어 있지 않습니다.')
		}
	}

	/**
	 * 특정 환자 요청에 대한 채팅 히스토리를 서버로부터 가져오는 함수입니다.
	 * @param {string} patientId - 채팅 히스토리를 로드할 환자 요청 ID
	 */
	const loadChatHistory = patientId => {
		authAxios
			.get(`/chat-history/${patientId}`)
			.then(response => {
				if (response.data && response.data.data) {
					setMessages(response.data.data) // 가져온 메시지들을 상태에 설정
				} else {
					throw new Error('채팅 히스토리를 불러오지 못했습니다.')
				}
			})
			.catch(error => {
				console.error(
					'채팅 히스토리 로드 에러:',
					error.response ? error.response.data : error.message,
				)
			})
	}

	/**
	 * 특정 환자 요청을 수락하여 채팅을 시작하는 함수입니다.
	 * @param {string} patientId - 수락할 환자 요청 ID
	 * @returns {Promise} - Promise 객체
	 */
	const acceptPatientRequest = patientId => {
		return authAxios
			.post('/patient-requests/accept', { patientRequestId: patientId })
			.then(response => {
				console.log('Subscription successful:', response.data)
			})
			.catch(error => {
				const errorMessage = error.response
					? JSON.stringify(error.response.data, null, 2)
					: error.message
				console.error('Subscription error:', errorMessage)
				alert('구독 실패: ' + errorMessage)
				return Promise.reject(errorMessage)
			})
	}

	/**
	 * 메시지의 타임스탬프를 포맷팅하여 반환하는 함수입니다.
	 * @param {string} createdAt - 메시지 생성 시간
	 * @returns {string} - 포맷팅된 타임스탬프
	 */
	const formatTimestamp = createdAt => {
		const now = new Date()
		const messageDate = new Date(createdAt)
		const diffInMinutes = Math.floor((now - messageDate) / 1000 / 60)

		if (diffInMinutes < 1) {
			return '방금 전'
		} else {
			return messageDate.toLocaleTimeString([], {
				hour: '2-digit',
				minute: '2-digit',
			})
		}
	}

	/**
	 * 현재 저장된 메시지들을 모두 삭제하는 함수입니다.
	 */
	const clearMessages = () => {
		setMessages([])
	}
}

// ChatApp 컴포넌트를 내보냅니다.
export default ChatApp
