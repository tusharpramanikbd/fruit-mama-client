import React from 'react'
import Banner from '../../components/Banner/Banner'
import ContactUs from '../../components/ContactUs/ContactUs'
import FruitInventory from '../../components/FruitInventory/FruitInventory'
import SalesChart from '../../components/SalesChart/SalesChart'
import './Home.css'

const Home = () => {
  return (
    <>
      <Banner />
      <FruitInventory />
      <SalesChart />
      <ContactUs />
    </>
  )
}

export default Home
