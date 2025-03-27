import { styled } from 'styled-components'

interface propsType {
	setChat: React.Dispatch<React.SetStateAction<string>>
}
export default function Input({ setChat }: propsType) {
	return (
		<InputView
			placeholder="채팅을 입력해주세요"
			onChange={el => setChat(el.target.value)}
		/>
	)
}

const InputView = styled.input`
	background-color: transparent;
	border: 1px solid gray;
	border-radius: 5px;
	padding: 10px;
	width: 70%;
	color: black;
	font-size: 16px;
	outline: none;
`
