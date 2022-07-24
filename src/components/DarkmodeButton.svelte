<script>
  export let btnText = 'Dark Mode'

  function toggle() {
    document.documentElement.classList.toggle('dark-mode')
    btnText = btnText === 'Dark Mode' ? 'Light Mode' : 'Dark Mode'
  }
</script>

<button on:click={toggle}>
  {btnText}
</button>

<style>
  button {
    position: absolute;
    top: -8em;
    right: 1em;
    padding: 0.5rem;
    border: none;
    background-color: var(--c-accent);
    border-radius: 4px;
    color: white;
    text-transform: uppercase;
  }

  :global(:root.dark-mode) button {
    background-color: var(--dark-c-accent);
    color: var(--dark-c-bg);
  }
</style>
