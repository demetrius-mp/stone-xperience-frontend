<script lang="ts">
	import Chart from '$lib/components/Chart.svelte';

	export let data;

	function formatCurrency(value: number) {
		return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
	}
</script>

<svelte:head>
	<title>StoneXperience - Dashboard</title>
</svelte:head>

<div class=" sm:ml-64">
	<div class="mt-[4.5rem] p-4">
		<h2 class="text-3xl font-extrabold text-primary strong-green mb-4">Dashboard</h2>

		<div class="flex flex-col gap-4 xl:grid xl:grid-cols-3">
			<div class="p-4 bg-dashboard-chart rounded-xl col-span-1">
				<Chart config={data.datasets.metaDeFaturamento} />

				<div class="text-white flex flex-col mt-8 ms-4 mb-2 text-lg">
					<span>
						Faturamento total: <strong>{formatCurrency(39500)}</strong>
					</span>

					<span>
						Meta: <strong>{formatCurrency(50000)}</strong>
					</span>
				</div>
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
