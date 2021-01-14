import { Block } from '../modules/Block';

export function renderDom(query: string, block: Block) {
  const root: HTMLElement | null = document.querySelector(query);
  if (root) root.appendChild(block.getContent());
  return root;
}
