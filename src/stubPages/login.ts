import '../styles/app.css';

import {renderDOM, registerComponent} from '../helpers';

import LoginPage from '../pages/login';
import Link from '../components/Link'
import InputBlock from '../components/Input';
import Button from '../components/Button';

registerComponent(Link);
registerComponent(InputBlock);
registerComponent(Button);


document.addEventListener('DOMContentLoaded', ()=>renderDOM("#app", LoginPage));