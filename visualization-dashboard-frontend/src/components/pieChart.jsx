// components/PieChart.js
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  const chartData = {
    labels: data.map(d => d.label),
    datasets: [
      {
        label: 'Relevance',
        data: data.map(d => d.value),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
          '#E7E9ED',
          '#36A2EB'
        ]
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'right' }
    }
  };

  return <Pie data={chartData} options={options} />;
};

export default PieChart;
