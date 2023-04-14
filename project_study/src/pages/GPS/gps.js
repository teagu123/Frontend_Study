import { useState } from 'react'
import DaumPostcode from 'react-daum-postcode'

function SearchGPS() {
	/*
        npm install react-daum-postcode 설치

        1. 주소 검색 버튼을 누르면 주소검색 나올수있도록

		Error
		- Uncaught TypeError: Cannot read property 'document' of null
			- 해결방법 : 버전을 1.7.4로 내림
		
		- 그래서 Cannot read properties of undefined (reading 'postcode') 에러 뜸
			- 해결방법 : index.js에서 </React.StrictMode> 삭제했음

		일단 위도 경도를 return값으로 줄수있는지 찾을 예정
    */

	const [viewGPS, setViewGPS] = useState(false)

	//일단 지번으로 가져오고,
	const gpsSelect = data => {
		console.log(data.jibunAddress)
		let resultAddress = data.jibunAddress.split('동')
		// resultAddress[0]은 동까지만 나오도록 했다.
		console.log(resultAddress[0] + '동')
	}

	const postCodeStyle = {
		display: 'block',
		position: 'absolute',
		top: '20%',
		width: '400px',
		height: '400px',
		padding: '7px',
		zIndex: 100,
	}

	return (
		<>
			<h1>위치검색</h1>
			<button
				onClick={() => {
					setViewGPS(!viewGPS)
				}}
			>
				토글스위치
			</button>
			{viewGPS ? (
				<DaumPostcode style={postCodeStyle} onComplete={gpsSelect} autoClose />
			) : null}
		</>
	)
}
export default SearchGPS
