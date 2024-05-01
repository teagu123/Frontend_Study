import styled from 'styled-components'

function SuccessModal() {
	return (
		<S.Wrapper>
			<S.Box>
				<S.Text>Modal Portal</S.Text>
				<button>Close</button>
			</S.Box>
		</S.Wrapper>
	)
}
export default SuccessModal

const Wrapper = styled.div`
	position: fixed;
	top: -5rem;
	left: 0;
	height: 110vh;
	min-height: 100%;
	width: 100%;
	z-index: 999;
	background-color: rgba(0, 0, 0, 0.4);
	display: flex;
	justify-content: center;
	align-items: center;
`

const Text = styled.div`
	font-size: 23px;
	margin: 2rem 0;
`
const Box = styled.div`
	width: 45rem;
	padding: 2rem 0;
	text-align: center;
	border-radius: 0.5rem;
	background-color: white;
	animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
	position: fixed;

	@keyframes fadeIn {
		0% {
			top: -20rem;
		}

		100% {
			top: 40%;
		}
	}
`

const S = { Wrapper, Text, Box }
