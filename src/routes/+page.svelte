<script>
	import Seo from '#lib/components/Seo.svelte';
	import Heading from '#lib/components/Heading.svelte';
	import SocialIcons from '#lib/components/Icons.svelte';
	import { site } from '#lib/site.js';
</script>

<Seo
	title=">> rejoice"
	type="website"
	description={site.description}
/>

<Heading level={1} id="-rejoice">&gt;&gt; rejoice!</Heading>
<p>Hello! I'm <i>fwyr</i>.</p>
<p>I'm interested in the fields of physics and computer science. Previously, I've participated in several competitions that deal with cybersecurity, machine learning, and competitive programming. You can also look at <a href="/projects/">some pet research papers</a> that I worked on during my free time.</p>
<p>Other than that, I try my best to participate in puzzle hunts, read more books, and code fun things.</p>
<p>Thanks for visiting my site!</p>

<SocialIcons />
