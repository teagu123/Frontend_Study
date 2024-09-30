import { sum } from './toBe.js'

test('sum 함수는 두  숫자를 더하는거다.', () => {
	expect(sum(1, 2)).toBe(3)
})
