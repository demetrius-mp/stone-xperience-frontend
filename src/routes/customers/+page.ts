import type { PageLoad } from './$types';

export const load = (async () => {
	const customers = [
		{
			id: 1,
			name: 'John Doe',
			numberOfPurchases: 5,
			totalSpent: 100
		}
	];

	return {
		customers
	};
}) satisfies PageLoad;
