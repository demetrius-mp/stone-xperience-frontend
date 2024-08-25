<script lang="ts">
	import IconCalendar from '~icons/mdi/Calendar';

	export let data;

	function formatCurrency(value: number) {
		return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
	}
</script>

<svelte:head>
	<title>Stone Xperience - Estoque</title>
</svelte:head>

<div class=" sm:ml-64">
	<div class="mt-[3.5rem] p-4 flex flex-col gap-4">
		<h2 class="text-3xl font-extrabold text-primary strong-green">Estoque</h2>

		<div
			class="flex justify-between rounded-lg p-4 text-white font-bold"
			style="background-color: #00a868;"
		>
			<div>
				<h3>
					Faturamento total: {formatCurrency(5950)}
				</h3>
			</div>

			<div class="flex items-center gap-1">
				<IconCalendar />
				<span> 24 ago 2024 </span>
			</div>
		</div>

		<div class="flex flex-col gap-2">
			<div class="flex justify-between">
				<h3 class="text-xl font-bold text-primary strong-green">Itens</h3>

				<button class="btn btn-sm"> + Novo registro </button>
			</div>

			<div class="overflow-x-auto">
				<table class="table table-zebra">
					<thead>
						<tr>
							<th>#</th>
							<th>Item</th>
							<th>Quantidade</th>
							<th>Valor de compra</th>
							<th>Valor de venda</th>
							<th>Faturamento</th>
						</tr>
					</thead>
					<tbody>
						{#each data.items as item}
							<tr>
								<th>
									{item.id}
								</th>

								<td>
									{item.name}
								</td>

								<td>
									{item.quantity}
								</td>

								<td>
									{formatCurrency(item.purchasePrice)}
								</td>

								<td>
									{formatCurrency(item.salePrice)}
								</td>

								<td>
									{formatCurrency(item.invoicing)}
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
