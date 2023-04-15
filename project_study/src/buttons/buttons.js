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
				<Div1>1.4rem</Div1>
				<Div2>1.8rem</Div2>
				<Div3>2.0rem</Div3>
				<Div4>2.4rem</Div4>
				<Div5>3.2rem</Div5>
				<Div6>4.8rem</Div6>
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
const Div1 = styled.div`
	font-size: 1.4rem;
`
const Div2 = styled.div`
	font-size: 1.8rem;
`
const Div3 = styled.div`
	font-size: 2rem;
`
const Div4 = styled.div`
	font-size: 2.4rem;
`
const Div5 = styled.div`
	font-size: 3.2rem;
`
const Div6 = styled.div`
	font-size: 4.8rem;
`
