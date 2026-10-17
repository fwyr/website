<script>
	import Seo from '#lib/components/Seo.svelte';
	import SinglePage from '#lib/components/SinglePage.svelte';
	import Heading from '#lib/components/Heading.svelte';
	import { getProject } from '#lib/projects.js';

	const project = getProject('metalenses');
</script>

<Seo
	title={project.title}
	ogDescription={project.summary}
	published={project.date}
	section="projects"
/>

<SinglePage title={project.title}>
	<Heading level={3} id="overview">Overview</Heading>
	<p>This project was carried out under the <a href="https://www.a-star.edu.sg/ihpc/">A*STAR Institute of High-Performance Computing (IHPC)</a> and awarded <strong>Silver</strong> at the 25th Singapore Science and Engineering Fair.</p>
	<p>You can take a look at the <a href="./report.pdf" data-sveltekit-reload><strong>paper</strong></a> and the <a href="./poster.pdf" data-sveltekit-reload><strong>poster</strong></a>.</p>
	<Heading level={3} id="abstract">Abstract</Heading>
	<p>Metasurfaces are an emergent class of ultra-thin patterned optical films, enabling the manipulation of electromagnetic waves with unprecedented precision as compared to their counterparts in conventional optics. A critical problem in the study of metalenses involves its structural designing, a concern hindered by plethoric degrees of freedom that presents in various optimisation problems.</p>
	<p>In this paper, we characterise inverse design and demonstrate the gradient-based optimisation of achromatic metalenses using the adjoint method, through the development of mathematical models pertaining to back-propagation of electromagnetic responses, penalisation filters and design field projection, and maximin optimisation with epigraph formulation.</p>
	<p>Our designed metalenses are binary-constrained with single-layered gratings to guarantee concordance with lithographic fabrication requirements. We employ our optimisation workflow to investigate achromatic behaviour at numerical apertures 0.1 to 0.5, demonstrating high-performance capabilities at low and medium-NA levels. Novel investigations are furthered by considering oblique incident planewaves of 15º, designing wide field-of-view metalenses that simultaneously possess achromatic properties.</p>
	<p>Our research aids in advancing state-of-the-art metalens design, by substantiating an computationally inexpensive method of designing achromatic and multi-angle metastructure lenses that are able to exhibit efficient focusing of light.</p>
</SinglePage>
