import { generateArray } from "./generatearray";

export function configureInput(input: any[]) {

    var filteredinput: number[] = [];

    input.forEach((element: any) => {
        if (!Number.isNaN(Number(element))) filteredinput.push(Number(element))
    });

    if (filteredinput.length === 0) {
        filteredinput = generateArray();
        console.log("You can sort a passed array by passing values seperated by spaces.\nExample: \'npm run merge-sort 7 10 4 2\'")
        console.log("Creating and sorting this random array: ", filteredinput, "\n");
    }
    return filteredinput;
}