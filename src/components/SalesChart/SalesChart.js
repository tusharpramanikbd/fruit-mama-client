import React, { useEffect, useState } from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import TitleUnderline from '../TitleUnderline/TitleUnderline'
import './SalesChart.css'

const SalesChart = () => {
  const [salesData, setSalesData] = useState([])
  useEffect(() => {
    fetch('https://young-citadel-59712.herokuapp.com/sales')
      .then((res) => res.json())
      .then((data) => setSalesData(data))
  }, [])

  return (
    <div className='container'>
      <h2 className='text-center mt-3'>Our Sales</h2>
      <TitleUnderline />
      <div>
        <h2 className='text-center chart-label'>Yearly Sales</h2>
        <ResponsiveContainer width='100%' height={400}>
          <BarChart data={salesData}>
            <CartesianGrid strokeDasharray='5 5' />
            <XAxis dataKey='month' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='sell' stackId='a' fill='#8884d8' />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default SalesChart
