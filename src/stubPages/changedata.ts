import '../styles/app.css'

import {renderDOM, registerComponent} from '../helpers';

import ChangeDataPage from '../pages/profile/changedata';
import Avatar from '../components/Avatar'
import Input from '../components/Input'
import Button from '../components/Button';

registerComponent(Avatar);
registerComponent(Input);
registerComponent(Button);


document.addEventListener('DOMContentLoaded', ()=>renderDOM("#app", ChangeDataPage));