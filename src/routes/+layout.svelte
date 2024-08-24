<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import '../app.postcss';
</script>

<div>
	<Navbar />
	<Sidebar />

	<slot />
</div>
