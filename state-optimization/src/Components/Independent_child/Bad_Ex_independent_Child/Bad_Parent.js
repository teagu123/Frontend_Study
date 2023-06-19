import { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

function Bad_Parent() {
	const [viewChild, setViewChild] = useState(false)
	return (
		<>
			<button onClick={() => setViewChild(!viewChild)}>보여주기</button>
			{viewChild && <Child1 />}
			<Child2 />
		</>
	)
}
export default Bad_Parent
