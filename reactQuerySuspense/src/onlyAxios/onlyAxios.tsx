import { useState } from 'react'
import axios from 'Axios'

function OnlyAxios() {
	/**
	 * 오직 Axios만 사용해서 통신을 진행한다.
	 * useState를 사용해서 error와 loading을 처리해야한다.
	 * 한개의 useState로 loading과 error를 객체로 처리해도 상관없지만 사용해야한다는것은 동일.
	 *
	 * 단점. 너무 불편하다 모든 페이지들마다 그리고 api들마다 이렇게 loading과 error를 처리해야하기때문이다.
	 */
	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<boolean>(false)

	const handleOnlyAxios = () => {
		setLoading(true)
		axios
			.get('https://jsonplaceholder.typicode.com/todos/1')
			.then(res => {
				setLoading(false)
				console.log(res)
			})
			.catch(err => {
				setError(false)
				console.log(error)
			})
	}

	return <button onClick={handleOnlyAxios}>onlyAxios</button>
}
export default OnlyAxios
