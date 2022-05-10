import { default as Store, StoreEvents } from "./Store";

describe("core/Store", () => {
  it("should set state", () => {
    // arrange
    const store = new Store({});
    // act
    store.set({ user: { id: 1 } });
    // assets
    expect(store.getState()).toEqual({ user: { id: 1 } });
  });

  it("should emit event after store was apdate", () => {
    // arrange
    const store = new Store({});
    const mock = jest.fn();
    store.on(StoreEvents.Updated, mock);
    // act
    store.set({ user: { id: 1 } });
    // assets
    //expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({}, { user: { id: 1 } });
  });
});
