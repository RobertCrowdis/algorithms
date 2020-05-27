import { configureInput } from "../configure-input";

var targetarray = configureInput(process.argv)
console.log('Final Result: ', mergeSort(targetarray));

function mergeSort(inputarray: number[]): number[] {
	if (inputarray.length === 1) return inputarray;
	const left: number[] = inputarray.slice(0, Math.floor(inputarray.length / 2));
	const right: number[] = inputarray.slice(Math.floor(inputarray.length / 2));
	return conquer(mergeSort(left), mergeSort(right));
}

function conquer(left: number[], right: number[]): number[] {
	const conqresult: number[] = [];
	while (left.length && right.length) {
		(left[0] > right[0] ? conqresult.push(right.shift()) : conqresult.push(left.shift()));
	}
	while (left.length) {
		conqresult.push(left.shift());
	}
	while (right.length) {
		conqresult.push(right.shift());
	}
	return conqresult;
}