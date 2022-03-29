import '../styles/app.css'

import {renderDOM, registerComponent} from '../helpers';

import ChangeAvatarPage from '../pages/profile/changeavatar';
import Avatar from '../components/Avatar'
import Input from '../components/Input'
import Button from '../components/Button';

registerComponent(Avatar);
registerComponent(Input);
registerComponent(Button);


document.addEventListener('DOMContentLoaded', ()=>renderDOM("#app", ChangeAvatarPage));