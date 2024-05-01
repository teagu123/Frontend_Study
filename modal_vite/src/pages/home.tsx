import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'

function HomePage() {
	const navigate = useNavigate()

	return (
		<Container>
			<button onClick={() => navigate('/detail')}>detail</button>
		</Container>
	)
}
export default HomePage

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: yellow;
`
