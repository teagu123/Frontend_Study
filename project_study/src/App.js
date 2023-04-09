import { RouterProvider } from 'react-router-dom'
import Buttons from './buttons/buttons'
import router from './Routes/routing'

function App() {
	return (
		<>
			<RouterProvider router={router}>
				<Buttons />
			</RouterProvider>
		</>
	)
}

export default App
