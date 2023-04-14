import { useState } from 'react'
import { BANK_LIST } from './account'
import { ACCOUNT_FORM } from './account'

function Level1Index() {
	const [bankNum, setBankNum] = useState(1)
	const [bankMasking, setBankMasking] = useState()

	const onClickBank = e => {
		setBankNum(e.target.value)
	}

	const onSubmitTotal = e => {
		e.preventDefault()
		let num = e.target.inputNumber.value

		if (bankNum === 1) {
			setBankMasking(num.replace(/(\d{2})(\d{8})(\d{2})/, '$1-********-$3'))
		}
		if (bankNum === 2) {
			setBankMasking(num.replace(/(\d{2})(\d{7})(\d{3})/, '$1-*******-$3'))
		}
		if (bankNum === 3) {
			setBankMasking(num.replace(/(\d{2})(\d{6})(\d{4})/, '$1-******-$3'))
		}
		if (bankNum === 4) {
			setBankMasking(num.replace(/(\d{2})(\d{8})(\d{2})/, '$1-********-$3'))
		}
		if (bankNum === 5) {
			setBankMasking(num.replace(/(\d{2})(\d{4})(\d{6})/, '$1-****-$3'))
		}
		if (bankNum === 6) {
			setBankMasking(num.replace(/(\d{2})(\d{9})(\d{1})/, '$1-*********-$3'))
		}
		if (bankNum === 7) {
			setBankMasking(num.replace(/(\d{2})(\d{4})(\d{6})/, '$1-****-$3'))
		}
		if (bankNum === 8) {
			setBankMasking(num.replace(/(\d{2})(\d{2})(\d{8})/, '$1-**-$3'))
		}

		console.log(bankMasking)
	}

	return (
		<>
			<form onSubmit={onSubmitTotal}>
				<p>
					은행선택:
					<select id="bank-selector" onChange={onClickBank}>
						{BANK_LIST.map((el, idx) => (
							<option value={idx + 1}>{el[idx + 1]}</option>
						))}
					</select>
				</p>
				<p>
					계좌입력:
					<input id="account-input" maxLength="12" name="inputNumber" />
				</p>
				<button>제출</button>
			</form>
			<ul id="account-list">
				<li>성용은행 : 12-********-34</li>
			</ul>
		</>
	)
}
export default Level1Index
