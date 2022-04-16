import "../styles/app.css";
import { renderDOM, registerComponent } from "../helpers";
import NotFoundPage from "../pages/404";
import LinkBlock from "../components/link";

registerComponent(LinkBlock);

document.addEventListener("DOMContentLoaded", () =>
  renderDOM("#app", NotFoundPage)
);
