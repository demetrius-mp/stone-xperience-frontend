<script lang="ts" context="module">
	import Chart, { type ChartConfiguration } from 'chart.js/auto';
	import ChartDataLabels from 'chartjs-plugin-datalabels';

	Chart.register(ChartDataLabels);

	Chart.defaults.color = '#fff';
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	export let config: ChartConfiguration;

	let canvasElement: HTMLCanvasElement | null = null;

	onMount(() => {
		if (!canvasElement) return;

		new Chart(canvasElement, config);
	});
</script>

<canvas bind:this={canvasElement}></canvas>
