// // 1. Declare a non-returning function.
// function processRequest(): void {
// }
// // 2. Declare a function returning an object.
// function buildRequest2(): object {
//     return null;
// }
// // 3. Declare a function returning an object with inline types.
// function buildRequest3(): {
//     displayName: string;
//     inventoryType: string;
//     trackingNumber: string;
//     createDate: Date;
//     originalCost: number;
// } {
//     return null;
// }
// buildRequest3();  // Hover to see that return details are nicely displayed as tooltip
// // Note: Looks like it clashes with thee interface inside another file
// // 10-Interface.ts, so we suffix it with F for Function.
// interface FInventoryItem {
//     displayName: string;
//     inventoryType: string;
//     trackingNumber: string;
//     createDate: Date;
//     originalCost?: number;  // Define original cost as optional.
//     addNote?(note:string) : string; // Optional handler.
// }
// // 4. Declare a function returning an interface.
// function buildRequest4(): FInventoryItem {
//     return null;
// }
// // 5. Declare a function accepting an interface.
// function buildRequest5(item: FInventoryItem): void {
//     return null;
// }
// // 6. Demo that passing a parameter that is missing the optional originalCost and addNote handler.
// buildRequest5({
//     displayName: "MacBook Pro 2021",
//     inventoryType: "computer",
//     trackingNumber: "MBP1234567",
//     createDate: new Date()
// });
