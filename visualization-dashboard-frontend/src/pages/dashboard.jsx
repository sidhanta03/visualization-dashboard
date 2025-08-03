import { useEffect, useState } from 'react';
import BarChart from '../components/barchat';
import LineChart from '../components/lineChart';
import PieChart from '../components/pieChart';
import BubbleChart from '../components/bubbleChart';
import Filters from '../components/filterDropDown';
import { fetchInsights } from '../services/api';

const Dashboard = () => {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    region: [],
    topic: [],
    sector: [],
    pest: [],
    source: [],
    end_year: [],
  });

  const [filterOptions, setFilterOptions] = useState({
    region: [],
    topic: [],
    sector: [],
    pest: [],
    source: [],
    end_year: [],
  });

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchInsights();
      setAllData(data);
      setFilteredData(data);

      setFilterOptions({
        region: [...new Set(data.map(d => d.region).filter(Boolean))].map(r => ({ value: r, label: r })),
        topic: [...new Set(data.map(d => d.topic).filter(Boolean))].map(t => ({ value: t, label: t })),
        sector: [...new Set(data.map(d => d.sector).filter(Boolean))].map(s => ({ value: s, label: s })),
        pest: [...new Set(data.map(d => d.pestle).filter(Boolean))].map(p => ({ value: p, label: p })),
        source: [...new Set(data.map(d => d.source).filter(Boolean))].map(s => ({ value: s, label: s })),
        end_year: [...new Set(data.map(d => d.end_year).filter(Boolean))].map(e => ({ value: e, label: e })),
      });
    };

    loadData();
  }, []);

  useEffect(() => {
    const result = allData.filter((d) => {
      return (
        (filters.region.length === 0 || filters.region.includes(d.region)) &&
        (filters.topic.length === 0 || filters.topic.includes(d.topic)) &&
        (filters.sector.length === 0 || filters.sector.includes(d.sector)) &&
        (filters.pest.length === 0 || filters.pest.includes(d.pestle)) &&
        (filters.source.length === 0 || filters.source.includes(d.source)) &&
        (filters.end_year.length === 0 || filters.end_year.includes(d.end_year))
      );
    });
    setFilteredData(result);
  }, [filters, allData]);

  // Data for Charts
  const intensityData = filteredData
    .filter(d => d.intensity !== null && d.topic)
    .slice(0, 20)
    .map((d, i) => ({
      label: d.topic || `Data ${i + 1}`,
      value: d.intensity,
    }));

  const likelihoodData = filteredData
    .filter(d => d.likelihood !== null && d.topic)
    .slice(0, 20)
    .map((d, i) => ({
      label: d.topic || `Data ${i + 1}`,
      value: d.likelihood,
    }));

  const relevanceData = filteredData
    .filter(d => d.relevance !== null && d.topic)
    .slice(0, 10)
    .map((d, i) => ({
      label: d.topic || `Data ${i + 1}`,
      value: d.relevance,
    }));

  const bubbleData = filteredData
    .filter(d => d.intensity && d.likelihood && d.relevance)
    .slice(0, 15)
    .map((d, i) => ({
      x: d.likelihood,
      y: d.relevance,
      r: d.intensity / 2, // bubble size
      label: d.topic || `Data ${i + 1}`,
    }));

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Data Visualization Dashboard</h1>
      <Filters filters={filters} setFilters={setFilters} options={filterOptions} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <h2 className="text-lg font-semibold mb-2">Bar Chart - Intensity by Topic</h2>
          <BarChart data={intensityData} variable="intensity" />
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Line Chart - Likelihood by Topic</h2>
          <LineChart data={likelihoodData} />
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Pie Chart - Relevance by Topic</h2>
          <PieChart data={relevanceData} />
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Bubble Chart - Intensity vs Likelihood vs Relevance</h2>
          <BubbleChart data={bubbleData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


