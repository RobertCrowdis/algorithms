import { configureInput } from "./configureinput";

var targetarray = configureInput(process.argv)
console.log('Final Result: ', insertionSort(targetarray));

function insertionSort(inputarray: number[]) {
    for (let i = 0; i < inputarray.length; i++) {
        let temp: number = inputarray[i];
        let loc = i - 1;
        while (loc >= 0 && inputarray[loc] > temp) {
            inputarray[loc + 1] = inputarray[loc];
            loc--;
        }
        inputarray[loc + 1] = temp;
        console.log(`List after pass of index ${i}: ${inputarray}`)
    }
    return inputarray;
}