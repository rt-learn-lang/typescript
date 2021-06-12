// 1. Declare a non-returning function.
function processRequest() {
}
// 2. Declare a function returning an object.
function buildRequest2() {
    return null;
}
// 3. Declare a function returning an object with inline types.
function buildRequest3() {
    return null;
}
buildRequest3(); // Hover to see that return details are nicely displayed as tooltip
// 4. Declare a function returning an interface.
function buildRequest4() {
    return null;
}
// 5. Declare a function accepting an interface.
function buildRequest5(item) {
    return null;
}
buildRequest5({
    displayName: "MacBook Pro 2021",
    inventoryType: "computer",
    trackingNumber: "MBP1234567",
    createDate: new Date()
});
