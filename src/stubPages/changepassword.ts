import "../styles/app.css";
import { renderDOM, registerComponent } from "../helpers";
import ChangePasswordPage from "../pages/profile/changepassword";
import AvatarBlock from "../components/avatar";
import Input from "../components/input";
import ButtonBlock from "../components/button";

registerComponent(AvatarBlock);
registerComponent(Input);
registerComponent(ButtonBlock);

document.addEventListener("DOMContentLoaded", () =>
  renderDOM("#app", ChangePasswordPage)
);
