import { useEffect } from 'react'

/**
 * 일단 실시간 알람을 구현할때 사용한게 SSE
 * SSE를 선택한 이유
 * - 실시간 알람을 위해서는 양방향 통신이 필요하지않았다.
 * - Polling은 일정한 주기로 서버에 업데이트 요청을 발생하여야하기 떄문에 리소스 낭비가 생겨서 ( 선택 X )
 * - WebSocket 실시간 양방향 통신은 불필요하다라는 판단이 있어서 ( 선택 X )
 * - SSE는 이벤트 서버 -> 클라이언트 방향으로 흐르는 단방향 통신 채널이다. 주기적으로 요청을 보낼 필요 없다.
 */
function SSE() {
	useEffect(() => {
		const userType = JSON.parse(
			localStorage.getItem('recoil-persist') as string,
		).userState.type

		const EventSource = EventSourcePolyfill

		const eventSource = new EventSource(`${SEVER_URL}`, {
			headers: {
				Authorization: `Bearer Token`,
			},
			withCredentials: true,
			heartbeatTimeout: 86400000, //연결시간 24시간
		})

		eventSource.addEventListener('notification', async e => {
			const res = await e.data
			const parsedData = JSON.parse(res)
		})

		eventSource.onerror = function () {
			eventSource.close()
		}
	}, [])
}
