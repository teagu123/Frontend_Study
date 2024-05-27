import Square from './components/square'
import './App.css'
import { useState } from 'react'
import winner from './utils/winner'

export default function Board() {
	const [isNextX, setIsNextX] = useState(true)
	const [boardVal, setBoardVal] = useState(Array(9).fill(null))

	const handleSet = (idx: number) => {
		if (boardVal[idx]) return
		const nextSquares = boardVal.slice() //불변성
		isNextX ? (nextSquares[idx] = 'X') : (nextSquares[idx] = 'O')
		setBoardVal(nextSquares)
		setIsNextX(prev => !prev)
	}

	const isWinner = winner(boardVal)

	return (
		<>
			{isWinner ? (
				<h1>승자는 {isWinner}입니다~</h1>
			) : (
				<div>다음턴 : {isNextX ? 'X' : 'O'}</div>
			)}
			<div className="board-row">
				<Square idx={0} value={boardVal[0]} onClick={handleSet} />
				<Square idx={1} value={boardVal[1]} onClick={handleSet} />
				<Square idx={2} value={boardVal[2]} onClick={handleSet} />
			</div>
			<div className="board-row">
				<Square idx={3} value={boardVal[3]} onClick={handleSet} />
				<Square idx={4} value={boardVal[4]} onClick={handleSet} />
				<Square idx={5} value={boardVal[5]} onClick={handleSet} />
			</div>
			<div className="board-row">
				<Square idx={6} value={boardVal[6]} onClick={handleSet} />
				<Square idx={7} value={boardVal[7]} onClick={handleSet} />
				<Square idx={8} value={boardVal[8]} onClick={handleSet} />
			</div>
		</>
	)
}
