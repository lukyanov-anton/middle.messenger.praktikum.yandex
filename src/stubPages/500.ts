import "../styles/app.css";
import { renderDOM, registerComponent } from "../helpers";
import InternalServerErrorPage from "../pages/500";
import LinkBlock from "../components/link";

registerComponent(LinkBlock);

document.addEventListener("DOMContentLoaded", () =>
  renderDOM("#app", InternalServerErrorPage)
);
