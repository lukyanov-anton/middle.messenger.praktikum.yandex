import '../styles/app.css';

import {renderDOM, registerComponent} from '../helpers';

import InternalServerErrorPage from '../pages/500';
import Link from '../components/Link'

registerComponent(Link);


document.addEventListener('DOMContentLoaded', ()=>renderDOM("#app", InternalServerErrorPage));