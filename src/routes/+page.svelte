<script>
	let { data } = $props();
</script>

<svelte:head><title>Hello from Arcen Cloud</title></svelte:head>

<main>
	<h1>Hello from Arcen Cloud</h1>
	<p>A minimal SvelteKit app (adapter-node) used to test deploys.</p>
	<p><small>Served at {data.now}, commit {data.commit}.</small></p>
</main>
