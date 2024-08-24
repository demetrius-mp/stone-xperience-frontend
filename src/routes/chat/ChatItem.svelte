<script lang="ts">
	import type { ComponentType } from 'svelte';

	export let icon: ComponentType;
	export let from: string;
	export let time: string;
	export let position: 'left' | 'right';

	$: positionClass = position === 'left' ? 'chat-start' : 'chat-end';
</script>

<div class="chat {positionClass} py-0">
	<div class="chat-image avatar">
		<div class="rounded-full">
			<svelte:component this={icon} class="text-2xl" />
		</div>
	</div>
	<div class="chat-header mb-1 ms-2">
		{from}

		<time class="text-xs opacity-50">
			{time}
		</time>
	</div>
	<div class="chat-bubble whitespace-pre-line" style="max-width: 75%;">
		<slot />
	</div>
</div>
