<script lang="ts">
    import '$lib/css/root.css'
</script>

<nav class="gnb">
    <ul>
      <li><a href="/">🏠</a></li>
      <li><a href="/posts/TIL">오늘을 기록해요.</a></li>
      <li><a href="/posts/introduce">저는 누굴까요?</a></li>
    </ul>
</nav>

<main>
    <slot />
</main>

<style lang="postcss">
  .gnb {
    ul {
      display: flex;
      padding: 0;
      margin: 1em 0;
      gap: 0.75em;
      list-style-type: none;
    }
  }
</style>
