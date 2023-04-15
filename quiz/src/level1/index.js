import { useState } from 'react'
import { BANK_LIST } from './account'
import { ACCOUNT_FORM } from './account'

function Level1Index() {
	// const [bankName, setBankName] = useState('')
	// const [bankMasking, setBankMasking] = useState()

	// const onClickBank = e => {
	// 	setBankName(e.target.value)
	// }
	// console.log({ bankName })
	// const onSubmitTotal = e => {
	// 	e.preventDefault()
	// 	let num = e.target.inputNumber.value

	// 	if (bankName === '성용은행')
	// 		setBankMasking(num.replace(/(\d{2})(\d{8})(\d{2})/, '$1-********-$3'))

	// 	if (bankName === '사과은행')
	// 		setBankMasking(num.replace(/(\d{2})(\d{7})(\d{3})/, '$1-*******-$3'))

	// 	if (bankName === '코딩은행')
	// 		setBankMasking(num.replace(/(\d{2})(\d{6})(\d{4})/, '$1-******-$3'))

	// 	if (bankName === '자바은행')
	// 		setBankMasking(num.replace(/(\d{2})(\d{8})(\d{2})/, '$1-********-$3'))

	// 	if (bankName === '파이은행')
	// 		setBankMasking(num.replace(/(\d{2})(\d{4})(\d{6})/, '$1-****-$3'))

	// 	if (bankName === '리엑은행')
	// 		setBankMasking(num.replace(/(\d{2})(\d{9})(\d{1})/, '$1-*********-$3'))

	// 	if (bankName === '자스은행')
	// 		setBankMasking(num.replace(/(\d{2})(\d{4})(\d{6})/, '$1-****-$3'))

	// 	if (bankName === '모두은행')
	// 		setBankMasking(num.replace(/(\d{2})(\d{2})(\d{8})/, '$1-**-$3'))
	// }

	//
	const [bankNum, setBankNum] = useState()
	let Arr = 0
	const onClickBank = e => {
		setBankNum(e.target.value)
	}
	console.log(bankNum)
	const onSubmitTotal = e => {
		e.preventDefault()
		let a = ACCOUNT_FORM[bankNum][Number(bankNum) + 1]
		Arr = a.split('-')
		console.log(Arr)
	}
	return (
		<>
			<form onSubmit={onSubmitTotal}>
				<p>
					은행선택:
					<select id="bank-selector" onChange={onClickBank}>
						{BANK_LIST.map((el, idx) => (
							<option value={idx}>{el[idx + 1]}</option>
						))}
					</select>
				</p>
				<p>
					계좌입력:
					<input id="account-input" maxLength="12" name="inputNumber" />
				</p>
				<button>제출</button>
			</form>
			<ul id="account-list">{/* <li>성용은행 : {bankMasking}</li> */}</ul>
		</>
	)
}
export default Level1Index
