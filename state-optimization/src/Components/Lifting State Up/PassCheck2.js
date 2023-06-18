function PassCheck2({ onChangeMoney }) {
	console.log('자식2')
	return (
		<>
			<input onChange={e => onChangeMoney(e.target.value)} />
		</>
	)
}
export default PassCheck2
