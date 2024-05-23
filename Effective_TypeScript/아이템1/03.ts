const states = [
	{ name: 'tee', capital: '111' },
	{ name: 'tee', capital: '111' },
	{ name: 'tee', capital: '111' },
	{ name: 'tee', capital: '111' },
]

for (const state of states) {
	console.log(state.capitol)
}
//'capitol' 속성이 '{ name: string; capital: string; }' 형식에 없습니다. 'capital'을(를) 사용하시겠습니까?
//위와같은 문장이 뜬다. 근데 추천하는것은 타입추론을 통해서 하는것보다 interface를 생성하여 진행한다.
