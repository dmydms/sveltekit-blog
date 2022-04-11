<script lang="ts">
    import type { ArticleMeta } from '$lib/types'

    export let posts: ArticleMeta[] = []
</script>

<svelte:head>
  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-NW5PX94');</script>
  <!-- End Google Tag Manager -->
    <title>개발하는 다현</title>
    <meta name="description" content="안녕하세요! 제품 개발자 김다현입니다.🙋‍♀️" />
</svelte:head>

<h1>블로그 홈</h1>
<p>생각, 회고, 개발 이야기 등을 기록합니다.</p>

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
