export function renderDom(query, block) {
    const root = document.querySelector(query);
    if (root)
        root.appendChild(block.getContent());
    return root;
}
//# sourceMappingURL=renderDom.js.map