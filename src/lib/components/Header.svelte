<script>
	import { site, menu } from '#lib/site.js';

	/** @type {{ active?: string }} name of the menu item to show in bold */
	let { active } = $props();
</script>

<header>
	<div class="header">
		<h1 class="header-title"><a href="/">{site.title}</a></h1>
		<nav class="flex">
			{#each menu as item (item.name)}
				<p class={['small', item.name === active && 'bold']}>
					<a href={item.href}>/{item.name}</a>
				</p>
			{/each}
		</nav>
	</div>
</header>
