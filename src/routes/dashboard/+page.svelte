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
			<div
				class="p-4 bg-dashboard-chart rounded-xl flex flex-col items-center justify-between gap-8 col-span-1"
			>
				<div>
					<h4 class="text-center font-bold text-xl text-white">Meta</h4>
				</div>

				<div
					class="radial-progress"
					style="--value:70; --size: 8rem; --thickness: 0.75rem; color: #61f284"
					role="progressbar"
				>
					70%
				</div>

				<div class="flex flex-col mt-auto text-white">
					<span>
						Faturamento total: <strong>R$70.000,00</strong>
					</span>
					<span>
						Meta: <strong>R$100.000,00</strong>
					</span>
				</div>
			</div>

			<div class="p-4 bg-dashboard-chart rounded-xl col-span-2">
				<Chart config={data.datasets.d2} />
			</div>

			<div class="bg-dashboard-chart rounded-xl col-span-1 p-4">
				<Chart config={data.datasets.d1} />
			</div>

			<div class="p-4 bg-dashboard-chart rounded-xl col-span-2">
				<Chart config={data.datasets.d3} />
			</div>
		</div>
	</div>
</div>
