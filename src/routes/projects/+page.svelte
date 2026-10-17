<script>
	import Seo from '#lib/components/Seo.svelte';
	import Card from '#lib/components/Card.svelte';
	import { sortedProjects, formatMonth } from '#lib/projects.js';
</script>

<Seo title="Projects" type="website" />

<div class="list-container">
	<h1>&gt;&gt; projects</h1>

	{#each sortedProjects as project (project.slug)}
		<Card
			title={project.title}
			summary={project.summary}
			date={formatMonth(project.date)}
			href="/projects/{project.slug}/"
		/>
	{/each}
</div>