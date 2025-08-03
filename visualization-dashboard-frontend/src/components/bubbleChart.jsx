// components/BubbleChart.js
import { Bubble } from 'react-chartjs-2';
import { Chart as ChartJS, BubbleController, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(BubbleController, LinearScale, PointElement, Tooltip, Legend);

const BubbleChart = ({ data }) => {
  const chartData = {
    datasets: [
      {
        label: 'Topic Bubbles',
        data: data.map(d => ({
          x: d.x,
          y: d.y,
          r: d.r,
        })),
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      }
    ]
  };

  const options = {
    scales: {
      x: {
        title: { display: true, text: 'Likelihood' }
      },
      y: {
        title: { display: true, text: 'Relevance' }
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (ctx) => `X: ${ctx.raw.x}, Y: ${ctx.raw.y}, R: ${ctx.raw.r}`
        }
      }
    },
    responsive: true,
  };

  return <Bubble data={chartData} options={options} />;
};

export default BubbleChart;
