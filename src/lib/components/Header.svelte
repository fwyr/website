<script>
	import { page } from '$app/state';
	import { site, menu } from '#lib/site.js';

	function isCurrent(/** @type {string} */ href) {
		const path = page.url.pathname;
		return href === '/' ? path === '/' : path.startsWith(href)
	}
</script>

<header>
	<div class="header">
		<h1 class="header-title"><a href="/">{site.title}</a></h1>
		<nav class="flex">
			{#each menu as item (item.name)}
				<p class={['small', isCurrent(item.href) && 'bold']}>
					<a href={item.href}>/{item.name}</a>
				</p>
			{/each}
		</nav>
	</div>
</header>
