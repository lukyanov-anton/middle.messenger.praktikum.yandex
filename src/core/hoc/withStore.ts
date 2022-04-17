import { BlockClass2 } from "../Block";
import { AppStore } from "../../store";
import { Store, StoreEvents } from "../index";

type WithStateProps = { store: Store<AppState> };

export function withStore<P extends WithStateProps>(
  WrappedBlock: BlockClass2<P>
) {
  // @ts-expect-error No base constructor has the specified
  return class extends WrappedBlock<P> {
    public static componentName =
      WrappedBlock.componentName || WrappedBlock.name;

    constructor(props: P) {
      super({ ...props, store: AppStore });
    }

    __onChangeStoreCallback = () => {
      /**
       * TODO: проверить что стор реально обновлен
       * и прокидывать не целый стор, а необходимые поля
       * с помощью метода mapStateToProps
       */
      // @ts-expect-error this is not typed
      this.setProps({ ...this.props, store: AppStore });
    };

    componentDidMount(props: P) {
      super.componentDidMount(props);
      AppStore.on(StoreEvents.Updated, this.__onChangeStoreCallback);
    }

    componentWillUnmount() {
      super.componentWillUnmount();
      AppStore.off("changed", this.__onChangeStoreCallback);
    }
  } as BlockClass2<Omit<P, "store">>;
}
