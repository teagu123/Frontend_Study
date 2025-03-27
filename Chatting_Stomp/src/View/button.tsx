import { styled } from 'styled-components'

export default function Button() {
	return <ButtonView>보내기</ButtonView>
}

const ButtonView = styled.div`
	width: 60px;
	background-color: orange;
	height: 40px;
	border-radius: 5px;
	margin-left: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`
