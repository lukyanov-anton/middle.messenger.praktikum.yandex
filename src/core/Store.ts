import EventBus from "./EventBus";

export enum StoreEvents {
  Updated = "updated",
}

class Store<TState extends Record<string, unknown>> extends EventBus {
  private state: TState = {} as TState;

  constructor(defaultState: TState) {
    super();

    this.state = defaultState;
    this.set(defaultState);
  }

  public getState() {
    return this.state;
  }
  public set(nextSate: Partial<TState>) {
    const prevState = { ...this.state };
    this.state = { ...this.state, ...nextSate };
    this.emit(StoreEvents.Updated, prevState, nextSate);
  }
}
export default Store;
/* export default new Store<AppState>({
  page: null,
  isLoading: false,
  loginFormError: null,
  user: null,
}); */
