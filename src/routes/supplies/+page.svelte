<script lang="ts">
	export let data;

	function formatCurrency(value: number) {
		return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
	}
</script>

<svelte:head>
	<title>Stone Xperience - Estoque</title>
</svelte:head>

<div class=" sm:ml-64">
	<div class="mt-[3.5rem] p-4">
		<h2 class="text-3xl font-extrabold text-primary strong-green mb-4">Estoque</h2>

		<div class="overflow-x-auto mb-8">
			<table class="table">
				<thead>
					<tr>
						<th></th>

						<th> Qtd. de itens </th>

						<th> Valor de compra </th>

						<th> Faturamento </th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th> Total </th>

						<td> 4000 </td>

						<td>
							{formatCurrency(3678)}
						</td>

						<td>
							{formatCurrency(5950)}
						</td>
					</tr>
				</tbody>
			</table>
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

<style>
	.table-zebra tbody tr:nth-child(even) {
		--tw-bg-opacity: 0.5;
		background-color: var(--fallback-b2, oklch(var(--b2) / var(--tw-bg-opacity)));
	}
</style>
