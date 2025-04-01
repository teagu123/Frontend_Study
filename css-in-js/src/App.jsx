import { useState } from 'react'
import { styled } from 'styled-components'

function App() {
	const [count, setCount] = useState(false)

	return (
		<Wrapper>
			<Test $count={count}>Test 문구 입니다.</Test>
			<Btn1 onClick={() => setCount(prev => !prev)} $count={count}>
				색상 변경
			</Btn1>
			{/* <Btn2>d</Btn2> */}
		</Wrapper>
	)
}

export default App

const Wrapper = styled.div`
	margin: 0;
	padding: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`
const Test = styled.div`
	background-color: ${props => (props.$count ? 'blue' : 'gray')};
	margin: 30px;
	font-size: 30px;
`
const Btn1 = styled.button`
	background-color: ${props => (props.$count ? 'blue' : 'gray')};
`
const Btn2 = styled.button``
