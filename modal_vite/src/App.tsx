import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import router from './Routes/router'
import GlobalStyles from './components/Styles/global'

function App() {
	const RouterObject = createBrowserRouter(router)

	return (
		<>
			<RouterProvider router={RouterObject} />
			<GlobalStyles />
		</>
	)
}

export default App
