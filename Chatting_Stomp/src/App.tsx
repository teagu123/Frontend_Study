import styled from 'styled-components'
import { testList } from './MockData/data'
import { useState } from 'react'
import { Button, Input } from './View'

function App() {
	const [isChattingId, setIsChattingId] = useState<number | null>(null)
	const [chat, setChat] = useState('') // 입력된 chat을 받을 변수
	const [chatList, setChatList] = useState<any>([]) // 채팅 기록

	const onSend = () => {
		console.log(chat)
	}
	return (
		<Wrapper>
			<Box>
				<List>
					{testList.map(el => (
						<ListBox key={el.id} onClick={() => setIsChattingId(el.id)}>
							{el.content}
						</ListBox>
					))}
				</List>
				{isChattingId && (
					<ChattingBox>
						<Title>{`${isChattingId}번 채팅방`}</Title>
						<Bottom>
							<Input setChat={setChat} />
							<Button />
						</Bottom>
					</ChattingBox>
				)}
			</Box>
		</Wrapper>
	)
}

export default App

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`
const Box = styled.div`
	width: 600px;
	height: 80%;
	border-radius: 30px;
	background-color: #e9e5e5;
	padding: 20px;
`
const List = styled.div``
const ListBox = styled.div`
	height: 50px;
	display: flex;
	align-items: center;
	margin-left: 15px;
	border-bottom: 1px solid gray;
	color: black;
	font-weight: bold;
	&:last-child {
		border: none;
	}
`
const ChattingBox = styled.div`
	margin-top: 20px;
	width: 100%;
	height: 600px;
	background-color: #e7d8c9;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`
const Title = styled.div`
	color: black;
	padding: 10px 0 0 10px;
`
const Bottom = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 20px;
`
