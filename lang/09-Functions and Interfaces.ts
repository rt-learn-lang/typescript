// 1. Declare a non-returning function.
function processRequest(): void { }

// 2. Declare a function returning an object.
function buildRequest2(): object {
  return null;
}

// 3. Declare a function returning an object with inline types.
function buildRequest3(): {
  displayName: string;
  inventoryType: string;
  trackingNumber: string;
  createDate: Date;
  originalCost: number;
} {
  return null;
}

buildRequest3(); // Hover to see that return details are nicely displayed as tooltip

// 4. Basic declaration with properties
interface InventoryItem4 {
  displayName: string;
  inventoryType: string;
  trackingNumber: string;
  createDate: Date;
  originalCost: number;
}

// 5. Basic declaration with properties and methods
interface InventoryItem5 {
  displayName: string;
  readonly inventoryType: string; // 5.e. Marking property as readonly.
  trackingNumber: string;
  createDate: Date;
  originalCost?: number; // 5.a. Declaring as optional property

  addNote(note: string): string; // 5.b. 1st form
  addNote2: (note: string) => string; // 5.c. 2nd Form

  addNote3?: (note: string) => string; // 5.d. Optional method.
}

// 6. Declare a function returning an interface.
function buildRequest4(): InventoryItem4 {
  return null;
}

// 7. Declare a function accepting an interface.
function buildRequest5(item: InventoryItem5): void {
  // item.inventoryType = ""; 7.a. error for trying to change a readonly property.
  return null;
}

// 8. Sample duck-typing
buildRequest5({
  displayName: "MacBook Pro 2021",
  inventoryType: "computer",
  trackingNumber: "MBP1234567",
  createDate: new Date(),

  addNote(): string {
    return null;
  },
  addNote2(note: string): string {
    return null;
  },
});

// 9a. Property with literal type, notice the inventoryTypes
interface InventoryItem9 {
  displayName: string;
  inventoryType: "computer" | "furniture";
  trackingNumber: string;
  createDate: Date;
}
function build9(item: InventoryItem9): void { }
build9({
  displayName: "MacBook Pro 2021",
  // Auto completion, and putting different value results to an error.
  inventoryType: "computer",
  trackingNumber: "MBP1234567",
  createDate: new Date(),
});


// 10. Interface with generics
interface KeyValuePair10<TKey, TValue> {
  Key: TKey;
  Value: TValue;
}