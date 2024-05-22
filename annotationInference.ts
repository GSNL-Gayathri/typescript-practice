//Explicitely giving the type for every variable using : after the variable name is called "type annotation"

// type annotation
let counter: number = 0; 
function increment(counter: number) : number {
    return counter++;
}



// type inference
let start = 0;  

let items = [1, 2, 3, null];
/**
 * To infer the type of items variable, TypeScript needs to consider the type of each element in the array.

It uses the best common type algorithm to analyze each candidate type and select the type that is compatible with all other candidates.

In this case, TypeScript selects the number array type (number[]) as the best common type.

If you add a string to the items array, TypeScript will infer the type for the items as an array of numbers and strings: (number | string)[]

let items = [0, 1, null, 'Hi'];
Code language: JavaScript (javascript)
When TypeScript cannot find the best common type, it returns the union array type. For example:

let arr = [new Date(), new RegExp('\d+')];
Code language: JavaScript (javascript)
In this example, TypeScript infers the type for arr to be (RegExp | Date)[].
 */



