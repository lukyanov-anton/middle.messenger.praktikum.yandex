import "../styles/app.css";
import { renderDOM, registerComponent } from "../helpers";
import SigninPage from "../pages/signin";
import LinkBlock from "../components/link";
import InputBlock from "../components/input";
import ButtonBlock from "../components/button";

registerComponent(LinkBlock);
registerComponent(InputBlock);
registerComponent(ButtonBlock);

document.addEventListener("DOMContentLoaded", () =>
  renderDOM("#app", SigninPage)
);
