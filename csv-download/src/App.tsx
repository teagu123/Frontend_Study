import styled from 'styled-components'
import List from './components/list'

function App() {
	return (
		<Cotainer>
			<List />
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
