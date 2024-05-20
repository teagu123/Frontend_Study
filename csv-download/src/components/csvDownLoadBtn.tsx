import { styled } from 'styled-components'
import { CSVLink } from 'react-csv'
import { IlistData } from './list'

function CsvDownLoad(data: IlistData[]) {
	let headers = [
		{ label: '나이', key: 'age' },
		{ label: '이름', key: 'name' },
		{ label: '이메일', key: 'email' },
	]

	return (
		<CSVLink data={data} filename="userList.csv" headers={headers}>
			엑셀 다운로드
		</CSVLink>
	)
}
export default CsvDownLoad

const Button = styled.div`
	padding: 20px;
	background-color: orange;
	text-align: center;
	cursor: pointer;
	margin-top: 20px;
	border-radius: 10px;
`
