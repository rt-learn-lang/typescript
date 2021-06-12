function clone<T>(source: T): T {
    const serialized = JSON.stringify(source);
    return JSON.parse(serialized);
}

let inventoryItem = {
    displayName: "MacBook Pro 15 Retina",
    inventoryType: "computer",
    trackingNumber: "MBP123456",
    createDate: new Date(),
    originalCost: 1,
}

// 1.a.
const cloned1a = clone<InventoryItem4>(inventoryItem)

// 1.b. allow type inference
const cloned1b = clone(inventoryItem)