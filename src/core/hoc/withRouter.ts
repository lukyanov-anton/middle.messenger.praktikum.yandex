import Block from "../Block";
import Router from "../router/BrowserRouter";

export function withRouter<T>(Component: typeof Block) {
  return class WithRouter extends Component<T> {
    public static componentName = Component.name;
    constructor(props: T & { router: Router }) {
      super({ ...props, router: window.router });
    }
  };
}
