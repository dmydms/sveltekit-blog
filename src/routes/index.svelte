<script lang="ts">
    import type { ArticleMeta } from '$lib/types'

    export let posts: ArticleMeta[] = []
</script>

<svelte:head>
    <title>Dahyun's Dev Blog</title>
    <meta name="description" content="웹사이트 설명" />
</svelte:head>

<h1>Dahyun's Dev Blog</h1>

<ul class="posts">
    {#each posts as post}
        <li>
            <article>
                <h2 class="title"><a href={`/posts/${post.id}`}>{post.title}</a></h2>
                <time class="published-at">{post.publishedAt}</time>
                <p class="summary">{post.summary}</p>
            </article>
        </li>
    {/each}
</ul>
