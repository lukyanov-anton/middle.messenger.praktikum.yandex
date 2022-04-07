import "../styles/app.css";
import { renderDOM, registerComponent } from "../helpers";
import ChangeAvatarPage from "../pages/profile/changeavatar";
import AvatarBlock from "../components/avatar";
import InputBlock from "../components/input";
import ButtonBlock from "../components/button";

registerComponent(AvatarBlock);
registerComponent(InputBlock);
registerComponent(ButtonBlock);

document.addEventListener("DOMContentLoaded", () =>
  renderDOM("#app", ChangeAvatarPage)
);
