import type { Plugin } from 'chart.js';
import Chart, { type ChartConfiguration } from 'chart.js/auto';
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

const meta = 50000;
const faturamentoAtual = 39500;
const restante = meta - faturamentoAtual;

const textCenter: Plugin = {
	id: 'textCenter',
	beforeDraw: function (chart) {
		// @ts-expect-error - This is a custom label
		if (chart.config.type !== 'doughnut') {
			return;
		}
		const width = chart.width,
			height = chart.height,
			ctx = chart.ctx;

		ctx.restore();
		const fontSize = width / 100;
		ctx.font = fontSize + 'em sans-serif';
		ctx.textBaseline = 'middle';
		ctx.fillStyle = colors[0];

		const text = ((faturamentoAtual / meta) * 100).toFixed(1) + '%',
			textX = Math.round((width - ctx.measureText(text).width) / 2),
			textY = height / 2;

		ctx.fillText(text, textX, textY);
		ctx.save();
	}
};

Chart.register(textCenter);

const doughnutConfig: ChartConfiguration = {
	type: 'doughnut',
	data: {
		labels: ['Faturamento Atual', 'Restante'],
		datasets: [
			{
				data: [faturamentoAtual, restante],
				backgroundColor: [colors[5], colors[0]]
			}
		]
	},
	options: {
		// cutout: '75%',
		plugins: {
			title: {
				display: true,
				text: `Meta de Faturamento Anual: ${meta.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
			},
			legend: {
				display: false
			},
			tooltip: {
				callbacks: {
					label: function (tooltipItem) {
						// @ts-expect-error - This is a custom label
						const total = tooltipItem.dataset.data.reduce((acc, curr) => acc + curr, 0);
						const currentValue = tooltipItem.dataset.data[tooltipItem.dataIndex];
						// @ts-expect-error - This is a custom label
						const percentage = ((currentValue / total) * 100).toFixed(2);

						const label = `${(currentValue || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} (${percentage}%)`;
						return label;
					}
				}
			}
		}
	}
};

const lineData = {
	Janeiro: 2567,
	Fevereiro: 3124,
	Março: 4367,
	Abril: 3567,
	Maio: 3564,
	Junho: 4567,
	Julho: 5833,
	Agosto: 3755,
	Setembro: 5500,
	Outubro: 6789,
	Novembro: 4899,
	Dezembro: 5439
};

const lineConfig: ChartConfiguration = {
	type: 'line',
	data: {
		labels: Object.keys(lineData),
		datasets: [
			{
				data: Object.values(lineData),
				backgroundColor: colors[0],
				borderColor: colors[5]
			}
		]
	},
	options: {
		plugins: {
			title: {
				display: true,
				text: 'Faturamento por Mês'
			},
			legend: {
				display: false
			}
		},
		scales: {
			x: {
				title: {
					display: true,
					text: 'Mês'
				}
			},
			y: {
				title: {
					display: true,
					text: 'Vendas'
				},
				beginAtZero: true
			}
		}
	}
};

const pieData = {
	'Pão Francês': 80,
	Café: 50,
	Salgado: 40,
	'Coca-cola': 25,
	Leite: 20,
	Sonho: 10,
	Outros: 8
};

const pieConfig: ChartConfiguration = {
	type: 'pie',
	data: {
		labels: Object.keys(pieData),
		datasets: [
			{
				data: Object.values(pieData),
				backgroundColor: [
					colors[0],
					colors[1],
					colors[2],
					colors[3],
					colors[4],
					colors[5],
					colors[6]
				],
				hoverOffset: 4
			}
		]
	},
	options: {
		plugins: {
			title: {
				display: true,
				text: 'Produtos mais vendidos'
			},
			legend: {
				display: true
			}
		}
	}
};

const salesData = {
	'5:00': 5,
	'6:00': 32,
	'7:00': 45,
	'8:00': 68,
	'9:00': 92,
	'10:00': 78,
	'11:00': 68,
	'12:00': 102,
	'13:00': 110,
	'14:00': 152,
	'15:00': 176,
	'16:00': 151,
	'17:00': 130,
	'18:00': 78,
	'19:00': 23,
	'20:00': 12,
	'21:00': 5
};

const barConfig: ChartConfiguration = {
	type: 'bar',
	data: {
		datasets: [
			{
				// @ts-expect-error - This is a custom label
				data: salesData,
				backgroundColor: colors[5],
				borderColor: colors[0],
				borderWidth: 2
			}
		]
	},
	options: {
		plugins: {
			title: {
				display: true,
				text: 'Vendas por horário'
			},
			legend: {
				display: false
			}
		},
		scales: {
			y: {
				title: {
					display: true,
					text: 'Vendas'
				},
				beginAtZero: true
			},
			x: {
				title: {
					display: true,
					text: 'Horário'
				}
			}
		}
	}
};

export const load = (async () => {
	const datasets = {
		metaDeFaturamento: doughnutConfig,
		faturamentoPorMes: lineConfig,
		produtosMaisVendidos: pieConfig,
		vendasPorHorario: barConfig
	};

	return {
		datasets
	};
}) satisfies PageLoad;
