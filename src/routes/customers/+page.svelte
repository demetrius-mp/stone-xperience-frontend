<script lang="ts">
	import IconCalendar from '~icons/mdi/Calendar';

	export let data;

	function formatCurrency(value: number) {
		return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
	}
</script>

<svelte:head>
	<title>StoneXperience - Clientes</title>
</svelte:head>

<div class=" sm:ml-64">
	<div class="mt-[4.5rem] p-4 flex flex-col gap-4">
		<div class="flex justify-between items-center">
			<h2 class="text-3xl font-extrabold text-primary strong-green">Clientes</h2>
		</div>

		<div
			class="flex justify-between rounded-lg p-4 text-white font-bold"
			style="background-color: #00a868;"
		>
			<div>
				<h3>Total de clientes: 37</h3>
			</div>

			<div class="flex items-center gap-1">
				<IconCalendar />
				<span> 24 ago 2024 </span>
			</div>
		</div>

		<div class="flex flex-col gap-2">
			<div class="flex justify-between">
				<button class="btn btn-sm"> Perfil dos clientes </button>

				<div>
					<button class="btn btn-sm"> + Novo registro </button>
				</div>
			</div>

			<div class="overflow-x-auto">
				<table class="table table-zebra">
					<thead>
						<tr>
							<th>ID</th>
							<th>Nome</th>
							<th>Qtd. compras</th>
							<th>Valor total gasto</th>
						</tr>
					</thead>
					<tbody>
						{#each data.customers as customer}
							<tr>
								<th>
									{customer.id}
								</th>

								<td>
									{customer.name}
								</td>

								<td>
									{customer.numberOfPurchases}
								</td>

								<td>
									{formatCurrency(customer.totalSpent)}
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>

<style>
	.table-zebra tbody tr:nth-child(even) {
		--tw-bg-opacity: 0.5;
		background-color: var(--fallback-b2, oklch(var(--b2) / var(--tw-bg-opacity)));
	}
</style>
