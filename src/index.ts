import {Block} from './core';
import {renderDOM, registerComponent} from './helpers';
import LoginPage from './pages/login';

import './styles/app.css'
import BaseLayout from './components/layouts/BaseLayout'
import Link from './components/Link'
import Input from './components/Input'
import Button from './components/Button'
registerComponent(BaseLayout);
registerComponent(Link);
registerComponent(Input);
registerComponent(Button);

//const components= require('./components/**/index.ts') as {[key:string]: {default: typeof Block}};

//Object.values(components).forEach(component=>registerComponent(component.default));

document.addEventListener('DOMContentLoaded', ()=>renderDOM("#app",LoginPage));