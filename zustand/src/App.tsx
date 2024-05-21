import WelcomePage from './pages/welcome'
import UserStore from './store/store'

function App() {
	const { name, setName } = UserStore()

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value)
	}

	return (
		<>
			{name !== 'bob' ? (
				<>
					<h1>누구세요?</h1>
					<input type="text" onChange={handleInput} />
				</>
			) : (
				<WelcomePage />
			)}
		</>
	)
}

export default App
