import React from 'react'
import FruitItems from '../FruitItems/FruitItems'
import TitleUnderline from '../TitleUnderline/TitleUnderline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import './FruitInventory.css'

const FruitInventory = () => {
  const navigate = useNavigate()
  // On click redirect to manage inventory page
  const manageInventoryButtonClickHandler = () => {
    navigate('/manageinventory')
  }
  return (
    <>
      <h2 className='text-center mt-3'>Fruit Inventory</h2>
      <TitleUnderline />
      <FruitItems />
      <button
        onClick={manageInventoryButtonClickHandler}
        className='container btn-mng-inventory text-end my-3'
      >
        Manage Inventory <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </>
  )
}

export default FruitInventory
