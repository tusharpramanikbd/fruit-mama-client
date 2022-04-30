import React from 'react'
import FruitItems from '../FruitItems/FruitItems'
import TitleUnderline from '../TitleUnderline/TitleUnderline'
import './FruitInventory.css'

const FruitInventory = () => {
  return (
    <>
      <h2 className='text-center mt-3'>Fruit Inventory</h2>
      <TitleUnderline />
      <FruitItems />
    </>
  )
}

export default FruitInventory
