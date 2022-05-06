import React from 'react'
import Banner from '../../components/Banner/Banner'
import ContactUs from '../../components/ContactUs/ContactUs'
import FruitInventory from '../../components/FruitInventory/FruitInventory'
import SalesChart from '../../components/SalesChart/SalesChart'
import PageTitle from '../../components/PageTitle/PageTitle'
import './Home.css'

const Home = () => {
  return (
    <>
      <PageTitle title='Home' />
      <Banner />
      <FruitInventory />
      <SalesChart />
      <ContactUs />
    </>
  )
}

export default Home
