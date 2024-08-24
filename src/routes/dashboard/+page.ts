import type { ChartConfiguration } from 'chart.js';
import type { PageLoad } from './$types';

const colors = [
	'#00a465',
	'#0c5232',
	'#15c574',
	'#61a1f2',
	'#61cff2',
	'#61f284',
	'#61f2e7',
	'#b2f2ed',
	'#ffffff'
];

const d1: ChartConfiguration = {
	type: 'pie',
	data: {
		labels: ['Pão Francês', 'Café', 'Salgado', 'Coca-cola', 'Outros'],
		datasets: [
			{
				label: 'Faturamento anual/item',
				data: [80, 50, 40, 25, 8],
				backgroundColor: [colors[0], colors[1], colors[2], colors[3], colors[6]],
				hoverOffset: 4,
				datalabels: {
					color: 'white',
					font: {
						size: 18
					},
					// See https://chartjs-plugin-datalabels.netlify.app/guide/options.html#option-context
					formatter: (value, ctx) => {
						let sum = 0;
						const dataArr = ctx.chart.data.datasets[0].data;

						dataArr.map((data) => {
							// @ts-expect-error - data is a number
							sum += data;
						});

						const percentage = ((value * 100) / sum).toFixed(2) + '%';
						return percentage;
					},
					align: 'end',
					anchor: 'end'
				}
			}
		]
	},
	options: {
		plugins: {
			legend: {
				position: 'bottom',
				title: {
					display: true,
					padding: 10
				}
			},
			title: {
				display: true,
				text: 'Faturamento anual por item',
				font: {
					size: 24
				},
				padding: {
					bottom: 36
				}
			}
		},
		responsive: true,
		maintainAspectRatio: false
	}
};

const d2: ChartConfiguration = {
	type: 'line',
	data: {
		labels: [
			'Janeiro',
			'Fevereiro',
			'Março',
			'Abril',
			'Maio',
			'Junho',
			'Julho',
			'Agosto',
			'Setembro',
			'Outubro',
			'Novembro',
			'Dezembro'
		],
		datasets: [
			{
				label: 'My First Dataset',
				data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)),
				hoverOffset: 4
			}
		]
	},
	options: {
		borderColor: '#61f284',
		plugins: {
			legend: {
				display: false
			},
			title: {
				display: true,
				text: 'Faturamento anual',
				font: {
					size: 24
				},
				padding: {
					top: 10,
					bottom: 20
				}
			}
		},
		responsive: true,
		maintainAspectRatio: false
	}
};

const d3: ChartConfiguration = {
	type: 'bar',
	data: {
		labels: Array.from({ length: 24 }, (_, i) => i),
		datasets: [
			{
				label: 'Número de vendas',
				data: Array.from({ length: 24 }, () => Math.floor(Math.random() * 100)),
				hoverOffset: 4
			}
		]
	},
	options: {
		backgroundColor: '#61f284',
		color: '#61f284',
		plugins: {
			title: {
				display: true,
				text: 'Número de vendas por hora',
				font: {
					size: 24
				},
				padding: {
					top: 10,
					bottom: 20
				}
			}
		},
		responsive: true,
		maintainAspectRatio: false
	}
};

export const load = (async () => {
	const datasets = {
		d1,
		d2,
		d3
	};

	return {
		datasets
	};
}) satisfies PageLoad;
