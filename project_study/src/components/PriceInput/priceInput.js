import { useState } from 'react'

function PriceInput() {
	const [price, setPrice] = useState()

	//이건 값 받아서 , 찍어주는 함수
	const addComma = price => {
		let regexp = /\B(?=(\d{3})+(?!\d))/g
		return price.toString().replace(regexp, ',')
	}
	let resultPrice = 0
	// onChange 여기서 console.log 정확한 값 나온다. 하지만 이거 state관리해서 inputValue에 넣으면 이상함
	const onPriceInput = e => {
		const { value } = e.target
		setPrice(addComma(value))
	}
	console.log(price)
	//console.log 는 오류 없음
	return (
		<input
			placeholder="가격을 입력하세요 :)"
			onChange={onPriceInput}
			defaultValue={price}
		/>
	)
}
export default PriceInput
