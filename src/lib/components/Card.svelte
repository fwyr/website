<script>
	/**
	 * @type {{
	 *   title: string,
	 *   summary: string,
	 *   href: string,    
	 *   date?: string,     
	 *   file?: boolean   
	 * }}
	 */
	let { title, summary, href, date, file = false } = $props();
</script>

<div class="post-line">
	<header class="line-title">
		<h3><span>{title}</span></h3>
	</header>
	<div class="post-summary">
		<p>{summary}</p>
	</div>
	{#if date}
		<footer class="line-date">{date}</footer>
	{/if}
	<a class="post-link" {href} aria-label={title} data-sveltekit-reload={file || undefined}></a>
</div>