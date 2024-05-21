import UserStore from '../store/store'

function WelcomePage() {
	const { name, setName } = UserStore()

	return (
		<>
			<h1>반가워~</h1>
			<h1>{name}</h1>
		</>
	)
}
export default WelcomePage
