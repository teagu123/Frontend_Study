import { useState } from 'react'
import { RESERVATION_LIST } from './reservation '

function Level2index() {
	const [reserverNumber, setReserverNumber] = useState('')
	const onSubmitTotal = e => {
		e.preventDefault()
		let name = e.target.username.value
		let phone = e.target.userphone.value

		setReserverNumber(
			RESERVATION_LIST.find(el => el.phone.replace(/-/g, '') === phone),
		)
	}

	return (
		<>
			<form onSubmit={onSubmitTotal}>
				<p>
					이름: <input name="username" />
				</p>
				<p>
					연락처: <input name="userphone" maxlength="13" />
				</p>
				<button>예약번호 확인</button>
			</form>
			<p id="reservation-number">{reserverNumber.number}</p>
		</>
	)
}
export default Level2index
