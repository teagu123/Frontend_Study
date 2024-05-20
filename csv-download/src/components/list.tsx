import { styled } from 'styled-components'
import CsvDownLoad from './csvDownLoadBtn'

export interface IlistData {
	age: number
	name: string
	email: string
}

function List() {
	let listData: IlistData[] = [
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
	]

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
			<CsvDownLoad data={listData} />
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
