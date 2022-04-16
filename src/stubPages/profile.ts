import "../styles/app.css";
import { renderDOM, registerComponent } from "../helpers";
import ProfilePage from "../pages/profile";
import AvatarBlock from "../components/avatar";
import LinkBlock from "../components/link";
import PropertyBlock from "../components/property";

registerComponent(AvatarBlock);
registerComponent(LinkBlock);
registerComponent(PropertyBlock);

document.addEventListener("DOMContentLoaded", () =>
  renderDOM("#app", ProfilePage)
);
