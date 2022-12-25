export async function load({ params }) {
    const post = await import(`../${params.slug}.md`)
    const { title, subtitle } = post.metadata
    const content = post.default

    return {
        content,
        title,
        subtitle,
    }
}