<header class="header">
    <nav>
        <!-- be gay -->
        <a href="/" class="logo rainbow">~ a blip in time ~</a>
        <!-- do crimes -->
        <ul class="menu">
            <li class="menu-item"><a href="/me">me</a></li>
            <li class="menu-item">
                <a href="/omnipresence">omnipresence</a>
            </li>
        </ul>
    </nav>
    <ul class="social-links">
        <a
            href="mailto:fwyr@proton.me"
            class="social-links-item"
            target="_blank"
            rel="noreferrer"
        >
            <i class="fa fa-envelope-square" />
        </a>
        <a
            href="https://github.com/fwyr"
            class="social-links-item"
            target="_blank"
            rel="noreferrer"
        >
            <i class="fa fa-github" />
        </a>
    </ul>
</header>

<style>
    nav {
        float: left;
    }

    .header {
        overflow: hidden;
    }

    .logo {
        font-family: var(--font-header);
        font-size: 300%;
        font-weight: 900;
        font-style: italic;
        letter-spacing: 1.5px;
    }

    .menu {
        font-size: 150%;
        margin: 0px;
        margin-top: 6px;
        padding: 0px;
        list-style-type: none;
    }

    .menu li {
        font-size: 120%;
    }

    .menu-item {
        display: inline-block;
        margin-right: 35px;
    }

    .menu-item:last-child {
        margin-right: 0px;
    }

    .menu-item a {
        font-weight: 400;
        font-family: var(--font-header);
        color: var(--color-white);
    }

    .menu-item a:hover,
    .social-links i:hover {
        color: var(--color-white-hover);
    }

    .social-links {
        float: right;
        font-size: 150%;
        list-style-type: none;
    }

    .social-links i {
        display: inline-block;
        margin-left: 10px;
        color: var(--color-white);
        transition: color 0.2s ease;
    }
</style>
