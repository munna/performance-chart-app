import React from 'react';
import PerformanceChart from 'performance-chart';
import logo from './logo.svg';
import './App.css';

function App() {
  const data=[
    {name: "BOTTOM", value: 20, color: "#FF0000"},
    {name: "Neutral", value: 20, color: "#FFA500"},
    {name: "AVERAGE", value: 20, color: "#FFFF00"},
    {name: "No comment", value: 20, color: "#7CFC00"},
    {name: "TOP", value: 20, color: "#008000"}
  ];
  return (
    <div className="App">
      <PerformanceChart size="300" current="10" data={data}></PerformanceChart>
      <PerformanceChart size="300" current="56" data={data}></PerformanceChart>
      <PerformanceChart size="300" current="76" data={data}></PerformanceChart>
      <PerformanceChart size="300" current="32" data={data}></PerformanceChart>
      <PerformanceChart size="300" current="88" data={data}></PerformanceChart>
      <PerformanceChart size="300" current="96" data={data}></PerformanceChart>
      <PerformanceChart size="300" current="99" data={data}></PerformanceChart>
      <PerformanceChart size="300" current="100" data={data}></PerformanceChart>
      <PerformanceChart size="300" current="10" data={data}></PerformanceChart>
      <PerformanceChart size="300" current="56" data={data}></PerformanceChart>
      <PerformanceChart size="300" current="76" data={data}></PerformanceChart>
      <PerformanceChart size="300" current="32" data={data}></PerformanceChart>
      <PerformanceChart size="300" current="88" data={data}></PerformanceChart>
      <PerformanceChart size="300" current="96" data={data}></PerformanceChart>
      <PerformanceChart size="300" current="99" data={data}></PerformanceChart>
      <PerformanceChart size="300" current="100" data={data}></PerformanceChart>
      <PerformanceChart size="300" current="10" data={data}></PerformanceChart>
      <PerformanceChart size="300" current="56" data={data}></PerformanceChart>
      <PerformanceChart size="300" current="76" data={data}></PerformanceChart>
      <PerformanceChart size="300" current="32" data={data}></PerformanceChart>
      <PerformanceChart size="300" current="88" data={data}></PerformanceChart>
      <PerformanceChart size="300" current="96" data={data}></PerformanceChart>
      <PerformanceChart size="300" current="99" data={data}></PerformanceChart>
      <PerformanceChart size="300" current="100" data={data}></PerformanceChart>
    </div>
  );
}

export default App;
