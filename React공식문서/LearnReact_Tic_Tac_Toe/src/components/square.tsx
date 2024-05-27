interface SquareProps {
	idx: number
	value: string | 'X' | 'O'
	onClick: any
}

function Square({ idx, value, onClick }: SquareProps) {
	return (
		<button className="square" onClick={() => onClick(idx)}>
			{value}
		</button>
	)
}
export default Square
