import { ReactNode } from 'react'
import Home from '../../pages/Home'
import Detail from '../../pages/Detail'
import Register from '../../pages/Register'
import Error from '../../pages/Error'

export interface IRoutes {
	path: string
	component: ReactNode
}
const router: IRoutes[] = [
	{ path: '/', component: <Home /> },
	{ path: '/detail', component: <Detail /> },
	{ path: '/register', component: <Register /> },
	{ path: '*', component: <Error /> },
]

export default router
