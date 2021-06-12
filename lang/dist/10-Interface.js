// // 1. Basic declaration with properties
// interface InventoryItem1 {
//     displayName: string;
//     inventoryType: string;
//     trackingNumber: string;
//     createDate: Date;
//     originalCost: number;
// }
// // 2. Basic declaration with properties and methods
// interface InventoryItem2 {
//     displayName: string;
//     readonly inventoryType: string; // 5. Marking property as readonly.
//     trackingNumber: string;
//     createDate: Date;
//     originalCost?: number; // 3. Declaring as optional property
//     addNote(note: string): string;  // 1st Form
//     addNote2: (note: string) => string;  // 2nd Form
//     addNote3?: (note: string) => string;  // 4. Optional method.
// }
