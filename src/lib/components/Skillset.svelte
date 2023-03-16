<script>
    let data = {
        categories: [
            {
                title: "languages",
                skills: [
                    { label: "English", link: "javascript:void(0);" },
                    { label: "Mandarin", link: "javascript:void(0);" },
                    { label: "Python", link: "https://www.python.org/" },
                    { label: "C++", link: "https://isocpp.org/" },
                    { label: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/javascrip" },
                    { label: "Ruby", link: "https://www.ruby-lang.org/" }
                ]
            },
            {
                title: "web development",
                skills: [
                    { label: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
                    { label: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
                    { label: "Sass", link: "https://sass-lang.com/" },
                    { label: "Node.js", link: "https://nodejs.org/" },
                    { label: "Svelte", link: "https://svelte.dev/" },
                    { label: "Vue", link: "https://vuejs.org/" },
                    { label: "Jekyll", link: "https://jekyllrb.com/" },
                    { label: "Flask", link: "https://flask.palletsprojects.com/" }
                ]
            },
            {
                title: "machine learning",
                skills: [
                    { label: "Tensorflow", link: "https://www.tensorflow.org/" },
                    { label: "NumPy", link: "https://numpy.org/" },
                    { label: "Pandas", link: "https://pandas.pydata.org/" }
                ]
            },
            {
                title: "version control",
                skills: [
                    { label: "Git", link: "https://git-scm.com/" },
                    { label: "GitHub", link: "https://github.com/" },
                    { label: "GitLab", link: "https://about.gitlab.com/" }
                ]
            },
            {
                title: "tools",
                skills: [
                    { label: "Fish", link: "https://fishshell.com/" },
                    { label: "iTerm2", link: "https://iterm2.com/" },
                    { label: "Obsidian", link: "https://obsidian.md/" },
                    { label: "Notion", link: "https://notion.so/" },
                    { label: "Google Colab", link: "https://colab.research.google.com/" },
                    { label: "VSCode", link: "https://vscodium.com/" },
                    { label: "macOS", link: "javascript:void(0);" }
                ]
            }
        ]
    };
</script>

<div class="skills-grid">
    {#each data.categories as category}
        <div class="skills-category">
            <h3>{category.title}</h3>
            <div class="skills-box">
                {#each category.skills as skill} 
                    <a class="skill-label" href={skill.link}>{skill.label}</a>
                {/each}
            </div>
        </div>
    {/each}
</div>

<style lang="scss">
    a {
        transition: 0.2s;
    }
    a:hover {
        color: #26233a;
        background-color: #e0def4;
    }
    .skills-grid {
        display: grid;
        grid-template-columns: auto auto;
        column-gap: 2.5rem;
        row-gap: 1rem;
    }
    .skills-box {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
    }
    .skill-label {
        border: 2px solid #6e6a86;
        border-radius: 1.5rem;
        padding: 0.5rem 1.25rem;
    }
</style>