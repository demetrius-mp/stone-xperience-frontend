import type { PageLoad } from './$types';

export const load = (async () => {
	const customers = [
		{
			id: 1,
			name: 'John Doe',
			numberOfPurchases: 5,
			totalSpent: 100
		},
		{
			id: 2,
			name: 'Jane Doe',
			numberOfPurchases: 3,
			totalSpent: 50
		},
		{
			id: 3,
			name: 'Alice',
			numberOfPurchases: 2,
			totalSpent: 30
		},
		{
			id: 4,
			name: 'Bob',
			numberOfPurchases: 1,
			totalSpent: 20
		},
		{
			id: 5,
			name: 'Charlie',
			numberOfPurchases: 4,
			totalSpent: 80
		},
		{
			id: 6,
			name: 'David',
			numberOfPurchases: 6,
			totalSpent: 120
		},
		{
			id: 7,
			name: 'Eve',
			numberOfPurchases: 7,
			totalSpent: 140
		}
	];

	return {
		customers
	};
}) satisfies PageLoad;
