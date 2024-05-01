import { useState } from 'react'
import { styled } from 'styled-components'
import ModalPortal from '../components/modals/modalPortal'
import SuccessModal from '../components/modals/modal'

function DetailPage() {
	const [isView, setIsView] = useState<boolean>(false)

	const onHandle = () => {
		setIsView(true)
	}
	return (
		<Container>
			<h1>detail</h1>
			<button onClick={onHandle}>modal open</button>
			{isView && (
				<ModalPortal>
					<SuccessModal />
				</ModalPortal>
			)}
		</Container>
	)
}
export default DetailPage

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: gray;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	* {
		margin-bottom: 3rem;
	}
`
