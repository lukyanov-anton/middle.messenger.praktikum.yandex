import { BlockClass2 } from "../Block";
import { AppStore } from "../../store";
import { StoreEvents } from "../index";

type WithUserProps = { user: User | null };

export function withUser<P extends WithUserProps>(
  WrappedBlock: BlockClass2<P>
) {
  // @ts-expect-error No base constructor has the specified
  return class extends WrappedBlock<P> {
    public static componentName =
      WrappedBlock.componentName || WrappedBlock.name;

    constructor(props: P) {
      super({ ...props, user: AppStore.getState().user });
    }

    __onChangeUserCallback = (prevState: AppState, nextSate: AppState) => {
      if (JSON.stringify(prevState.user) !== JSON.stringify(nextSate.user)) {
        // @ts-expect-error this is not typed
        this.setProps({ ...this.props, user: nextSate.user });
      }
    };

    componentDidMount(props: P) {
      super.componentDidMount(props);
      AppStore.on(StoreEvents.Updated, this.__onChangeUserCallback);
    }

    componentWillUnmount() {
      super.componentWillUnmount();
      AppStore.off(StoreEvents.Updated, this.__onChangeUserCallback);
    }
  } as BlockClass2<Omit<P, "user">>;
}
