import { Route } from './Route.js';
export declare class Router {
    routes: Route[];
    history: History;
    _currentRoute: Route | null;
    _rootQuery: string;
    static __instance: Router;
    constructor(rootQuery: string);
    use(pathname: string, block: any): this;
    start(): void;
    _onRoute(pathname: string): void;
    go(pathname: string): void;
    back(): void;
    forward(): void;
    getRoute(pathname: string): Route | undefined;
}
