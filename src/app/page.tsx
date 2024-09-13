// @ts-nocheck
"use client";
import { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

function calculateMinuteDifference(startDate: Date, endDate: Date): number {
  // Step 1: Get time values in milliseconds
  const startTimeMs = startDate?.getTime();
  const endTimeMs = endDate?.getTime();

  // Step 2: Calculate the difference in milliseconds
  const differenceMs = endTimeMs - startTimeMs;

  // Step 3: Convert the difference from milliseconds to minutes
  const differenceMinutes = differenceMs / (1000 * 60);

  return differenceMinutes;
}

export default function Home() {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )

  const [utxo, setUtxo] = useState<[{ time: Date, utxoCount: number}]>([{ time: new Date(), utxoCount: 0 }]);

  const chartData = {
    labels: utxo.map(d => d.time.toLocaleTimeString()),
    datasets: [
      {
        label: 'UTXO Count',
        data: utxo.map(d => d.utxoCount),
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  }

  useEffect(() => {
    
    const id = setInterval(() => {
      fetch('/api')
        .then((res) => res.json())
        .then((data) => {
          setUtxo(u => [...u, { time: new Date(), utxoCount: data.data.utxo_count }]);
        })
    }, 5000);

    return () => clearInterval(id);

  }, [])

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'utxoCount'
      }
    },
    scales: {
      y: {
        min: 100000,
        max: 170000,
      }
    }
  }

  console.log(utxo[2]?.utxoCount - utxo[utxo.length - 1]?.utxoCount);

  console.log(calculateMinuteDifference(utxo[2]?.time, utxo[utxo.length - 1]?.time);

  const v  = (utxo[2]?.utxoCount - utxo[utxo.length - 1]?.utxoCount) / calculateMinuteDifference(utxo[2]?.time, utxo[utxo.length - 1]?.time);

  console.log(v);

  return (<>
    <div>预计{(utxo[utxo.length - 1]?.utxoCount / v / 60).toFixed(2)}小时后结束</div>
    <div style={{ width: 1000, height: 1000 }}><Line options={options} data={chartData} /></div>
  </>);
}
