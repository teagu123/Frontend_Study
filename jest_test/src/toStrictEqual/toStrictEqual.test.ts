import { toObj } from './toStrictEqual'

//t
test('', () => {
	//객체인걸 확인
	expect(toObj()).toStrictEqual({ a: 'hello' })

	expect(toObj()).not.toBe({ a: 'hello' })
})
