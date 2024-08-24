<script lang="ts">
	import { scrollToBottom } from '$lib/actions/scrollToBottom';
	import { stall } from '$lib/utils/stall';
	import { flip } from 'svelte/animate';
	import type { EventHandler } from 'svelte/elements';
	import { fade } from 'svelte/transition';
	import IconAccount from '~icons/mdi/Account';
	import IconRobotExcited from '~icons/mdi/RobotExcited';
	import IconSend from '~icons/mdi/Send';
	import ChatItem from './ChatItem.svelte';

	type Message = {
		from: 'user' | 'ai';
		time: string;
		text: string;
	};

	let messages: Message[] = [];

	function addMessage(message: Omit<Message, 'time'>) {
		messages = [
			...messages,
			{
				...message,
				time: new Date().toLocaleTimeString()
			}
		];
	}

	async function handleSendEmail() {
		addMessage({
			from: 'user',
			text: 'Sim, envie no meu email.'
		});

		await stall(300);

		addMessage({
			from: 'ai',
			text: 'Enviando no seu email. Por favor, aguarde um momento.'
		});

		await stall(1500);

		addMessage({
			from: 'ai',
			text: 'Email enviado com sucesso!'
		});
	}

	let userMessage = '';

	const handleSendUserMessage: EventHandler<SubmitEvent, HTMLFormElement> = async (e) => {
		e.preventDefault();

		if (!userMessage) return;

		addMessage({
			from: 'user',
			text: userMessage
		});

		userMessage = '';

		const responses: Omit<Message, 'time'>[] = [
			{
				from: 'ai',
				text: 'Ok, estou preparando os dados.\nPor favor, aguarde um momento.'
			},
			{
				from: 'ai',
				text: 'Certo, seu relatório está pronto!\n'
			},
			{
				from: 'ai',
				text: 'Relatório (05/08/2024 - 11/08/2024):\n\n- Total de vendas: R$ 1.500,00\n- Total de despesas: R$ 500,00\n- Lucro líquido: R$ 1.000,00'
			},
			{
				from: 'ai',
				text: '#send-email'
			}
		];

		for (const element of responses) {
			await stall(1000);

			addMessage(element);
		}
	};
</script>

<svelte:head>
	<title>Stone Xperience - Chat</title>
</svelte:head>

<div class="sm:ml-64">
	<div class="mt-14">
		<div class="flex justify-center sm:hidden bg-base-200 p-2">
			<span class="text-2xl font-bold"> Stone AI </span>
		</div>

		<div class="flex flex-col gap-4 p-4" use:scrollToBottom={{ list: messages }}>
			{#each messages as { from, time, text }, i (i)}
				<div animate:flip transition:fade>
					{#if from === 'ai'}
						<ChatItem position="left" icon={IconRobotExcited} from="Stone AI" {time}>
							{#if text === '#send-email'}
								<span> Deseja receber o relatório por email? </span>

								<button on:click={handleSendEmail} class="mt-2 btn btn-outline btn-primary w-full">
									Sim, envie no meu email.
								</button>
							{:else}
								{text}
							{/if}
						</ChatItem>
					{:else}
						<ChatItem position="right" icon={IconAccount} from="Francisco" {time}>
							{text}
						</ChatItem>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>

<div class="mt-[5.5rem]" />

<div class="fixed bottom-0 w-full">
	<div>
		<div class="p-4 sm:pl-[17rem] bg-base-200">
			<form class="join w-full" on:submit={handleSendUserMessage}>
				<input
					bind:value={userMessage}
					name="userMessage"
					type="text"
					class="input input-bordered join-item w-full"
					placeholder="Envie uma mensagem"
				/>
				<button type="submit" class="btn btn-primary join-item">
					<IconSend />
				</button>
			</form>
		</div>
	</div>
</div>
