import { Route } from './Route.js';
export class Router {
    constructor(rootQuery) {
        if (Router.__instance) {
            return Router.__instance;
        }
        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;
        this._rootQuery = rootQuery;
        Router.__instance = this;
    }
    use(pathname, block) {
        const route = new Route(pathname, block, {
            rootQuery: this._rootQuery,
        });
        this.routes.push(route);
        return this;
    }
    start() {
        window.onpopstate = (event) => {
            console.log('popstate');
            if (event) {
                //TODO это по идее не должно работать, надо будет поправить по докам из MDN
                this._onRoute(window.location.pathname);
            }
        };
        this._onRoute(window.location.pathname);
    }
    _onRoute(pathname) {
        const route = this.getRoute(pathname);
        if (!route) {
            return;
        }
        if (this._currentRoute) {
            this._currentRoute.leave();
        }
        this._currentRoute = route;
        route.render();
    }
    go(pathname) {
        this.history.pushState({}, '', pathname);
        this._onRoute(pathname);
    }
    back() {
        this.history.back();
    }
    forward() {
        this.history.forward();
    }
    getRoute(pathname) {
        return this.routes.find((route) => route.match(pathname));
    }
}
//# sourceMappingURL=Router.js.map