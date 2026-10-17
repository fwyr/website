<!-- Layout for a content page: big title, the page body, and an optional "back to top" link. -->
<script>
	import { copyCode } from '#lib/actions/copy-code.js';

	/** @type {{ title: string, backToTop?: boolean, children: import('svelte').Snippet }} */
	let { title, backToTop = true, children } = $props();
</script>

<div class="single-intro-container">
	<h1 class="single-title">{title}</h1>
	<p class="single-readtime"></p>
</div>

<div class="single-content" use:copyCode>
	{@render children()}
</div>

{#if backToTop}
	<div class="back-to-top">
		<a href="#top">back to top</a>
	</div>
{/if}
