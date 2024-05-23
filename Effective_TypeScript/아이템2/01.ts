function add(a: number, b: number) {
	return a + b
}
add(10, 10)
/**
 * 방법1.
 * 매개변수 모두 type주지 않음
 * any로 처리
 *
 * 방법2.
 * 매개변수에 number를 준다
 * 그러면 return은 당연히 number로 처리
 */
