// 1. Declare a non-returning function.
function processRequest() { }
// 2. Declare a function returning an object.
function buildRequest2() {
    return null;
}
// 3. Declare a function returning an object with inline types.
function buildRequest3() {
    return null;
}
buildRequest3(); // Hover to see that return details are nicely displayed as tooltip
// 6. Declare a function returning an interface.
function buildRequest4() {
    return null;
}
// 7. Declare a function accepting an interface.
function buildRequest5(item) {
    // item.inventoryType = ""; 7.a. error for trying to change a readonly property.
    return null;
}
// 8. Sample duck-typing
buildRequest5({
    displayName: "MacBook Pro 2021",
    inventoryType: "computer",
    trackingNumber: "MBP1234567",
    createDate: new Date(),
    addNote: function () {
        return null;
    },
    addNote2: function (note) {
        return null;
    },
});
function build9(item) { }
build9({
    displayName: "MacBook Pro 2021",
    // Auto completion, and putting different value results to an error.
    inventoryType: "computer",
    trackingNumber: "MBP1234567",
    createDate: new Date(),
});
