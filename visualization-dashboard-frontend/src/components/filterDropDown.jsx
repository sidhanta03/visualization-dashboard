import Select from 'react-select';

const Filters = ({ filters, setFilters, options }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
      <Select
        isMulti
        options={options.region}
        onChange={(selected) =>
          setFilters({ ...filters, region: selected.map(opt => opt.value) })
        }
        placeholder="Select Region"
      />
      <Select
        isMulti
        options={options.topic}
        onChange={(selected) =>
          setFilters({ ...filters, topic: selected.map(opt => opt.value) })
        }
        placeholder="Select Topic"
      />
      <Select
        isMulti
        options={options.sector}
        onChange={(selected) =>
          setFilters({ ...filters, sector: selected.map(opt => opt.value) })
        }
        placeholder="Select Sector"
      />
      <Select
        isMulti
        options={options.pest}
        onChange={(selected) =>
          setFilters({ ...filters, pest: selected.map(opt => opt.value) })
        }
        placeholder="Select PEST"
      />
      <Select
        isMulti
        options={options.source}
        onChange={(selected) =>
          setFilters({ ...filters, source: selected.map(opt => opt.value) })
        }
        placeholder="Select Source"
      />
      <Select
        isMulti
        options={options.end_year}
        onChange={(selected) =>
          setFilters({ ...filters, end_year: selected.map(opt => opt.value) })
        }
        placeholder="Select End Year"
        />
    </div>
  );
};

export default Filters;
