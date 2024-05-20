import { IRoutes } from './router'

function createBrowserRouter(router: IRoutes[]) {
	let location = window.location.pathname

	let findRoutes = router.find((el: IRoutes) => el.path === location)

	if (findRoutes === undefined) {
		findRoutes = router.find((el: IRoutes) => '*' === el.path)
	}

	return findRoutes?.component
}
export default createBrowserRouter
