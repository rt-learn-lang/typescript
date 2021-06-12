// 1.a Class declaration.
var Class1 = /** @class */ (function () {
    function Class1() {
        // 1.b Instance properties declaration. Types are optional
        this._categories = [];
        this._items = [];
        // load initial set of data
        this._isInitialized = this._load();
    }
    Object.defineProperty(Class1.prototype, "categories", {
        /**  */
        get: function () {
            return this._categories;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Class1.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (value) {
            this._items = value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Load the current inventory items.
     *
     * @returns {Promise<boolean>} a promise with the loading state
     *
     */
    Class1.prototype._load = function () {
        var _this = this;
        return Promise.all([
            getFromStorage("Categories"),
            getFromStorage("Inventory")
        ]).then(function (_a) {
            var categories = _a[0], items = _a[1];
            _this._categories = categories;
            _this._items = items;
        });
    };
    Class1.prototype._save = function () {
        return saveToStorage("Inventory", this._items);
    };
    // 1.c. Declaring a class property
    Class1.instance = new Class1();
    return Class1;
}());
// 1.c Getting hold of the singleton instance
var instance1 = Class1.instance;
instance1._categories; // not allowed because it is private.
