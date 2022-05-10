import { registerAllBlocks } from "../../tests/renderUtils";
import Block from "../Block";
import BrowserRouter from "./BrowserRouter";
import Route from "./Route";

describe("core/router/Router", () => {
  it("should register rout", () => {
    // arrange
    class Page1 extends Block {}
    const router = new BrowserRouter("#app");
    router.use("/test", Page1, { title: "Test" });
    // act
    const route = router.getRoute("/test");
    // assert
    expect(route.match("/test")).toEqual(true);
    expect(route).toBeInstanceOf(Route);
  });

  it("should registered root rout", () => {
    // arrange
    class Page1 extends Block {}
    const router = new BrowserRouter("#app");
    router.use("/test", Page1, { title: "Test" });
    // act & assets
    expect(() => router.start()).toThrow(/^Route for path '\/' not found/);
  });

  it("should registered catch rout", () => {
    // arrange
    const router = new BrowserRouter("#app");
    // act & assets
    expect(() => router.getRoute("/not_existing_page")).toThrow(
      /catch rout not register.$/
    );
  });

  it("should transition to rout", () => {
    // arrange
    class Page1 extends Block {
      static componentName = "Page1";
      protected render(): string {
        return `<h1>Page1</h1>`;
      }
    }
    class Page2 extends Block {
      static componentName = "Page2";
      protected render(): string {
        return `<h1>Page2</h1>`;
      }
    }
    document.body.innerHTML = '<div id="app"></div>';
    registerAllBlocks();
    const router = new BrowserRouter("#app");
    router.use("/", Page1, { title: "Page1" });
    router.use("/page1", Page1, { title: "Page1" });
    router.use("/page2", Page2, { title: "Page2" });
    router.start();
    // act
    router.go("/page2");
    const route = router.getRoute("/page2");
    // assets
    expect(route.match("/page2")).toEqual(true);
  });
});
