<script>
    import Navbar from '$lib/components/Navbar.svelte';
    import '$lib/styles/styles.scss';
    import { fade } from 'svelte/transition';
    export let data;
</script>

<header>
    <Navbar />
</header>

{#key data.currentRoute}
    <div in:fade={{ duration: 150, delay: 150 }} out:fade = {{ duration: 150 }}>
        <slot />
    </div>
{/key}

<style lang='scss'>
    header {
        overflow: hidden;
        margin: 2.5rem 2rem 1rem 2rem;
    }
</style>