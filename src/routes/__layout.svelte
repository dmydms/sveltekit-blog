<script lang="ts">
  import '$lib/css/root.css'

  // import DarkmodeButton from '$components/DarkmodeButton.svelte'
</script>

<nav class="gnb">
  <ul>
    <li><a href="/">소개</a></li>
    <li><a href="/posts/blog">블로그</a></li>
    <li><a href="/posts/writing">에세이</a></li>
  </ul>
</nav>

<main>
  <slot />
</main>

<footer class="footer">
  <p>제가 더 궁금하세요?</p>
  <ul class="footer-ul">
    <li><a href="https://twitter.com/doomydoomydooms">Twitter</a></li>
    <li><a href="https://github.com/dmydms">GitHub</a></li>
  </ul>
</footer>

<!-- <DarkmodeButton>Darkmode</DarkmodeButton> -->
<style lang="postcss">
  .gnb {
    ul {
      display: flex;
      padding: 0;
      margin: 1em 0;
      gap: 0.75em;
    }
  }

  .footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 4em;
    font-size: 0.8em;
    text-align: center;

    p {
      color: grey;
    }

    p,
    ul {
      margin: 0;
    }

    .footer-ul {
      display: flex;
      justify-content: center;
      gap: 0.75em;
    }
  }
</style>
