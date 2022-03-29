import '../styles/app.css'

import {renderDOM, registerComponent} from '../helpers';

import ProfilePage from '../pages/profile';
import Avatar from '../components/Avatar'
import Link from '../components/Link'
import Property from '../components/Property';

registerComponent(Avatar);
registerComponent(Link);
registerComponent(Property);


document.addEventListener('DOMContentLoaded', ()=>renderDOM("#app", ProfilePage));