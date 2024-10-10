import { useEffect, useRef, useState } from 'react'
import * as StompJs from '@stomp/stompjs'

//하나의 채팅룸이라는 모델에서 관리
export default function ChattingRoom() {
	const [chatList, setChatList] = useState<any>([]) // 채팅 기록
	let [client, changeClient] = useState<any>(null)
	const [chat, setChat] = useState('') // 입력된 chat을 받을 변수

	const chatroomId = 13
	const userId = 1
	const connect = () => {
		//연결
		try {
			const clientdata = new StompJs.Client({
				brokerURL: 'ws://localhost:8080/chat', //backEnd url
				connectHeaders: {
					login: '',
					passcode: 'password',
				},
				debug: function (str) {
					console.log(str)
				},
				reconnectDelay: 5000, // 자동 재 연결
				heartbeatIncoming: 4000,
				heartbeatOutgoing: 4000,
			})
			// 구독
			clientdata.onConnect = function () {
				clientdata.subscribe('/sub/channels/' + chatroomId, callback)
			}

			clientdata.activate() // 클라이언트 활성화
			changeClient(clientdata) // 클라이언트 갱신
		} catch (error) {
			console.log(error)
		}
	}

	// 콜백함수 => ChatList 저장하기
	const callback = function (message: any) {
		if (message.body) {
			let msg = JSON.parse(message.body)
			setChatList((chats: any) => [...chats, msg])
		}
	}

	const disConnect = () => {
		// 연결 끊기
		if (client === null) {
			return
		}
		client.deactivate()
	}

	const sendChat = () => {
		if (chat === '') {
			return
		}

		client.publish({
			destination: '/pub/chat/' + chatroomId,
			body: JSON.stringify({
				type: '',
				sender: userId,
				channelId: '1',
				data: chat,
			}),
		})

		setChat('')
	}

	useEffect(() => {
		// 최초 렌더링 시 , 웹소켓에 연결
		// 우리는 사용자가 방에 입장하자마자 연결 시켜주어야 하기 때문에,,
		connect()

		return () => disConnect()
	}, [])
}
