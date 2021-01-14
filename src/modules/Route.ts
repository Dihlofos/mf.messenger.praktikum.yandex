import { SimpleObject } from '../interface';
import { isEqual } from '../utils/isEqual';
import { renderDom } from '../utils/renderDom';
import { Block } from './Block';

export type RouteProps = {
  rootQuery: string;
};

export class Route {
  _pathname: string;
  _blockClass: typeof Block;
  _block: Block | null;
  _props: Record<string, any>;

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
    if (document.querySelector(this._props.rootQuery)) {
      document.querySelector(this._props.rootQuery).textContent = ' ';
    }
  }

  match(pathname: string): boolean {
    return isEqual(pathname, this._pathname);
  }

  render(): void {
    if (!this._block) {
      this._block = new this._blockClass(this._props.store);
      if (this._block) renderDom(this._props.rootQuery, this._block);
      //DO RENDER
      return;
    }

    this._block.show();
  }
}
