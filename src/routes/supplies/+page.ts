import type { PageLoad } from './$types';

export const load = (async () => {
	const items = [
		{
			id: 1,
			name: 'Salgados',
			quantity: 500,
			purchasePrice: 2,
			salePrice: 5,
			invoicing: 2500
		},
		{
			id: 2,
			name: 'Leite',
			quantity: 200,
			purchasePrice: 2.5,
			salePrice: 6,
			invoicing: 1200
		},
		{
			id: 3,
			name: 'Coca-Cola 2L',
			quantity: 700,
			purchasePrice: 4.5,
			salePrice: 8.5,
			invoicing: 5950
		},
		{
			id: 4,
			name: 'Café',
			quantity: 150,
			purchasePrice: 4,
			salePrice: 7,
			invoicing: 1050
		},
		{
			id: 5,
			name: 'Leite condensado',
			quantity: 123,
			purchasePrice: 4.27,
			salePrice: 7.9,
			invoicing: 1050
		},
		{
			id: 6,
			name: 'Creme de leite',
			quantity: 154,
			purchasePrice: 3.87,
			salePrice: 9.86,
			invoicing: 1050
		},
		{
			id: 7,
			name: 'Suco',
			quantity: 146,
			purchasePrice: 7.86,
			salePrice: 12.5,
			invoicing: 1050
		}
	];

	const total = {
		numberOfItems: 4000,
		totalPurchasePrice: 4000,
		totalInvoicing: 4000
	};

	return {
		items,
		total
	};
}) satisfies PageLoad;
