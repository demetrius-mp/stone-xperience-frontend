<script lang="ts">
	import IconAccountCog from '~icons/mdi/AccountCog';
	import IconChartLine from '~icons/mdi/ChartLine';
	import IconLogout from '~icons/mdi/Logout';

	import { sidebarIsOpen } from '$lib/components/Sidebar.svelte';
	import Dropdown from '$lib/components/UI/Dropdown.svelte';
	import { slide } from 'svelte/transition';
	import IconAccount from '~icons/mdi/Account';
	import IconMenu from '~icons/mdi/Menu';
</script>

<nav
	class="fixed top-0 z-50 w-full border-b bg-base-200 dark:border-gray-700"
	style="padding-right: var(--scrollbar-width, 0px);"
>
	<div class="px-3 py-3">
		<div class="flex items-center justify-between">
			<div class="flex items-center justify-start gap-1">
				<button
					on:click={() => ($sidebarIsOpen = !$sidebarIsOpen)}
					class="btn btn-ghost btn-square sm:hidden btn-sm"
				>
					<span class="sr-only">Open sidebar</span>
					<IconMenu class="h-6 w-6" />
				</button>
				<a
					href="/"
					class="flex md:me-24 btn btn-ghost text-xl sm:text-2xl whitespace-nowrap btn-sm"
				>
					Stone Xperience
				</a>
			</div>
			<div class="ms-3">
				<Dropdown
					let:item
					let:melt
					let:menu
					let:open
					let:overlay
					let:trigger
					props={{
						forceVisible: true,
						loop: true,
						positioning: {
							placement: 'bottom-end'
						}
					}}
				>
					<button use:melt={trigger} class="btn btn-circle btn-ghost btn-sm">
						<IconAccount class="text-lg" />
					</button>

					{#if open}
						<div use:melt={overlay} class="fixed inset-0 z-[60]" />

						<div
							use:melt={menu}
							class="z-[60] flex w-48 flex-col gap-1 rounded-box bg-base-300 p-2"
							transition:slide={{ duration: 100 }}
						>
							<a
								href="/dashboard"
								class="flex w-full items-center gap-2 rounded-lg p-2 data-[highlighted]:bg-base-content/5"
								use:melt={item}
							>
								<IconChartLine />
								Dashboard
							</a>

							<button
								class="flex w-full items-center gap-2 rounded-lg p-2 data-[highlighted]:bg-base-content/5"
								use:melt={item}
							>
								<IconAccountCog />
								Minha conta
							</button>

							<button
								class="flex w-full items-center gap-2 rounded-lg p-2 text-error data-[highlighted]:bg-base-content/5"
								use:melt={item}
							>
								<IconLogout />
								Sair
							</button>
						</div>
					{/if}
				</Dropdown>
			</div>
		</div>
	</div>
</nav>
