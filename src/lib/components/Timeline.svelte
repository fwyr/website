<script>
    let data = {
        events: [
            {
                date: "December 2022",
                title: "Edusave Scholarship",
                description: "Awarded to students who are within the top 10% in their cohort in terms of academic performance."
            },
            {
                date: "October 2022",
                title: "Splash Awards – Finalist",
                description: "Collaborated with a teammate and designed REALISER, an artificial intelligence model to detect both local and international fake news using Tensorflow, Keras, and Python. After several rounds of judging and presentation, we emerged as one of the finalist teams in the competition."
            },
            {
                date: "August 2022",
                title: "Australian Mathematics Competition – Distinction",
                description: "Competed in Australia's largest mathematics competition for students. I was awarded a certificate of distinction for scoring in the top 20% of contestants."
            },
            {
                date: "August 2022",
                title: "LiveOn Essay Festival – Distinction",
                description: "Wrote an argumentative piece on as to how Singapore's conservative society has been pertinent to the nation's low organ donation rates."
            },
            {
                date: "March 2022",
                title: "25th National Olympiad in Informatics – Bronze",
                description: "Participated in Singapore's national informatics olympiad, where contestants were given 3 hours to solve 3 tasks. I managed to clinch a bronze medal in my first year of participation."
            }
        ]
    }
</script>

<div class="timeline">
    <div class="timeline-outer">
        {#each data.events as event}
            <div class="timeline-card">
                <h5 class="timeline-date">{event.date}</h5>
                <h3 class="timeline-title">{event.title}</h3>
                <p>{event.description}</p>
            </div>
        {/each}
    </div>
</div>

<style lang="scss">
    .timeline {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        flex-grow: 1;
    }
    .timeline-outer {
        border-left: 2px solid #908caa;
    }
    .timeline-card {
        position: relative;
        margin: 0 0 1rem 2rem;
        padding: 0.25rem 1.5rem;
        background: #26233a;
        border-radius: 0.5rem;
    }
    .timeline-date {
        margin-bottom: 0;
    }
    .timeline-title {
        position: relative;
        margin: 0;
        padding: 0;
    }
    .timeline-title::before {
        content: "";
        position: absolute;
        width: 1rem;
        height: 1rem;
        background: #ebbcba;
        border-radius: 999rem;
        left: -4.05rem;
    }
    
</style>
