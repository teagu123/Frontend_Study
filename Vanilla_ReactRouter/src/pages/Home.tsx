import { styled } from 'styled-components'

function Home() {
	return <Container>HomePage</Container>
}
export default Home

const Container = styled.div`
	width: 100vw;
	height: 90vh;
	background-color: orange;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 45px;
	font-weight: bold;
`
