import { useState } from 'react'
import PassCheck from './PassCheck'
import PassCheck2 from './PassCheck2'

function TicketOffice() {
	const [payMoney, setPayMoney] = useState()
	console.log('부모')

	const onPayMoney = e => {
		setPayMoney(e)
	}
	return (
		<>
			<h3>매표소 입니다.</h3>
			<div>지금까지 낸 가격은 {payMoney}</div>
			{payMoney > 10000 ? <div>환영합니다</div> : <div>돈이 부족합니다.</div>}
			<PassCheck onChangeMoney={onPayMoney} />
			<PassCheck2 onChangeMoney={onPayMoney} />
		</>
	)
}
export default TicketOffice
