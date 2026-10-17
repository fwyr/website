const projects = [
	{
		slug: 'merritt-braunbeck',
		title: 'Bespoke Merritt-Braunbeck Coils for Quantum Sensing',
		summary:
			'A research paper conceptualising, simulating, and building a Merritt & Braunbeck inspired coil configuration for homogenous magnetic fields.',
		date: '2023-12-01'
	},
	{
		slug: 'metalenses',
		title: 'Adjoint Optimisation of Multi-Angle Achromatic Metalenses',
		summary:
			'A research project demonstrating a cost-effective optimisation procedure for achromatic and wide-FOV metalenses.',
		date: '2024-12-01'
	},
	{
		slug: 'minesweeper',
		title: 'On the Critical Density of Minesweeper',
		summary:
			'A mathematical paper investigating the relationship between Minesweeper board dimensions and its corresponding critical mine density.',
		date: '2024-05-01'
	}
];

export const sortedProjects = [...projects].sort((a, b) => b.date.localeCompare(a.date));

export function getProject(slug: string) {
	const project = projects.find((p) => p.slug === slug);
	if (!project) throw new Error(`Unknown project: ${slug}`);
	return project;
}

export function formatMonth(iso: string) {
	const [year, month] = iso.split('-').map(Number);
	const name = new Date(Date.UTC(year, month - 1, 1)).toLocaleString('en-US', {
		month: 'long',
		timeZone: 'UTC'
	});
	return `${name} ${year}`;
}
