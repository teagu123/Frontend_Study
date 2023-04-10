import { createBrowserRouter } from 'react-router-dom'
import Buttons from '../buttons/buttons'
import SearchGPS from '../pages/GPS/gps'
import PriceInput from '../pages/\bPriceInput/priceInput'
import HashTag from '../pages/HashTag/hashTag'
import Carousel from '../pages/Carousel/carousel'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Buttons />,
		children: [
			{
				path: '/GPS',
				element: <SearchGPS />,
			},
			{
				path: '/Hash',
				element: <HashTag />,
			},
			{
				path: '/Price',
				element: <PriceInput />,
			},
			{
				path: '/Carousel',
				element: <Carousel />,
			},
		],
	},
])

export default router
