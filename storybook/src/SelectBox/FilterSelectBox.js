import { useState } from 'react'
import styled from 'styled-components'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { BsCaretDownFill } from 'react-icons/bs'

function FilterSelectBox() {
	const [isShowOptions, setShowOptions] = useState(false)
	const [selectFilter, setSelectFilter] = useState('최신 순 정렬')

	let category
	let filter

	if (category === null) {
		category = 'total'
	}
	if (filter === null) {
		filter = 'recent'
	}

	const FilterArr = [
		{
			name: '최신 순 정렬',
			url: 'recent',
		},
		{
			name: '인기 순 정렬 (조회 수)',
			url: 'popular',
		},
		{
			name: '좋아요 순 정렬',
			url: 'like',
		},
	]

	const onClickSelectFilter = e => {
		setSelectFilter(() => e.name)
	}

	return (
		<SelectBox onClick={() => setShowOptions(prev => !prev)}>
			<Button>{selectFilter}</Button>
			<IconBox>
				<BsCaretDownFill size={'30'} color="#FB9B00" />
			</IconBox>
			{isShowOptions && (
				<SelectOptions>
					{FilterArr.map((el, idx) => (
						<Option
							onClick={() => onClickSelectFilter(el)}
							select={el.url === filter}
							key={idx}
						>
							{el.name}
						</Option>
					))}
				</SelectOptions>
			)}
		</SelectBox>
	)
}
export default FilterSelectBox

const SelectBox = styled.div`
	position: relative;
	width: 20rem;
`
const Button = styled.button`
	width: 20rem;
	border: 1px solid #c4c4c4;
	box-sizing: border-box;
	border-radius: 10px;
	padding: 12px 13px;
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	line-height: 16px;
	text-align: left;
	background: #ffffff;
	color: ${({ theme }) => theme.COLOR.common.gray[200]};
	:focus {
		border: 1px solid ${({ theme }) => theme.COLOR.hover};
		border-radius: 10px;
		outline: 3px solid ${({ theme }) => theme.COLOR.hover};
		border-radius: 10px;
	}
`
const SelectOptions = styled.ul`
	width: 20rem;
	list-style: none;
	border: 1px solid #c4c4c4;
	box-sizing: border-box;
	box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.15);
	border-radius: 10px;
	margin-top: 0.9rem;
	position: absolute;
	background-color: #ffffff;
`
const Option = styled.li`
	border: none;
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	line-height: 1.6rem;
	padding: 0.7rem 1rem;
	margin: 0.5rem 0.7rem;
	box-sizing: border-box;
	color: ${({ theme, select }) => select && theme.COLOR.hover};
	font-family: ${({ theme, select }) => select && theme.FONT_WEIGHT.bold};
	:hover {
		background-color: ${({ theme }) => theme.COLOR.orange};
		border-radius: 5px;
	}
`
const IconBox = styled.div`
	position: absolute;
	right: 0.7rem;
	top: 0.8rem;
`
