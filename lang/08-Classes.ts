/**
 * A messy example, thanks to LL blech!
 */
interface Category1 {
    name: string,
    displayName: string,
    subCategories: { name: string, displayName: string }[]
}

// 1.a Class declaration.
class Class1 {

    // 1.b Instance properties declaration. Types are optional
    private _categories: Category1[] = [];
    private _items: InventoryItem4[] = [];
    private _isInitialized: Promise<boolean>;
    private _sampleTypeless;

    // 1.c. Declaring a class property
    static instance = new Class1();

    /**  */
    get categories() {
        return this._categories;
    }

    get items() {
        return this._items;
    }

    set items(value) {
        this._items = value;
    }

    constructor() {
        // load initial set of data
        this._isInitialized = this._load();
    }

    /**
     * Load the current inventory items.
     *
     * @returns {Promise<boolean>} a promise with the loading state
     *
     */
    protected _load(): Promise<boolean> {
        return Promise.all([
            getFromStorage("Categories"),
            getFromStorage("Inventory")
        ]).then(([categories, items]) => {
            this._categories = categories;
            this._items = items;
        });
    }

    protected _save() {
        return saveToStorage("Inventory", this._items);
    }
}

// 1.c Getting hold of the singleton instance
const instance1 = Class1.instance;
// instance1._categories; // not allowed because it is private.