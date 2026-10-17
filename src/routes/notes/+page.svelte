<script>
	import Seo from '#lib/components/Seo.svelte';
	import Card from '#lib/components/Card.svelte';
	import { notes } from '#lib/notes.js';
</script>

<Seo title=">> notes" description="i'm here!" />

<div class="list-container">
	<h1>&gt;&gt; notes</h1>

	{#each notes as note (note.href)}
		<Card {...note} file />
	{/each}
</div>