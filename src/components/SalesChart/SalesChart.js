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
import Loading from '../Loading/Loading'
import TitleUnderline from '../TitleUnderline/TitleUnderline'
import './SalesChart.css'

const SalesChart = () => {
  const [salesData, setSalesData] = useState([])
  const [isChartLoading, setIsChartLoading] = useState(true)
  useEffect(() => {
    fetch('https://young-citadel-59712.herokuapp.com/sales')
      .then((res) => res.json())
      .then((data) => {
        setSalesData(data)
        setIsChartLoading(false)
      })
  }, [])

  return (
    <div className='container'>
      <h2 className='text-center mt-3'>Our Sales</h2>
      <TitleUnderline />
      <div>
        <h2 className='text-center chart-label'>Yearly Sales</h2>

        {isChartLoading ? (
          <Loading />
        ) : (
          <ResponsiveContainer width='100%' height={400}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray='5 5' />
              <XAxis dataKey='month' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey='sell' stackId='a' fill='#8a2be2' />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  )
}

export default SalesChart
