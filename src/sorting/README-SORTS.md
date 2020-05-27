# Sorts

## Quick Sort

A Divide and Conquer algorithm that works with recursion. It works in the following steps:

1. Grab an array. Find the pivot point in this array.
2. Move elements that are smaller than the pivot point to the left of it, and elements larger than the pivot to the right of it.
Note: What pivot you choose DOES matter! Generally, you choose the first or last element.
The best case would be the pivot being the middle-most element already.

Best Case: O(n log n)
Worst Case: O(n ^ 2)
Average Case: O(n log n)
Space Complexity: O(log n)

## Merge Sort

A Diving and Conquer algorithm that works with recursion.

1. Split an array into a left and a right half.
   a. If the array is of size one, return instead.
2. 

Best Case: O(n log n)
Worst Case: O(n log n)
Average Case: O(n log n)
Space Complexity: O(n)

## Insertion Sort

1. Take the last element of the array.

Best Case: O(n)
Worst Case: O(n^2)
Average Case: O(n^2)
Space Complexity: O(1)

## Bubble Sort

Bubble Sort goes through each element of the array and compares it to the element after it.

Generally, this sorting method is very inefficient and is rarely used, but it is still good to know how it works.

1. Point at the first element in an array and prepare to loop through all of them (index = i)
2. Enter a second loop that will move through all the elements (index = j, starting at index i)
3. Do one of the following:
  * If the current element (j) is greater than the next element (j + 1), swap them and move to the next element (increment j).
  * If the current element (j) is less than the next element (j + 1), move to the next element (increment j).
4. Repeat steps 1 through 3 until index i has iterated through all the elements.

Even if the array is sorted, it must be checked to make sure that there are no more swaps available.

Best Case: O(n)
Worst Case: O(n ^ 2)
Average Case: O(n ^ 2)
Space Complexity: O(1)
