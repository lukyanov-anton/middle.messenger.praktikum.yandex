import Block from "../Block";

export type BlockClass = { new (): Block<any> };
export type RouteProps = {
  rootQuery: string;
  //title: string;
};
