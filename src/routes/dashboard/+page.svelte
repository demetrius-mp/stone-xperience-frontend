<script lang="ts">
	import Chart from '$lib/components/Chart.svelte';

	export let data;
</script>

<svelte:head>
	<title>Stone Xperience - Dashboard</title>
</svelte:head>

<div class=" sm:ml-64">
	<div class="mt-[3.5rem] p-4">
		<h2 class="text-3xl font-extrabold text-primary strong-green mb-4">Dashboard</h2>

		<div class="flex flex-col gap-4 xl:grid xl:grid-cols-3">
			<div class="p-4 bg-dashboard-chart rounded-xl col-span-1">
				<Chart config={data.datasets.metaDeFaturamento} />
			</div>

			<div class="p-4 bg-dashboard-chart rounded-xl col-span-2">
				<Chart config={data.datasets.faturamentoPorMes} />
			</div>

			<div class="bg-dashboard-chart rounded-xl col-span-1 p-4">
				<Chart config={data.datasets.produtosMaisVendidos} />
			</div>

			<div class="p-4 bg-dashboard-chart rounded-xl col-span-2">
				<Chart config={data.datasets.vendasPorHorario} />
			</div>
		</div>
	</div>
</div>
