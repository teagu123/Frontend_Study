import { useState } from 'react'

function HashTag() {
	const [onChangeInput, setOnChangeInput] = useState('')
	const [hashArr, setHashArr] = useState([])
	const onChangeHashTag = () => {}
	return (
		<form>
			<input
				placeholder="HashTag를 입력하세요"
				type="text"
				onChange={onChangeHashTag}
			/>
			<button>입력</button>
		</form>
	)
}
export default HashTag
