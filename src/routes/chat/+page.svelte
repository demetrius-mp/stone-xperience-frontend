<script lang="ts">
	import { scrollToBottom } from '$lib/actions/scrollToBottom';
	import { stall } from '$lib/utils/stall';
	import { flip } from 'svelte/animate';
	import type { EventHandler } from 'svelte/elements';
	import { fade } from 'svelte/transition';
	import IconTonyRobot from '~icons/custom-icons/tony-robot';
	import IconAccount from '~icons/mdi/Account';
	import IconSend from '~icons/mdi/Send';
	import ChatItem from './ChatItem.svelte';

	type Message = {
		from: 'user' | 'ai';
		time: string;
		text: string;
	};

	let messages: Message[] = [];

	addMessage({
		from: 'ai',
		text: '#greeting'
	});

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
			text: 'E-mail'
		});

		await stall(300);

		addMessage({
			from: 'ai',
			text: 'Enviando no seu e-mail. Por favor, aguarde um momento.'
		});

		await stall(1500);

		addMessage({
			from: 'ai',
			text: 'E-mail enviado com sucesso!'
		});

		addMessage({
			from: 'ai',
			text: 'Ok, posso te ajudar com mais alguma coisa?'
		});
	}

	let userMessage = '';

	const handleSendUserMessage: EventHandler<SubmitEvent, HTMLFormElement> = async (e) => {
		e.preventDefault();

		addMessage({
			from: 'user',
			text: userMessage
		});

		const lastMessage = messages.at(-2);

		const isEndingConversation =
			['não', 'nao', 'Não'].includes(userMessage) &&
			lastMessage &&
			lastMessage.from === 'ai' &&
			lastMessage.text === 'Ok, posso te ajudar com mais alguma coisa?';

		userMessage = '';

		if (isEndingConversation) {
			addMessage({
				from: 'ai',
				text: 'Ok! Fico feliz em poder ajudar, se tiver mais perguntas ou precisar de alguma coisa é só chamar.'
			});

			return;
		}

		await stall(1000);

		addMessage({
			from: 'ai',
			text: 'Desculpe, estou com dificuldades em entender no momento.'
		});

		await stall(1000);

		addMessage({
			from: 'ai',
			text: '#show-options'
		});
	};

	async function sendSalesReport() {
		addMessage({
			from: 'user',
			text: 'Relatório de faturamento'
		});

		addMessage({
			from: 'ai',
			text: '#choose-sales-report-interval'
		});
	}

	async function sendWeeklySalesReport() {
		addMessage({
			from: 'user',
			text: 'Semanal'
		});

		addMessage({
			from: 'ai',
			text: 'Ok, estou preparando os dados do seu relatório de vendas.\nPor favor, aguarde um momento.'
		});

		const responses: Omit<Message, 'time'>[] = [
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
	}

	async function handleRejectSendEmail() {
		addMessage({
			from: 'user',
			text: 'Não, não desejo receber'
		});

		addMessage({
			from: 'ai',
			text: 'Ok, posso te ajudar com mais alguma coisa?'
		});
	}
</script>

<svelte:head>
	<title>StoneXperience - Chat Inteligente</title>
</svelte:head>

<div class="sm:ml-64">
	<div class="mt-[4.5rem]">
		<div class="flex flex-col gap-4 p-4" use:scrollToBottom={{ list: messages }}>
			{#each messages as { from, time, text }, i (i)}
				<div animate:flip transition:fade>
					{#if from === 'ai'}
						<!-- <ChatItem position="left" icon={IconRobotExcited} from="Tony" {time}> -->
						<ChatItem position="left" icon={IconTonyRobot} from="Tony" {time}>
							{#if text === '#greeting'}
								<span> Olá! Como posso te ajudar hoje? </span>
								<br />
								<span>Escolha uma das opções abaixo:</span>

								<div class="mt-2 flex flex-col gap-2">
									<button on:click={sendSalesReport} class="btn bg-white text-start">
										Relatório de faturamento
									</button>

									<button class="btn bg-white text-start"> Estoque atual </button>

									<button class="btn bg-white text-start"> Fluxo de caixa </button>
								</div>
							{:else if text === '#choose-sales-report-interval'}
								<span>Certo! Escolha um dos períodos abaixo:</span>

								<div class="mt-2 flex flex-col gap-1">
									<button class="btn bg-white text-start"> Diário </button>
									<button on:click={sendWeeklySalesReport} class="btn bg-white text-start">
										Semanal
									</button>
									<button class="btn bg-white text-start"> Mensal </button>
									<button class="btn bg-white text-start"> Anual </button>
								</div>
							{:else if text === '#show-options'}
								<span>Escolha uma das opções abaixo:</span>

								<div class="mt-2 flex flex-col gap-2">
									<button on:click={sendSalesReport} class="btn bg-white text-start">
										Relatório de faturamento
									</button>

									<button class="btn bg-white text-start"> Estoque atual </button>

									<button class="btn bg-white text-start"> Fluxo de caixa </button>
								</div>
							{:else if text === '#send-email'}
								<span> Deseja receber o relatório? </span>

								<div class="mt-2 flex flex-col gap-1">
									<button on:click={handleSendEmail} class="btn bg-white text-start">
										E-mail
									</button>

									<button class="btn bg-white text-start"> WhatsApp </button>

									<button on:click={handleRejectSendEmail} class="btn bg-white text-start">
										Não, não desejo receber
									</button>
								</div>
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
