import styled from 'styled-components'
import List from './components/list'
import SlideMotion from 'react-animate-magic'

function App() {
	return (
		<Cotainer>
			<List />
			<SlideMotion />
		</Cotainer>
	)
}

export default App

const Cotainer = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`
