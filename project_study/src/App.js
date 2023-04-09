import PriceInput from './components/\bPriceInput/priceInput'
import SearchGPS from './components/GPS/gps'
import HashTag from './components/HashTag/hashTag'

function App() {
	return (
		<>
			<h1>주소 검색</h1>
			<SearchGPS />

			<h1>가격 3자리 마다 , 찍기</h1>
			<PriceInput />

			<h1>해쉬태그</h1>
			<HashTag />

			<h1></h1>
		</>
	)
}

export default App
