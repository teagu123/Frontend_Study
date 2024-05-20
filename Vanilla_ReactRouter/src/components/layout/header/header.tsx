import { styled } from 'styled-components'

function Header() {
	interface NavListType {
		url: string
		name: string
	}

	const navList: NavListType[] = [
		{
			url: '/',
			name: 'home',
		},
		{
			url: '/detail',
			name: 'detail',
		},
		{
			url: '/register',
			name: 'register',
		},
	]

	return (
		<Container>
			<Logo>
				<a href="/">Vanilla Router</a>
			</Logo>
			<NavList>
				{navList.map(el => (
					<a href={el.url}>{el.name}</a>
				))}
			</NavList>
		</Container>
	)
}
export default Header

const Container = styled.div`
	width: 100vw;
	height: 10vh;
	background-color: #00ff7f;
	display: flex;
	align-items: center;
	justify-content: space-between;
`
const Logo = styled.div`
	margin-left: 3rem;
	font-weight: bold;
	font-size: 30px;
	color: #008000;
	& > a {
		text-decoration: none;
	}
`
const NavList = styled.div`
	display: flex;
	* {
		color: #fffafa;
		margin-left: 3rem;
	}
	*:hover {
		color: #1e90ff;
	}
	& > a {
		text-decoration: none;
	}
	margin-right: 3rem;
	font-weight: bold;
	font-size: 27px;
	cursor: pointer;
`
