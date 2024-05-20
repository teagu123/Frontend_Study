import createBrowserRouter from './components/Router/createBrowserRouter'
import router from './components/Router/router'
import Header from './components/layout/header/header'

function App() {
	let routes = createBrowserRouter(router)
	return (
		<>
			<Header />
			{routes}
		</>
	)
}

export default App
