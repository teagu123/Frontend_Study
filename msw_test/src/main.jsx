import { createRoot } from 'react-dom/client'

import App from './App.jsx'

async function enableMocking() {
	if (!import.meta.env.DEV) {
		return
	}

	const { worker } = await import('./mocks/browser.js')

	return worker.start()
}

enableMocking().then(() => {
	createRoot(document.getElementById('root')).render(<App />)
})
