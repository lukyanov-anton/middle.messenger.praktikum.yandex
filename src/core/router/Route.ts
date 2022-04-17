import { renderDOM } from "../../helpers";
import Block from "../Block";
import { BlockClass, RouteProps } from "./types";

class Route {
  private _pathname: string;
  private readonly _blockClass: BlockClass;
  private _block: Block | null = null;
  private _props: RouteProps | null = null;
  constructor(pathname: string, blockClass: BlockClass, props?: RouteProps) {
    this._pathname = pathname;
    this._blockClass = blockClass;
    this._block = null;
    this._props = props || null;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname: string) {
    return pathname === this._pathname;
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass();
      this.setTitle();
      if (this._props) {
        renderDOM(this._props.rootQuery, this._block);
      }
      return;
    }

    this._block.show();
    this.setTitle();
  }

  setTitle() {
    // @ts-ignore
    document.title = this._props!.title;
  }
}
export default Route;
