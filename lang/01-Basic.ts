// Declare a string variable
let firstName: string = 'Joe';

// Re-assigning to a different type results in an error
// firstName = 1234;

// 2. Declare a number variable
let originalCost: number = 425;

// 3. Casting a value to a desired type.
let originalCost3 = 425 as number;

// 4. Declaring a loosely typed variable
let originalCost4: any = 425 as number;
originalCost4 = "yo";

// 5. Declaring a union type
let originalCost5: string | number;
originalCost5 = "yo";
originalCost5 = 1234;
// originalCost5 = {}; error!

// 6. Declaring a type
type Cost6 = number | string;
var originalCost6: Cost6 = 423;
originalCost6 = "hello";
originalCost6 = 1;

// 6.b. Can assign value from union to a non-union as long as they have the same value type.
// let originalCost6b: string = originalCost6;
let originalCost6c: number = originalCost6;
console.log("Hello")