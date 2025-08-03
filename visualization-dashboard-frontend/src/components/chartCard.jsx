// src/components/ChartCard.jsx
import React, { useState, useMemo } from 'react';
import FilterDropdown from './filterDropDown';
import BarChart from './barchat';

const ChartCard = ({ title, data, filterKey, valueKey }) => {
  const [filterValue, setFilterValue] = useState('');

  const filteredData = useMemo(() => {
    const filtered = filterValue
      ? data.filter((d) => d[filterKey] === filterValue)
      : data;

    return filtered
      .filter((d) => d[valueKey] !== null)
      .slice(0, 20)
      .map((d, i) => ({
        label: d.topic || d[filterKey] || `Item ${i + 1}`,
        value: d[valueKey],
      }));
  }, [data, filterValue, valueKey, filterKey]);

  const dropdownOptions = Array.from(
    new Set(data.map((d) => d[filterKey]).filter(Boolean))
  );

  return (
    <div className="bg-white p-4 rounded shadow-md mb-6 w-full max-w-2xl">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <FilterDropdown
        label={`Filter by ${filterKey}`}
        options={dropdownOptions}
        selectedValue={filterValue}
        onChange={setFilterValue}
      />
      <BarChart data={filteredData} variable={valueKey} />
    </div>
  );
};

export default ChartCard;
