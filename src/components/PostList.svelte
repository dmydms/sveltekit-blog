<script lang="ts">
  import type { ArticleMeta } from '$lib/types'

  export let dir: string
  export let posts: ArticleMeta[] = []
</script>

<ul class="posts">
  {#each posts as post}
    <li>
      <article>
        <div class="title-published-at-wrapper">
          <time class="published-at"><small>{post.publishedAt}</small></time>
          <h2 class="title"><a href={`/posts/${dir}/${post.id}`}>{post.title}</a></h2>
        </div>
        <p class="summary">{post.summary}</p>
      </article>
    </li>
  {/each}
</ul>

<style>
  .posts {
    margin-top: 1em;
  }

  .title-published-at-wrapper {
    display: flex;
    flex-direction: column;
  }

  .title {
    margin-top: 0;
    margin-bottom: 0.2em;
  }

  .summary {
    margin-top: 0;
  }
</style>
