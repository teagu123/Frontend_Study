import { useEffect, useState } from 'react'
import Page1 from './Pages/page1'
import Page2 from './Pages/page2'
import Page3 from './Pages/page3'

function ReactRouterDom() {
	const [url, setUrl] = useState('')

	const navigate = url => {
		window.history.pushState('', null, `${url}`)
		setUrl(url)
	}

	useEffect(() => {
		const handleLocationChange = () => {
			setUrl(window.location.pathname)
		}

		handleLocationChange()

		window.addEventListener('popstate', handleLocationChange)
	}, [])

	return (
		<>
			<button onClick={() => navigate('/1page')}>1page</button>
			<button onClick={() => navigate('/2page')}>2page</button>
			<button onClick={() => navigate('/3page')}>3page</button>
			{url === '/1page' && <Page1 />}
			{url === '/2page' && <Page2 />}
			{url === '/3page' && <Page3 />}
		</>
	)
}
export default ReactRouterDom
