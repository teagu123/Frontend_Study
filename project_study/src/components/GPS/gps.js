import { useState } from 'react'
import DaumPostcode from 'react-daum-postcode'

function GPS() {
	/*
        npm install react-daum-postcode 설치

        1. 주소 검색 버튼을 누르면 주소검색 나올수있도록

		Error
		- Uncaught TypeError: Cannot read property 'document' of null
			- 해결방법 : 버전을 1.7.4로 내림
		
		- 그래서 Cannot read properties of undefined (reading 'postcode') 에러 뜸
			- 해결방법 : index.js에서 </React.StrictMode> 삭제했음
    */

	const [viewGPS, setViewGPS] = useState(false)

	const gpsSelect = data => {
		console.log(data.address)
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
export default GPS
