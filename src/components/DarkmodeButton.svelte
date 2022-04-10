<script>
  export let btnText = "Dark Mode";

  function toggle() {
    document.documentElement.classList.toggle('dark-mode')
    btnText = btnText === "Dark Mode" ? "Light Mode" : "Dark Mode"
  }
</script>

<button on:click={toggle}>
  {btnText}
</button>

<style>
  button {
    position: absolute;
		background-color: var(--c-accent);
		color: white;
		border: none;
		border-radius: 4px;
		padding: 0.5rem;
		text-transform: uppercase;
    right: 1em;
    top: -8em;
	}
	:global(:root.dark-mode) button {
		background-color: var(--dark-c-accent);
		color: var(--dark-c-bg);
	}
</style>
