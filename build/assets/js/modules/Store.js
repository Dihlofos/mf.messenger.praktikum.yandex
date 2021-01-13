export class Store {
    constructor() {
        if (Store.__instance) {
            return Store.__instance;
        }
        this.store = { token: null, userId: null, messages: {} };
        Store.__instance = this;
    }
    set(newValue) {
        this.store = Object.assign(Object.assign({}, this.store), newValue);
    }
    get(key) {
        var _a;
        return (_a = this.store[key]) !== null && _a !== void 0 ? _a : null;
    }
}
//# sourceMappingURL=Store.js.map