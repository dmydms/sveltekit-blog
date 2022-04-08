<script lang="ts">
  import type { ArticleMeta } from '$lib/types'

  export let posts: ArticleMeta[] = []
</script>

<svelte:head>
  <title>Today I Learned</title>
  <meta name="description" content="개발하는 다현. 저는 누구일까요?" />
</svelte:head>

<h1>
  안녕하세요.<br/>
  제품개발자 김다현입니다.🙋‍♀️
</h1>

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
