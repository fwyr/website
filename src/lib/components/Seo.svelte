<script>
	import { page } from '$app/state';
	import { site } from '#lib/site.js';

	/**
	 * @type {{
	 *   title: string,             // og:title
	 *   description?: string,      // <meta name="description">
	 *   ogDescription?: string,    // og:description (defaults to description, then the site tagline)
	 *   type?: 'website' | 'article',
	 *   published?: string,        // ISO date for article pages, e.g. "2024-05-01"
	 *   section?: string
	 * }}
	 */
	let { title, description = '', ogDescription, type = 'article', published, section } = $props();

	let url = $derived(site.url + page.url.pathname);
</script>

<svelte:head>
	<title>&gt;w&lt;</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />

	<meta property="og:url" content={url} />
	<meta property="og:site_name" content={site.title} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={ogDescription || description || site.description} />
	<meta property="og:locale" content="en_us" />
	<meta property="og:type" content={type} />
	{#if published}
		{#if section}<meta property="article:section" content={section} />{/if}
		<meta property="article:published_time" content="{published}T00:00:00+00:00" />
		<meta property="article:modified_time" content="{published}T00:00:00+00:00" />
	{/if}
</svelte:head>
