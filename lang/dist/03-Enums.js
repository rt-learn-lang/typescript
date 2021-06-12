// 1. Basic enum declaration. This will auto assign a number constant.
var InventoryType1;
(function (InventoryType1) {
    InventoryType1[InventoryType1["Computer"] = 0] = "Computer";
    InventoryType1[InventoryType1["Furniture"] = 1] = "Furniture";
})(InventoryType1 || (InventoryType1 = {}));
// 2. Refer to the enum value
var var2 = InventoryType1.Computer;
// 3. Enum declaration with explicit value
var InventoryType3;
(function (InventoryType3) {
    InventoryType3["Computer"] = "computer";
    InventoryType3["Furniture"] = "furniture";
})(InventoryType3 || (InventoryType3 = {}));
