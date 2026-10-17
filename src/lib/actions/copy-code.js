/**
 * Svelte action: adds a "copy" button (shown on hover) to every <pre><code> block inside the node.
 * Usage: <div use:copyCode>…</div>
 * @param {HTMLElement} node
 */
export function copyCode(node) {
	/** @type {HTMLButtonElement[]} */
	const buttons = [];

	for (const block of node.querySelectorAll('pre')) {
		if (block.classList.contains('mermaid')) continue;
		const code = block.querySelector('code');
		if (!code) continue;

		const button = document.createElement('button');
		button.className = 'copy-code-button';
		button.type = 'button';
		button.textContent = 'copy';
		button.addEventListener('click', async () => {
			try {
				await navigator.clipboard.writeText(code.textContent ?? '');
				button.textContent = 'copied';
				setTimeout(() => (button.textContent = 'copy'), 2000);
			} catch (err) {
				console.error('Unable to copy text:', err);
			}
		});
		block.appendChild(button);
		buttons.push(button);
	}

	return {
		destroy() {
			for (const button of buttons) button.remove();
		}
	};
}
