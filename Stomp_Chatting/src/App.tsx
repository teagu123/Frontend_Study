import styled from 'styled-components'

function App() {
	return (
		<Wrapper>
			<Box></Box>
		</Wrapper>
	)
}

export default App

const Wrapper = styled.div`
	width: 100v;
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
`
