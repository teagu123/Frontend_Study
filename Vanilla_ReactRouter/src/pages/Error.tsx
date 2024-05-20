import { styled } from 'styled-components'

function Error() {
	return <Container>404Error Page입니다.</Container>
}
export default Error

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
