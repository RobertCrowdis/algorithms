# Sorts

## Quick Sort

A Divide and Conquer algorithm that works with recursion. It works in the following steps:

1. Grab an array. Find the pivot point in this array.
2. Move elements that are smaller than the pivot point to the left of it, and elements larger than the pivot to the right of it.
Note: What pivot you choose DOES matter! If you don't know which element to choose, pick the first or last element.
The best case would be the pivot being the middle-most element already.

Best Case: O(n log n)
Worst Case: O(n ^ 2)
Average Case: O(n log n)
Space Complexity: O(log n)

## Merge Sort

A Diving and Conquer algorithm that works with recursion.

1. Split an array into a left and a right half.
   * If the array contains only one element, we return that element instead.
2. Continue splitting each of these arrays into smaller left and right arrays, using recursion.
3. When the arrays begin to bubble up, begin combining the left and right arrays together.
   * If the first left element is smaller than the first right element, then shift it to the result. Otherwise, shift the right element.
   * Should either the left or right array run out of elements, simply shift the rest of the elements and push them onto the result array.
4. Return the new array back up until it is merged with all of the other arrays caused from recursion. The final result is one sorted array.

Best Case: O(n log n)
Worst Case: O(n log n)
Average Case: O(n log n)
Space Complexity: O(n)

## Insertion Sort

Imagine you want to order a hand of playing cards, from the lowest value to the highest. We're going to look at the left-most card in your hand, and put it where it should belong. Then, we're going to look at the card to the right of that and put it where it belongs.

1. Begin with the first element of an array, and iterate through all of them (index = i)
2. Save the value at index i in a temporary variable, and create an index behind our curret i (loc = i - 1).
3. Begin traversing backwards from the left of the current indexed element.
   * While the previous elements are greater than the value of the current indexed element (i), begin shifting them to the right.
4. Once values to the left are no longer larger than our temporary stored element in step 2, we know that it is in the correct location. Take the saved value and put it above the index of loc. The result of this operation is having all elements that we 'passed' by with the 'loc' variable have been shifted to the right.
5. Repeat steps 2 through 4.

Insertion sort is not the fastest sorting algorithm, but it only takes up O(1) space, giving a tradeoff of speed for space required.

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
