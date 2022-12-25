<script>
    export let data;
    import PageHeading from '$lib/components/PageHeading.svelte';
    import Article from '$lib/components/Article.svelte';
</script>

<PageHeading title={data.title} subtitle={data.subtitle} />

<Article>
    <svelte:component this={data.content} />
</Article>
