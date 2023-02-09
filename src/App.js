import logo from './logo.svg';
import './App.css';
import BarChart from './component/BarChart';
import { useEffect, useState } from 'react';
import { orderList } from './const/orderData';

import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
Chart.register(CategoryScale);



function App() {

  // const labels = ['January', 'February', 'March', 'April']
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: '',
        data: [],
        backgroundColor: '',
      }
    ]
  })    

  useEffect(() => {
    setChartData({
      labels: orderList.map(data => data.date),
      datasets: [
      {
        label: 'Data Penjualan Bulan January',
        data: orderList.map((data) => data.totalOrder),
        backgroundColor: 'rgba(255,99,132,0.5)'
      }
    ]
    })
  }, [])
  

  return (
    <div className="App">
      <BarChart chartData={chartData}/>
    </div>
  );

  }
export default App;
