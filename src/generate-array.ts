export function generateArray() {
	const randomArray: number[] = [];
	for (let i = 0; i < 10; i++) {
		randomArray.push(Math.round(Math.random() * 10));
	}
	return randomArray;
}