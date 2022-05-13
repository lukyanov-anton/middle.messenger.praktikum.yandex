import { BlockClass2 } from "../Block";
import { AppStore } from "../../store";
import { StoreEvents } from "../index";

type WithIsLoadingProps = { isLoading: boolean };

export function withIsLoading<P extends WithIsLoadingProps>(
  WrappedBlock: BlockClass2<P>
) {
  // @ts-expect-error No base constructor has the specified
  return class extends WrappedBlock<P> {
    public static componentName =
      WrappedBlock.componentName || WrappedBlock.name;

    constructor(props: P) {
      super({ ...props, user: AppStore.getState().user });
    }

    __onChangeIsLoadingCallback = (prevState: AppState, nextSate: AppState) => {
      if (prevState.isLoading !== nextSate.isLoading) {
        // @ts-expect-error this is not typed
        this.setProps({ ...this.props, isLoading: nextSate.isLoading });
      }
    };

    componentDidMount(props: P) {
      super.componentDidMount(props);
      AppStore.on(StoreEvents.Updated, this.__onChangeIsLoadingCallback);
    }

    componentWillUnmount() {
      super.componentWillUnmount();
      AppStore.off(StoreEvents.Updated, this.__onChangeIsLoadingCallback);
    }
  } as BlockClass2<Omit<P, "isLoading">>;
}
