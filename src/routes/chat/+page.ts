import type { PageLoad } from './$types';

export const load = (async () => {
	type Message = {
		from: 'user' | 'ai';
		text: string;
		time: string;
	};

	const aiMessages: Message[] = [
		{
			from: 'ai',
			text: 'Ok, estou preparando os dados.\nPor favor, aguarde um momento.',
			time: '12:45'
		},
		{
			from: 'ai',
			text: 'Certo, seu relatório está pronto!\n',
			time: '12:46'
		},
		{
			from: 'ai',
			text: 'Relatório (05/08/2024 - 11/08/2024):\n\n- Total de vendas: R$ 1.500,00\n- Total de despesas: R$ 500,00\n- Lucro líquido: R$ 1.000,00',
			time: '12:46'
		},
		{
			from: 'ai',
			text: '#send-email',
			time: '12:46'
		}
	];

	return {
		aiMessages
	};
}) satisfies PageLoad;
