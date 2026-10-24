<script>
	import '../app.css';
	import Header from '#lib/components/Header.svelte';
	import Footer from '#lib/components/Footer.svelte';

	let { children } = $props();
</script>

<div class="content" id="top">
	<Header />

	<main class="main">
		{@render children()}
	</main>
</div>

<Footer />
