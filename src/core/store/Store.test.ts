import { default as Store, StoreEvents } from "./Store";

describe("core/Store", () => {
  it("Should set state.", () => {
    // arrange
    const store = new Store({});
    // act
    store.set({ user: { id: 1 } });
    // assert
    expect(store.getState()).toEqual({ user: { id: 1 } });
  });

  it("Should emit event after store was update.", () => {
    // arrange
    const store = new Store({});
    const mock = jest.fn();
    store.on(StoreEvents.Updated, mock);
    // act
    store.set({ user: { id: 1 } });
    // assert
    expect(mock).toHaveBeenCalledWith({}, { user: { id: 1 } });
  });
});
