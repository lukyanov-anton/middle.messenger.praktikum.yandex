import { renderDOM } from "../../helpers";
import Block, { BlockClass2 } from "../Block";
import { RouteProps } from "./types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
class Route<P = any> {
  private _pathname: string;
  private readonly _blockClass: BlockClass2<P>;
  private _block: Block | null = null;
  private _props: RouteProps | null = null;
  constructor(
    pathname: string,
    blockClass: BlockClass2<P>,
    props?: RouteProps
  ) {
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
      this._block = null;
    }
  }

  match(pathname: string) {
    return pathname === this._pathname;
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass({} as P);
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
    if (this._props && this._props.title) {
      document.title = this._props.title;
    }
  }
}
export default Route;
