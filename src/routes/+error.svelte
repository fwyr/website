<script>
	import { page } from '$app/state';
	import Seo from '#lib/components/Seo.svelte';
</script>

<Seo title="{page.status} {page.error?.message ?? ''}" type="website" />

<div class="not-found">
	<div>
		{#if page.status === 404}
			<h1>&gt;&gt; lost?</h1>
		{:else}
			<h1>&gt;&gt; {page.status}</h1>
		{/if}
		<p>Click <a href="/">here</a> to go back home.</p>
	</div>
</div>
