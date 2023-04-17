<main>
    <section class="intro animate-enter" style="--stagger: 1">
        <h1 class="title">want to talk?</h1>
        <p>find me at these places!</p>
        <div class="contact-container">
            <a href="https://github.com/fwyr/">
                <i class="fa-brands fa-github"></i>
            </a>
            <a href="mailto:fwyr@proton.me">
                <i class="fa-solid fa-envelope"></i>
            </a>
            <a href="https://discord.id/?prefill=698216301675544667">
                <i class="fa-brands fa-discord"></i>
            </a>
        </div>
    </section>
</main>

<style lang="scss">
    main {
        flex: 1;
    }
    a {
        text-decoration: underline;
    }
    .intro {
        margin-top: 4rem;
    }
    .contact-container {
        display: flex;
        flex-wrap: row wrap;
        justify-content: center;
        align-items: center;
    }
    .contact-container i {
        margin: 2.5rem 5rem;
        font-size: 5rem;
        transition: 0.2s;
    }
    i:hover {
        color: #908caa;
        transform: translateY(-0.25rem);
    }
    @media only screen and (max-width: 992px) {
        .contact-container i {
        margin: 2rem 3rem;
        font-size: 4rem;
        }
    }
    @media only screen and (max-width: 768px) {
        .contact-container i {
        margin: 1rem 2rem;
        font-size: 3rem;
        }
    }
</style>