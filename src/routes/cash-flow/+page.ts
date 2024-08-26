import type { PageLoad } from './$types';

export const load = (async () => {
	function createItem(type: string, name: string) {
		return {
			type,
			name,
			date: '',
			value: 1
		};
	}

	const items = [
		createItem('Água e esgoto', 'Águas Guariroba'),
		createItem('Energia elétrica', 'Energisa'),
		createItem('Aluguel', 'Atrium corporate'),
		createItem('Telefone e internet', 'Vivo'),
		createItem('Manutenção', 'Atrium corporate'),
		createItem('Publicidae e Propaganda', 'Agência Marques'),
		createItem('Segurança', 'Atrium corporate'),
		createItem('Higiene e limpeza', 'Atrium corporate'),
		createItem('Impostos', 'ICMS'),
		createItem('Licenças e Alvarás', 'Prefeitura Municipal')
	];

	function createEmployee(type: string, name: string) {
		return {
			type,
			name,
			date: '',
			value: 1
		};
	}

	const employees = [
		createEmployee('Atendente', 'Maria Clara Garcia Alves'),
		createEmployee('Caixa', 'Sérgio Rodrigues Freitas'),
		createEmployee('Gerente', 'João Pedro da Silva'),
		createEmployee('Cozinheiro', 'Ana Maria de Souza'),
		createEmployee('Auxiliar de Cozinha', 'José Carlos de Oliveira'),
		createEmployee('Auxiliar de Limpeza', 'Maria José da Silva'),
		createEmployee('Segurança', 'José Carlos de Oliveira'),
		createEmployee('Auxiliar de Segurança', 'Maria José da Silva')
	];

	return {
		items,
		employees
	};
}) satisfies PageLoad;
