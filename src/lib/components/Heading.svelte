<!-- A section heading with a "#" permalink that appears on hover. -->
<script>
	/** @type {{ level?: 1 | 2 | 3 | 4, id: string, children: import('svelte').Snippet }} */
	let { level = 2, id, children } = $props();
</script>

<svelte:element this={`h${level}`} class="heading" {id}>
	{@render children()}
	<a href="#{id}">#</a>
</svelte:element>
