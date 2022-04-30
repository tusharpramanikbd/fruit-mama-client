import React from 'react'
import { useNavigate } from 'react-router-dom'
import './FruitItem.css'

const FruitItem = (props) => {
  const navigate = useNavigate()
  const handleUpdateStock = () => {
    navigate('/signin')
  }
  const { name, image, price, desc, quantity, supplier } = props.fruit

  return (
    <div className='fruit-item-container'>
      <img src={image} alt={name} className='fruit-item-image' />
      <h5 className='my-3'>{name}</h5>
      <h6 className='text-start'>Cost: ${price}</h6>
      <h6 className='text-start'>Quantity: {quantity}</h6>
      <h6 className='text-start'>Supplier Name: {supplier}</h6>
      <p className='fruit-item-text text-start'>
        <small>{desc}</small>
      </p>
      <button onClick={handleUpdateStock} className='fruit-item-btn'>
        Update Stock
      </button>
    </div>
  )
}

export default FruitItem
