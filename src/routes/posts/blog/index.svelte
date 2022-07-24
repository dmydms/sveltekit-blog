<script lang="ts">
  import PostList from '$components/PostList.svelte'
  import type { ArticleMeta } from '$lib/types'

  export let posts: ArticleMeta[] = []
</script>

<svelte:head>
  <title>블로그</title>
  <meta
    name="description"
    content="공부했던 내용, 마주쳤던 에러, 회고 등 개발을 하면서 겪었던 경험을 남겨요."
  />
</svelte:head>

<h1>블로그</h1>
<p>공부했던 내용, 마주쳤던 에러, 회고 등 개발을 하면서 겪었던 경험을 남겨요.</p>

<PostList dir="blog" {posts} />

<style lang="postcss">
  h1 {
    margin-bottom: 0;
  }

  p {
    margin-top: 0.25em;
    margin-bottom: 0;
  }
</style>
