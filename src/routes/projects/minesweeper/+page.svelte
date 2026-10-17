<script>
	import Seo from '#lib/components/Seo.svelte';
	import SinglePage from '#lib/components/SinglePage.svelte';
	import Heading from '#lib/components/Heading.svelte';
	import { getProject } from '#lib/projects.js';

	const project = getProject('minesweeper');
</script>

<Seo
	title={project.title}
	ogDescription={project.summary}
	published={project.date}
	section="projects"
/>

<SinglePage title={project.title}>
	<Heading level={3} id="overview">Overview</Heading>
	<p>This project was selected as a finalist presentation at the Singapore Mathematics Project Festival (SMPF) Congress and thereafter awarded <strong>Silver</strong>.</p>
	<p>Please visit <a href="https://asdia.dev/">Eytan's website</a> for the paper, code, and citation details.</p>
	<Heading level={3} id="abstract">Abstract</Heading>
	<p>We introduce the critical density of a Minesweeper board and investigate how the dimensions of a board affects it. We first present a mathematical analysis of Minesweeper gameplay and implement a Minesweeper solver. We then model our simulated results with the logistic function in order to calculate the critical densities of various board sizes. Lastly, we discuss the general trend of the calculated critical densities and show that the critical density converges to approximately 0.159 for all sufficiently large board sizes.</p>
</SinglePage>
