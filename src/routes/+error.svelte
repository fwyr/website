<main>
    <section class="intro animate-enter" style="--stagger: 1">
        <h1 class="title">404.</h1>
        <p>nothing here, chief.</p>
        <p>is this a bug or a feature?</p>
        <br>
        <a href="/" class="go-back">go back?</a>
    </section>
</main>

<style lang="scss">
    main {
        flex: 1;
    }
    section {
        margin-left: 25vw;
        margin-right: 25vw;
        margin-bottom: 7.5rem;
    }
    a {
        transition: 0.2s;
    }
    a:hover {
        color: #26233a;
        background-color: #e0def4;
    }
    .intro {
        margin-top: 4rem;
    }
    .go-back {
        border: 2px solid #6e6a86;
        border-radius: 1.5rem;
        padding: 0.5rem 1.25rem;
    }
</style>