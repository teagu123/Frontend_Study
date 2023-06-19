import { useState } from 'react'

function Child() {
	const [viewChild, setViewChild] = useState(false)
	return (
		<>
			<button onClick={() => setViewChild(!viewChild)}>보여주기</button>
			{viewChild && <div>Child1입니다.</div>}
		</>
	)
}
export default Child
