import '../styles/app.css';

import {renderDOM, registerComponent} from '../helpers';

import NotFoundPage from '../pages/404';
import Link from '../components/Link'

registerComponent(Link);


document.addEventListener('DOMContentLoaded', ()=>renderDOM("#app", NotFoundPage));