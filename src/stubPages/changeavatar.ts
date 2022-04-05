import '../styles/app.css'

import {renderDOM, registerComponent} from '../helpers';

import ChangeAvatarPage from '../pages/profile/changeavatar';
import Avatar from '../components/Avatar'
import InputBlock from '../components/Input'
import Button from '../components/Button';

registerComponent(Avatar);
registerComponent(InputBlock);
registerComponent(Button);


document.addEventListener('DOMContentLoaded', ()=>renderDOM("#app", ChangeAvatarPage));