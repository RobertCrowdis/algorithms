var input: any[];
var testarray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Already sorted
var testarray2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]; // Reverse
var testarray3 = [1, 3, 9, 4, 6, 2, 5, 8, 7, 10]; // Randomly set up

function quick_sort(inputarray: number[], start: number, end: number) {
	if (start < end) {
		let q = partition(inputarray, start, end);
		quick_sort(inputarray, start, q - 1);
		quick_sort(inputarray, q + 1, end);
	}
}

function partition(inputarray: number[], start: number, end: number) {
	let x = inputarray[end]; // Last value in the array
	let index = start;
	for (let cursor = start; cursor <= end; cursor++) {
		if (inputarray[cursor] <= x) {
			let temp = inputarray[index]
			inputarray[index] = inputarray[cursor];
			inputarray[cursor] = temp;
			index++
		}
	}
	return index;
}

console.log("Entering with array: ", testarray1);
quick_sort(testarray1, 0, testarray1.length - 1);
console.log("After Sorting: ", testarray1);

console.log("Entering with array: ", testarray2);
quick_sort(testarray2, 0, testarray2.length - 1);
console.log("After Sorting: ", testarray2);

console.log("Entering with array: ", testarray3);
quick_sort(testarray3, 0, testarray3.length - 1);
console.log("After Sorting: ", testarray3);