import {Block} from './core';
import {renderDOM, registerComponent} from './helpers';
import {LoginPage} from './pages/login';

import './css/main.css'

//const components= require('./components/**/index.ts') as {[key:string]: {default: typeof Block}};

//Object.values(components).forEach(component=>registerComponent(component.default));

document.addEventListener('DOMContentLoaded', ()=>renderDOM("#app",LoginPage));