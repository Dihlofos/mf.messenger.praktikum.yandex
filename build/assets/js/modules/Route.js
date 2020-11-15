import { isEqual } from '../utils/isEqual.js';
import { renderDom } from '../utils/renderDom.js';
export class Route {
    constructor(pathname, view, props) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
    }
    navigate(pathname) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }
    leave() {
        if (document.querySelector(this._props.rootQuery)) {
            document.querySelector(this._props.rootQuery).textContent = ' ';
        }
    }
    match(pathname) {
        return isEqual(pathname, this._pathname);
    }
    render() {
        if (!this._block) {
            this._block = new this._blockClass();
            if (this._block)
                renderDom(this._props.rootQuery, this._block);
            //DO RENDER
            return;
        }
        this._block.show();
    }
}
//# sourceMappingURL=Route.js.map