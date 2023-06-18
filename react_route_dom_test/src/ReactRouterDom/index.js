import { useEffect, useState } from 'react'
import Page1 from './Pages/page1'
import Page2 from './Pages/page2'
import Page3 from './Pages/page3'

function ReactRouterDom() {
	const [url, setUrl] = useState('')

	const navigate = url => {
		window.history.pushState(`${url}`, null, `${url}`)
		setUrl(url)
	}

	useEffect(() => {
		const handleLocationChange = () => {
			setUrl(window.location.pathname)
		}
		handleLocationChange()

		window.addEventListener('popstate', handleLocationChange)
	}, [])

	const preventGoBack = () => {
		window.history.pushState(window.location.href, '', window.location.href) //현재 주소 넣고
		window.history.pushState(window.history.go(-1), '', window.history.go(-1)) //현재 주소 넣고
		window.confirm('뒤로갈래요?~? 정말??')
			? window.history.pushState(null, '', window.location.href)
			: window.history.window.history.go(-1)
	}

	useEffect(() => {
		window.history.pushState(null, '', window.location.href)
		window.addEventListener('popstate', preventGoBack)
		console.log(window.history.go(-1))
		return () => {
			window.removeEventListener('popstate', preventGoBack)
		}
	}, [])

	const preventClose = e => {
		e.preventDefault()
		e.returnValue = ''
	}

	useEffect(() => {
		window.addEventListener('beforeunload', preventClose)

		return () => {
			window.removeEventListener('beforeunload', preventClose)
		}
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
