import { sum } from '../toBe/toBe'

test('sum함수가 호출되었다', () => {
	const sumSpy = jest.fn(sum) //sum함수의 호출을 감시하기 때문에 Spy를 추가한다.
	sumSpy(1, 2)
	expect(sumSpy).toHaveBeenCalled() //이거는 쓰지말자 의미가 없다. 왜냐면 호출 되었는지만 나오는것이기때문
})

test('sum함수가 1번 호출되었다', () => {
	const sumSpy = jest.fn(sum)
	sumSpy(1, 2)
	expect(sumSpy).toBeCalledTimes(1) //이러면 한번만 호출한것을 확인할수있으니 더 상위호환이다.
})
test('sum함수가 1과 2와 호출되었다', () => {
	const sumSpy = jest.fn(sum)
	sumSpy(1, 2)
	expect(sumSpy).toBeCalledWith(1, 2) //이러면 인수를 같이 테스트 가능하다. 함수가 제대로된 인수를 받아서 호츨을 하고있는지 이거를 아는것이 좋다.
})
