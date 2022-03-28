import {renderDOM, registerComponent} from '../helpers';
import LoginPage from '../pages/LoginPage';

import '../styles/app.css'
import BaseLayout from '../components/layouts/BaseLayout'
import Link from '../components/Link'
import Input from '../components/Input'
import Button from '../components/Button'
registerComponent(BaseLayout);
registerComponent(Link);
registerComponent(Input);
registerComponent(Button);


document.addEventListener('DOMContentLoaded', ()=>renderDOM("#app",LoginPage));