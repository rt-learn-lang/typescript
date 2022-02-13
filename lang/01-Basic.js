// Declare a string variable
var firstName = 'Joe';
// Re-assigning to a different type results in an error
// firstName = 1234;
// 2. Declare a number variable
var originalCost = 425;
// 3. Casting a value to a desired type.
var originalCost3 = 425;
// 4. Declaring a loosely typed variable
var originalCost4 = 425;
originalCost4 = "yo";
// 5. Declaring a union type
var originalCost5;
originalCost5 = "yo";
originalCost5 = 1234;
var originalCost6 = 423;
originalCost6 = "hello";
originalCost6 = 1;
// 6.b. Can assign value from union to a non-union as long as they have the same value type.
// let originalCost6b: string = originalCost6;
var originalCost6c = originalCost6;
console.log("Hello");
