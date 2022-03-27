import Block from '../core/Block';

export default function renderDOM(selector:string,BlockPage: typeof Block) {
  const block = new BlockPage();

  const root = document.querySelector(selector);
  
  root!.innerHTML = '';
  root!.appendChild(block.getContent());
}
