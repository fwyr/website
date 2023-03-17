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
    <!-- be gay -->
    <a href="/" class="logo rainbow">
        <span style="--l: 0">~</span><span style="--l: 1">b</span><span style="--l: 2">r</span><span style="--l: 3">a</span><span style="--l: 4">i</span><span style="--l: 5">n</span><span style="--l: 6">r</span><span style="--l: 7">o</span><span style="--l: 8">t</span><span style="--l: 9">~</span>
    </a>
    <!-- do crimes -->
    <div class="menu">
        {#each data.pages as page} 
            <div class="menu-item">
                <a href={page.path}>{page.label}</a>
            </div>
        {/each}
    </div>
</nav>

<style lang='scss'>
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center; 
    }
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
            font-size: 2rem;
        }
        .menu-item {
            font-size: 1.5rem;
        }
    }
    @media only screen and (max-width: 768px) {
        .logo {
            font-size: 1.75rem;
        }
        .menu-item {
            font-size: 1.25rem;
        }
    }
</style>