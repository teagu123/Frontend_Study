import { useEffect, useState } from 'react'

function App() {
	const [list, setList] = useState([])

	useEffect(() => {
		fetch('/todo')
			.then(res => res.json())
			.then(data => {
				setList(data)
			})
	}, [])

	return (
		<>
			<h1>MSW Test</h1>
			<input type="text" />
			<button>추가</button>
			<div>-</div>

			{list && list.map(el => <div key={el.id}>{el.title}</div>)}
		</>
	)
}

export default App
