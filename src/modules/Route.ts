import { SimpleObject } from '../interface.js';
import { isEqual } from '../utils/isEqual.js';
import { renderDom } from '../utils/renderDom.js';
import { Block } from './Block.js';

export type RouteProps = {
  rootQuery: string;
};

export class Route {
  _pathname: string;
  _blockClass: typeof Block;
  _block: Block | null;
  _props: SimpleObject;

  constructor(pathname: string, view: typeof Block, props: SimpleObject) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: string): void {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave(): void {
    document.querySelector(this._props.rootQuery).textContent = ' ';
  }

  match(pathname: string): boolean {
    return isEqual(pathname, this._pathname);
  }

  render(): void {
    if (!this._block) {
      this._block = new this._blockClass();
      if (this._block) renderDom(this._props.rootQuery, this._block);
      //DO RENDER
      return;
    }

    this._block.show();
  }
}
