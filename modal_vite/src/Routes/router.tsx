import DetailPage from '../pages/detail'
import HomePage from '../pages/home'

const router = [
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/detail',
		element: <DetailPage />,
	},
]

export default router
