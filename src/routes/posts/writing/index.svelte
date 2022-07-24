<script lang="ts">
  import PostList from '$components/PostList.svelte'
  import type { ArticleMeta } from '$lib/types'

  export let posts: ArticleMeta[] = []
</script>

<svelte:head>
  <title>에세이</title>
  <meta name="description" content="경험과 떠올랐던 생각들을 기록해요." />
</svelte:head>

<h1>에세이</h1>
<p>경험과 떠올랐던 생각들을 기록해요.</p>

<PostList dir={'writing'} {posts} />

<style lang="postcss">
  h1 {
    margin-bottom: 0;
  }

  p {
    margin-top: 0.25em;
    margin-bottom: 0;
  }
</style>
