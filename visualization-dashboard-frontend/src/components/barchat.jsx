// components/BarChart.js

import * as d3 from 'd3';
import { useEffect, useRef } from 'react';

const BarChart = ({ data, variable }) => {
  const ref = useRef();

  useEffect(() => {
    // Clear previous chart
    d3.select(ref.current).selectAll("*").remove();

    const svg = d3.select(ref.current)
      .attr("width", 600)
      .attr("height", 400);

    const margin = { top: 20, right: 30, bottom: 40, left: 50 };
    const width = +svg.attr("width") - margin.left - margin.right;
    const height = +svg.attr("height") - margin.top - margin.bottom;

    const chart = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3.scaleBand()
      .domain(data.map(d => d.label))
      .range([0, width])
      .padding(0.2);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value) || 10])
      .nice()
      .range([height, 0]);

    chart.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x));

    chart.append("g")
      .call(d3.axisLeft(y));

    chart.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", d => x(d.label))
      .attr("y", d => y(d.value))
      .attr("width", x.bandwidth())
      .attr("height", d => height - y(d.value))
      .attr("fill", "steelblue");
  }, [data]);

  return <svg ref={ref}></svg>;
};

export default BarChart;
