<script lang="ts">
	function formatCurrency(value: number) {
		return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
	}
</script>

<svelte:head>
	<title>StoneXperience - Perfil</title>
</svelte:head>

<div class=" sm:ml-64">
	<div class="mt-[4.5rem] p-4 flex flex-col gap-4">
		<h2 class="text-3xl font-extrabold text-primary strong-green">Perfil</h2>

		<div class="flex gap-4">
			<div class="p-4 bg-dashboard-chart rounded-xl flex">
				<div class="flex flex-col items-center">
					<img alt="Profile" src="/profile.png" class="h-32" />

					<span class="text-white font-bold text-center"> Lourdes Oshiro </span>

					<span class="font-semibold" style="color: #15c574;"> MEI </span>
				</div>

				<div class="divider divider-horizontal divider-white"></div>

				<div class="text-white flex flex-col gap-1 justify-between">
					<span class="underline font-bold text-lg"> Padaria Oshiro </span>

					<span>3 anos</span>

					<span>4 funcionários</span>

					<span>Comércio</span>

					<span>
						Faturamento anual: {formatCurrency(40000)}
					</span>
				</div>
			</div>

			<div class="p-4 bg-dashboard-chart rounded-xl flex flex-col text-white gap-2 justify-between">
				<span class="text-center text-lg font-bold"> Meta de faturamento </span>

				<div
					class="bg-white rounded-xl p-4 text-2xl font-extrabold text-center"
					style="color: #15c574;"
				>
					{formatCurrency(80000)}
				</div>
				<div class="bg-[#d4d4d4] w-full h-6 rounded-xl">
					<div
						class="bg-[#3fe467] w-[33%] h-6 rounded-xl flex items-center justify-end pe-2 text-black"
					>
						33%
					</div>
				</div>
			</div>
		</div>

		<div class="flex flex-col gap-2">
			<h4 class="text-2xl font-bold strong-green">Jornada Stone</h4>

			<div class="flex gap-4 text-white">
				<div class="bg-dashboard-chart w-48 rounded-3xl p-4 flex flex-col gap-2">
					<div class="flex items-center justify-center">
						<img src="/stone-book.png" class="h-36" alt="Livro da Stone" />
					</div>

					<strong> Livro </strong>

					<p class="text-justify">5 segundos - O jeito Stone de servir o cliente</p>
				</div>

				<div class="bg-dashboard-chart w-48 rounded-3xl p-4 flex flex-col gap-2">
					<div class="flex items-center justify-center">
						<img src="/stone-book.png" class="h-36" alt="Livro da Stone" />
					</div>

					<strong> Livro </strong>

					<p class="text-justify">5 segundos - O jeito Stone de servir o cliente</p>
				</div>

				<div class="bg-dashboard-chart w-48 rounded-3xl p-4 flex flex-col gap-2">
					<div class="flex items-center justify-center">
						<img src="/stone-book.png" class="h-36" alt="Livro da Stone" />
					</div>

					<strong> Livro </strong>

					<p class="text-justify">5 segundos - O jeito Stone de servir o cliente</p>
				</div>

				<div class="bg-dashboard-chart w-48 rounded-3xl p-4 flex flex-col gap-2">
					<div class="flex items-center justify-center">
						<img src="/stone-book.png" class="h-36" alt="Livro da Stone" />
					</div>

					<strong> Livro </strong>

					<p class="text-justify">5 segundos - O jeito Stone de servir o cliente</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.divider-white:before,
	.divider-white:after {
		background-color: white;
	}
	.divider-white:before,
	.divider-white:after {
		background-color: white;
	}
</style>
