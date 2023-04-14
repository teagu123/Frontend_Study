import { useState } from 'react'
import styled from 'styled-components'

function Level3Index() {
	const [list, setList] = useState([])
	const [total, setTotal] = useState([])

	const onSubmitForm = e => {
		e.preventDefault()
		let id = Math.floor(Math.random() * 1000000)
		let ingredient = e.target.ingredient.value
		let weight = e.target.weight.value
		setList([...list, { ingredient, weight, id }])
	}

	const onDelete = el => {
		setList(list.filter(e => e.id !== el.id))
	}

	return (
		<>
			<form id="ingredient-form" onSubmit={onSubmitForm}>
				<p>
					재료명: <input name="ingredient" />
				</p>
				<p>
					용량: <input name="weight" />
				</p>
				<button>추가</button>
			</form>
			<Table>
				<tr class="thead">
					<th>재료</th>
					<th>무게</th>
					<th>관리</th>
				</tr>
				{list.map(el => (
					<tr>
						<td>{el.ingredient}</td>
						<td>{el.weight}</td>
						<td>
							<button onClick={() => onDelete(el)}>삭제</button>
						</td>
					</tr>
				))}
			</Table>
			<button id="submit_button" type="button" onClick={() => setTotal(list)}>
				제출
			</button>
			<ul id="ingredient-list">
				{total.map(el => (
					<li>
						재료: {el.ingredient}, 무게 : {el.weight}
					</li>
				))}
			</ul>
		</>
	)
}
export default Level3Index

const Table = styled.table`
	border-collapse: collapse;
	border: 1px solid #999;
`
