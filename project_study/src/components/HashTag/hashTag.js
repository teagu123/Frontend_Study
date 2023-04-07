import { useState } from 'react'
import styled from 'styled-components'

function HashTag() {
	//inut값 관리하는거랑 hashtag를 저장하는 배열 선언
	const [Input, setInput] = useState('')
	const [hashArr, setHashArr] = useState([])

	const onChangeHashTag = e => {
		setInput(e.target.value)
	}

	const hashRemove = select => {
		console.log(hashArr)
	}

	const onkeyDown = e => {
		if (e.nativeEvent.isComposing) return
		if (e.key === 'Enter') {
			if (Input.trim().length === 0) return
			setHashArr(prev => [...prev, Input])
		}
	}
	return (
		<>
			<HashInput
				placeholder="HashTag를 입력하세요"
				type="text"
				onChange={onChangeHashTag}
				onKeyDown={onkeyDown}
			/>
			<Ul>
				{hashArr.map(hash => (
					<Li onClick={hashRemove}>#{hash}</Li>
				))}
			</Ul>
		</>
	)
}
export default HashTag

const Ul = styled.ul``

const HashInput = styled.input`
	width: auto;
	margin: 10px;
	display: inline-flex;
	outline: none;
	cursor: text;
	line-height: 2rem;
	margin-bottom: 0.75rem;
	min-width: 8rem;
	border: none;
	display: inline-block;
`
const Li = styled.li`
	margin-top: 5px;
	background: #ffeee7;
	border-radius: 56px;
	padding: 8px 12px;
	color: #ff6e35;
	display: inline-block;
	justify-content: center;
	align-items: center;
	font-weight: bold;
	font-size: 1rem;
	line-height: 20px;
	margin-right: 5px;
	cursor: pointer;
`
