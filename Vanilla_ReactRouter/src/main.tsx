import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import GlobalStyles from './components/Styles/global.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<>
		<App />
		<GlobalStyles />
	</>,
)
