export async function load({ params }) {
    const post = await import(`./${params.slug}.svelte`)
    return {
        slug: post.default
    };
}