<script lang="ts">
  import type { ArticleMeta } from '$lib/types'

  export let posts: ArticleMeta[] = []
</script>

<svelte:head>
  <title>Today I Learned</title>
  <meta name="description" content="개발하는 다현. 오늘을 기록해요." />
</svelte:head>

<h1>오늘을 기록해요.</h1>
<p>TIL, 오늘 있었던 소소한 이야기를 남겨요.</p>

<ul class="posts">
  {#each posts as post}
      <li>
          <article>
              <h2 class="title"><a href={`/posts/TIL/${post.id}`}>{post.title}</a></h2>
              <time class="published-at">{post.publishedAt}</time>
              <p class="summary">{post.summary}</p>
          </article>
      </li>
  {/each}
</ul>
