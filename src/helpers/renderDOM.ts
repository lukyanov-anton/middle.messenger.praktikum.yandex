import Block from "../core/Block";

export default function renderDOM(selector: string, BlockPage: Block) {
  const root = document.querySelector(selector);
  if (!root) throw new Error(`Элемент с селектором '${selector}' не найден.`);
  root.innerHTML = "";
  root.appendChild(BlockPage.getContent());
}
