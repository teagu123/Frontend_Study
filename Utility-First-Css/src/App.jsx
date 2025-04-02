import { useState } from 'react'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div
			style={{
				background: 'red',
				fontSize: '16px',
				margin: '10px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			HTML의 탄생이 시작됩니다.
		</div>
	)
}

export default App
