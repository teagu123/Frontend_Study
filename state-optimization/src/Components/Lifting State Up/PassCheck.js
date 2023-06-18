function PassCheck({ onChangeMoney }) {
	console.log('자식')
	return (
		<>
			<input onChange={e => onChangeMoney(e.target.value)} />
		</>
	)
}
export default PassCheck
