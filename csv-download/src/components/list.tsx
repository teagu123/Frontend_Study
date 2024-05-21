import { styled } from 'styled-components'
import CsvDownLoad from './csvDownLoadBtn'
import { useState } from 'react'

export interface IlistData {
	age: number
	name: string
	email: string
}

function List() {
	const [listData, setListData] = useState<IlistData[]>([
		{
			age: 13,
			name: '홍길동',
			email: 'gildong@naver.com',
		},
		{
			age: 23,
			name: '즐라탄',
			email: 'latan@naver.com',
		},
		{
			age: 30,
			name: '호날두',
			email: 'nal@gmail.com',
		},
		{
			age: 10,
			name: '치킨',
			email: '치킨@gmail.com',
		},
		{
			age: 32,
			name: '메시',
			email: '메시@gmail.com',
		},
		{
			age: 35,
			name: '그리즈만',
			email: '그리즈만@naver.com',
		},
	])

	const [value, setValue] = useState({
		age: 0,
		name: '',
		email: '',
	})

	const handleInput = (subject: string, value: number | string) => {
		if (subject === 'age' && typeof value === 'number')
			setValue(prev => ({ ...prev, age: value }))
		if (typeof value === 'string') {
			if (subject === 'name') setValue(prev => ({ ...prev, name: value }))
			if (subject === 'email') setValue(prev => ({ ...prev, email: value }))
		}
	}

	const handleSubmit = () => {
		if (
			value.age !== 0 &&
			value.name.length !== 0 &&
			value.email.length !== 0
		) {
			setListData(prev => [...prev, value])
		} else {
			alert('입력을 해주셔야죠~~')
		}
	}

	return (
		<Wrapper>
			<ContainerGray>
				<div>이름</div>
				<div>나이</div>
				<div>이메일</div>
			</ContainerGray>
			{listData.map((el, idx) => (
				<Container key={idx}>
					<div>{el.name}</div>
					<div>{el.age}</div>
					<div>{el.email}</div>
				</Container>
			))}
			<ContainerGray>
				<Input
					type="text"
					placeholder="이름"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						handleInput('name', e.target.value)
					}
				/>
				<Input
					type="number"
					placeholder="나이"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						handleInput('age', e.target.value)
					}
				/>
				<Input
					type="text"
					placeholder="이메일"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						handleInput('email', e.target.value)
					}
				/>
				<button onClick={handleSubmit}>등록</button>
			</ContainerGray>
			<CsvDownLoad listData={listData} />
		</Wrapper>
	)
}
export default List

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`
const ContainerGray = styled.div`
	display: flex;
	& > div {
		margin-right: 3rem;
		min-width: 150px;
		padding-left: 5px;
		width: 100%;
	}
	border: 1px solid black;
	font-size: 18px;
	background-color: #fec672;
`
const Container = styled.div`
	display: flex;
	& > div {
		margin-right: 3rem;
		min-width: 150px;
		padding-left: 5px;
		width: 100%;
	}
	border: 1px solid black;
`
const Input = styled.input`
	width: 100%;
	padding: 5px;
`
