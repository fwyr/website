<script>
	import { social } from '#lib/site.js';
</script>

<div class="social-icons">
	{#each social as link (link.name)}
		<a href={link.url} target="_blank" rel="noopener noreferrer me" title={link.name}>
			<svg role="img" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<title>{link.label}</title>
				<path d={link.icon} />
			</svg>{' '}
		</a>
	{/each}
</div>
