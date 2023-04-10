import { useEffect, useState } from 'react'
import {
	Outlet,
	useNavigate,
	useParams,
	useSearchParams,
} from 'react-router-dom'
import styled from 'styled-components'

function Buttons() {
	const [viewGps, setViewGps] = useState(false)
	const [viewHash, setViewHash] = useState(false)
	const [search, setSearch] = useSearchParams()
	const navigate = useNavigate()

	let list = search.get('list')
	console.log(search)
	const onGps = () => {
		setViewGps(prev => !prev)
	}
	const onHash = () => {
		setViewHash(prev => !prev)
	}

	const onBtnGps = e => {
		navigate(`/Gps?list=${e.target.innerText}`)
	}
	const onBtnHashTag = e => {
		navigate(`/Hash?list=${e.target.innerText}`)
	}
	const onBtnPriceInput = e => {
		navigate(`/Price?list=${e.target.innerText}`)
	}

	useEffect(() => {
		if (list === 'GPS') return setViewGps(true)
		if (list === 'HashTag' || list === 'PriceInput') return setViewHash(true)
	}, [])
	return (
		<>
			<Wrap>
				<button onClick={onGps}>위치정보 기능</button>
				{viewGps && (
					<Button1
						onClick={onBtnGps}
						style={{ backgroundColor: list === 'GPS' ? 'yellow' : 'white' }}
					>
						GPS
					</Button1>
				)}

				<button onClick={onHash}>해시태그/가격 입력</button>
				{viewHash && (
					<>
						<Button1
							onClick={onBtnHashTag}
							style={{
								backgroundColor: list === 'HashTag' ? 'yellow' : 'white',
							}}
						>
							HashTag
						</Button1>
						<Button2
							onClick={onBtnPriceInput}
							style={{
								backgroundColor: list === 'PriceInput' ? 'yellow' : 'white',
							}}
						>
							PriceInput
						</Button2>
					</>
				)}
				<Button1
					onClick={() => {
						navigate('/Carousel')
					}}
				>
					Carousel로 고고~
				</Button1>
			</Wrap>
			<Outlet />
		</>
	)
}
export default Buttons

const Wrap = styled.div`
	display: flex;
	flex-direction: column;
`
const Button1 = styled.button`
	background-color: yellow;
`
const Button2 = styled.button`
	background-color: green;
`
