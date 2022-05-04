import React from 'react'
import Banner from '../../components/Banner/Banner'
import FruitInventory from '../../components/FruitInventory/FruitInventory'
import SalesChart from '../../components/SalesChart/SalesChart'
import './Home.css'

const Home = () => {
  return (
    <>
      <Banner />
      <FruitInventory />
      <SalesChart />
    </>
  )
}

export default Home
