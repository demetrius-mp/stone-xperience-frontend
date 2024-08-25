<script lang="ts">
	import IconCalendar from '~icons/mdi/Calendar';
	export let data;

	function formatCurrency(value: number) {
		return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
	}
</script>

<svelte:head>
	<title>Stone Xperience - Fluxo de Caixa</title>
</svelte:head>

<div class=" sm:ml-64">
	<div class="mt-[4.5rem] p-4 flex flex-col gap-6">
		<div>
			<h2 class="text-3xl font-extrabold text-primary strong-green">Fluxo de caixa</h2>
		</div>

		<div
			class="flex justify-between rounded-lg p-4 text-white font-bold"
			style="background-color: #00a868;"
		>
			<div>
				<h3>
					Custo total: {formatCurrency(30000)}
				</h3>
			</div>

			<div class="flex items-center gap-1">
				<IconCalendar />
				<span> 24 ago 2024 </span>
			</div>
		</div>

		<div class="flex flex-col gap-2">
			<div class="flex justify-between">
				<h3 class="text-xl font-bold text-primary strong-green">Operacional</h3>

				<button class="btn btn-sm"> + Novo registro </button>
			</div>

			<div class="overflow-x-auto">
				<table class="table table-zebra">
					<thead>
						<tr>
							<th>Tipo</th>
							<th>Nome</th>
							<th>Data de pagamento</th>
							<th>Valor</th>
						</tr>
					</thead>
					<tbody>
						{#each data.items as item}
							<tr>
								<td>
									{item.type}
								</td>

								<td>
									{item.name}
								</td>

								<td>
									<!-- {item.date} -->
									17:48 24/08/2024
								</td>

								<td>
									<!-- {formatCurrency(item.value)} -->
									{formatCurrency(2500)}
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>

		<div class="divider my-0"></div>

		<div class="flex flex-col gap-2">
			<div class="flex justify-between">
				<h3 class="text-xl font-bold text-primary strong-green">Funcionários</h3>

				<button class="btn btn-sm"> + Novo registro </button>
			</div>

			<div class="overflow-x-auto">
				<table class="table table-zebra">
					<thead>
						<tr>
							<th>Tipo</th>
							<th>Nome</th>
							<th>Data de pagamento</th>
							<th>Valor</th>
						</tr>
					</thead>
					<tbody>
						{#each data.employees as employee}
							<tr>
								<td>
									{employee.type}
								</td>

								<td>
									{employee.name}
								</td>

								<td>
									<!-- {item.date} -->
									17:48 24/08/2024
								</td>

								<td>
									<!-- {formatCurrency(item.value)} -->
									{formatCurrency(2500)}
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
