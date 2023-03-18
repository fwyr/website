<script> 
    import Skillset from '$lib/components/Skillset.svelte';
    import Timeline from '$lib/components/Timeline.svelte';
    import '$lib/styles/styles.scss';
</script>

<svelte:head>
    <title>fwyr</title>
</svelte:head>

<main>
    <section class="intro animate-enter" style="--stagger: 1">
        <h1 class="title">hi, i'm fwyr!</h1>
        <p>a high school student with an unconditional love for science, math, technology, and literature.</p>
        <p>scroll down for more!</p>
        <div class="intro-chevron">
            <i class="fa-solid fa-chevron-down"></i>
        </div>
    </section>
    <section class="more animate-enter" style="--stagger: 2">
        <h2>eternally exploring.</h2>
        <p>currently based in Singapore, my fiery passion for all things STEM transcends boundaries, especially endeavours that involve computers.</p>
        <p>i'm someone with a knack for problem solving, creating, and learning. currently, i surround myself with competitive programming, front-end development, and machine learning.</p>
        <p>i always look forward to expanding my knowledge and being my best self.</p> 
        
    </section>
    <section class="skills animate-enter" style="--stagger: 3">
        <h2>garnering skillsets.</h2>
        <p>here's a look at my technical knowledge.</p>
        <Skillset />
    </section>
    <section class="passage animate-enter" style="--stagger: 4">
        <h2>reaching for the stars.</h2>
        <Timeline />
    </section>
</main>

<style lang="scss">
    main {
        flex: 1;
    }
    .intro {
        margin-top: 4rem;
    }
    .intro p {
        font-size: 1.5rem;
    }
    .intro-chevron {
        font-size: 2.5rem;
        text-align: center;
    }
    @media only screen and (max-width: 768px) {
        .intro p {
            font-size: 1.25rem;
        }
    }
</style>