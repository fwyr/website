<script>
	import Seo from '#lib/components/Seo.svelte';
	import SinglePage from '#lib/components/SinglePage.svelte';
	import Heading from '#lib/components/Heading.svelte';
	import { getProject } from '#lib/projects.js';

	const project = getProject('merritt-braunbeck');
</script>

<Seo
	title={project.title}
	ogDescription={project.summary}
	published={project.date}
	section="projects"
/>

<SinglePage title={project.title}>
	<Heading level={3} id="overview">Overview</Heading>
	<p>This project was carried out under the R@YDSP programme at DSO National Laboratories.</p>
	<p>You can download the paper <a href="./report.pdf" data-sveltekit-reload><strong>here</strong></a>.</p>
	<Heading level={3} id="abstract">Abstract</Heading>
	<p>Magnetic coils are crucial to quantum-related experiments as homogenous magnetic fields provide quantization axes for sensing and enables precise control over quantum states. The design of magnetic coils needs to ensure uniformity and field strength, which is further complicated by geometric requirements for optical access. We conceptualize, build, and analyze bespoke magnetic coils inspired by the Merritt and Braunbeck configurations for the generation of strong and homogenous fields with improved optical access. This compact novel configuration provides a field that deviates by less than 1% across more than 70% of the coil length, providing strong magnetic fields over large spatial volumes with the potential to significantly reduce noise and optical restrictions in quantum systems.</p>
</SinglePage>
