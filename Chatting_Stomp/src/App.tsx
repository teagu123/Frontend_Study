import styled from 'styled-components'
import { testList } from './MockData/data'
import { useState } from 'react'

function App() {
	const [isChatting, setIsChatting] = useState<boolean>(false)
	return (
		<Wrapper>
			<Box>
				<List>
					{testList.map(el => (
						<ListBox>{el.content}</ListBox>
					))}
				</List>
			</Box>
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
	padding: 20px;
`
const List = styled.div`
	/* background-color: red; */
`
const ListBox = styled.div`
	height: 50px;
	display: flex;
	align-items: center;
	margin-left: 15px;
	/* background-color: red; */
	border-bottom: 1px solid gray;
	&:last-child {
		border: none;
	}
`
