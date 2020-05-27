import { configureInput } from "../configure-input";

var targetarray = configureInput(process.argv)
console.log('Final Result: ', quickSort(targetarray));

function quickSort(arr: Array<number>) {
	// Base case: Array is a single element. Return for bubbling.
	if (arr.length <= 1) { return arr; }

	let left = []; // Instantiate left and right side of the array.
	let right = [];
	const pivot = arr.pop() // Last item will be our pivot.

	arr.forEach((num: number) => {
		num > pivot ? right.push(num) : left.push(num);
	});

	return [...quickSort(left), pivot, ...quickSort(right)];
}
