import { SimpleObject } from '../interface.js';
import { Block } from './Block.js';
export declare type RouteProps = {
    rootQuery: string;
};
export declare class Route {
    _pathname: string;
    _blockClass: typeof Block;
    _block: Block | null;
    _props: SimpleObject;
    constructor(pathname: string, view: typeof Block, props: SimpleObject);
    navigate(pathname: string): void;
    leave(): void;
    match(pathname: string): boolean;
    render(): void;
}
