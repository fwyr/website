<script>
    let data = {
        pages: [
            { path: "/me", label: "me" },
            { path: "/projects", label: "projects" },
            { path: "/contact", label: "contact" }
        ]
    }
</script>

<nav class="navbar" id="navbar">
    <div class="nav-container">
        <!-- be gay -->
        <div>
            <a href="/" class="logo rainbow">
                <span style="--l: 0">~ </span><span style="--l: 1">f</span><span style="--l: 2">w</span><span style="--l: 3">y</span><span style="--l: 4">r </span><span style="--l: 5">~</span>
            </a>
        </div>
        <!-- do crimes -->
        <div class="menu">
            {#each data.pages as page} 
                <div class="menu-item">
                    <a href={page.path}>{page.label}</a>
                </div>
            {/each}
        </div>
    </div>
</nav>

<style lang='scss'>
    a {
        transition: 0.2s
    }
    a:hover {
        color: #908caa;
    }
    .logo {
        font-size: 3rem;
        font-weight: 900;
        font-style: italic;
        letter-spacing: 1.5px;
    }
    .nav-container {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
        column-gap: 2.5rem;
    }
    .menu {
        margin-top: 0.5rem;
        list-style-type: none;
    }
    .menu-item {
        font-size: 1.75rem;
        margin-right: 2rem;
        display: inline-block;
    }
    .rainbow span {
        animation-delay: calc(var(--l)*-90ms);
        animation: rainbow-animation 3s linear calc(var(--l)*-90ms) infinite forwards running;
    }
    @keyframes rainbow-animation {
        0% {
            color: #fb5b44;
        }
        17% {
            color: #fc9548;
        }
        33% {
            color: #f2ce3f;
        }
        50% {
            color: #88bb64;
        }
        67% {
            color: #0491d0;
        }
        83% {
            color: #6d458b;
        }
        100% {
            color: #fb5b44;
        }
    }
    @media only screen and (max-width: 992px) {
        .logo {
            font-size: 2.5rem;
        }
        .menu-item {
            font-size: 1.5rem;
        }
    }
</style>