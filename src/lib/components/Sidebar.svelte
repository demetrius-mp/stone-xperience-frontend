<script lang="ts" context="module">
	import { writable } from 'svelte/store';

	export const sidebarIsOpen = writable(false);
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import { classnames } from '$lib/utils/classnames';
	import type { ComponentType } from 'svelte';
	import IconCashRegister from '~icons/mdi/CashRegister';
	import IconChartLine from '~icons/mdi/ChartLine';
	import IconChat from '~icons/mdi/Chat';
	import IconStore from '~icons/mdi/Store';

	type SidebarItem = {
		name: string;
		icon: ComponentType;
		href: string;
	};

	const items: SidebarItem[] = [
		{
			name: 'Dashboard',
			icon: IconChartLine,
			href: '/dashboard'
		},
		{
			name: 'Estoque',
			icon: IconStore,
			href: '/store'
		},
		{
			name: 'Fluxo de caixa',
			icon: IconCashRegister,
			href: '/cash-register'
		},
		{
			name: 'Pergunte ao Tony',
			icon: IconChat,
			href: '/chat'
		}
	];

	$: checkSidebarItemIsActive = (href: string) => {
		return $page.route.id?.startsWith(href);
	};
</script>

{#if $sidebarIsOpen}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click={() => ($sidebarIsOpen = false)} class="bg-black/30 fixed inset-0 z-30"></div>
{/if}

<aside
	class={classnames(
		'fixed top-0 left-0 z-40 w-64 h-screen pt-[4.25rem] transition-transform sm:translate-x-0 border-r bg-base-100 border-gray-300',
		$sidebarIsOpen && 'transform-none',
		!$sidebarIsOpen && '-translate-x-full'
	)}
>
	<div class="h-full px-2 pb-4 overflow-y-auto bg-base-100">
		<ul class="space-y-2 font-medium">
			{#each items as { name, icon, href }}
				<li>
					<a
						{href}
						class="btn btn-ghost w-full justify-start hover:bg-primary/50"
						class:active={checkSidebarItemIsActive(href)}
					>
						<svelte:component this={icon} class="w-5 h-5 " />
						<span>
							{name}
						</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</aside>

<style lang="postcss">
	.active {
		@apply text-white;
		background-color: #00a868 !important;
	}
</style>
