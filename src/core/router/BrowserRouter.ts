import Block from "../Block";
import Route from "./Route";

export default class Router {
  private static __instance: Router;
  private routes: Route[];
  private _currentRoute: Route | null;
  private _history: History;
  private _rootQuery: string;

  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this._history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  use(pathname: string, block: typeof Block, props?: PlainObject) {
    const route = new Route(pathname, block, {
      rootQuery: this._rootQuery,
      ...props,
    });
    this.routes.push(route);
    return this;
  }

  start() {
    window.onpopstate = ((event: PopStateEvent) => {
      this._onRoute(event.currentTarget.location.pathname);
    }).bind(this);

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (this._currentRoute) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route.render();
  }

  go(pathname: string) {
    this._history.pushState({}, "", pathname);
    this._onRoute(pathname);
  }

  back() {
    this._history.back();
  }

  forward() {
    this._history.forward();
  }

  getRoute(pathname: string): Route {
    const route = this.routes.find((route) => route.match(pathname));
    if (route) return route;
    const notfoundRoute = this.routes.find((route) => route.match("*"));
    if (notfoundRoute) return notfoundRoute;
    throw new Error(
      `Route for path '${pathname}' not fount and catch rout not register.`
    );
  }
}
