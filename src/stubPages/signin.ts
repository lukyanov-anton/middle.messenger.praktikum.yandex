import {renderDOM, registerComponent} from '../helpers';
import SigninPage from '../pages/signin';

import '../styles/app.css'

import Link from '../components/Link'
import Input from '../components/Input'
import Button from '../components/Button'

registerComponent(Link);
registerComponent(Input);
registerComponent(Button);



document.addEventListener('DOMContentLoaded', ()=>renderDOM("#app",SigninPage));