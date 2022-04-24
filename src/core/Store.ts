import EventBus from "./EventBus";

export enum StoreEvents {
  Updated = "updated",
}

export type Dispatch<TState> = (
  nextStateOrAction: Partial<TState> | Action<TState>,
  payload?: any
) => void;

export type Action<TState> = (
  id: number,
  dispatch: Dispatch<TState>,
  state: TState,
  payload: any
) => void;

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

  dispatch(nextStateOrAction: Partial<TState> | Action<TState>, payload?: any) {
    if (typeof nextStateOrAction === "function") {
      nextStateOrAction(this.dispatch.bind(this), this.state, payload);
    } else {
      this.set({ ...this.state, ...nextStateOrAction });
    }
  }
}
export default Store;
