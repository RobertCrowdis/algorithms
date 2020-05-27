# Sorts

### Quick Sort

A Divide and Conquer algorithm that works with recursion. It works in the following steps:

1. Grab an array. Find the pivot point in this array.
2. Move elements that are smaller than the pivot point to the left of it, and elements larger than the pivot to the right of it.
Note: What pivot you choose DOES matter! Generally, you choose the first or last element.
The best case would be the pivot being the middle-most element already.


It creates two empty arrays

Best Case: O(n log n)
Worst Case: O(n ^ 2)
Average Case: O(n log n)

### Merge Sort

A Diving and Conquer algorithm that works with recursion.

1. Split an array into a left and a right half.
   a. If the array is of size one, return instead.
2. 

Best Case: O(n log n)
Worst Case: O(n log n)
Average Case: O(n log n)

### Insertion Sort

1. Take the last element of the array.

Best Case: O(n)
Worst Case: O(n^2)
Average Case: O(n^2)

### Bubble Sort

1. Starting with the first element, compare with the next element
2. If the current element is greater than the next element, swap them.
3. If the current element is less than the next element, move to the next element

Best Case: O(n)
Worst Case: O(n ^ 2)
Average Case: O(n ^ 2)