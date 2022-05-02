import { BlockClass2 } from "../Block";
import BrowserRouter from "../router/BrowserRouter";
import Router from "../router/BrowserRouter";

type WithRouterProps = { router: BrowserRouter };
export function withRouter<P extends WithRouterProps>(
  WrappedBlock: BlockClass2<P>
) {
  // @ts-expect-error No base constructor has the specified number of type arguments
  return class extends WrappedBlock<P> {
    public static componentName =
      WrappedBlock.componentName || WrappedBlock.name;
    constructor(props: P & { router: Router }) {
      super({ ...props, router: window.router });
    }
  } as BlockClass2<Omit<P, "router">>;
}
