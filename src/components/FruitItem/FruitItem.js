import React from 'react'
import { useNavigate } from 'react-router-dom'
import './FruitItem.css'

const FruitItem = (props) => {
  const navigate = useNavigate()
  // On click redirect to inventory page
  const handleUpdateStock = (id) => {
    navigate(`/inventory/${id}`)
  }
  const { _id, name, image, price, desc, quantity, supplier } = props.fruit

  return (
    <div className='card shadow p-2'>
      <img src={image} className='card-img-top fruit-item-image' alt={name} />
      <div className='card-body'>
        <h5 className='card-title text-center'>{name}</h5>
        <h6>Price: ${price}</h6>
        <h6>Quantity: {quantity}</h6>
        <h6>Supplier Name: {supplier}</h6>
        <p>
          <small>{desc}</small>
        </p>
      </div>
      <div className='card-footer bg-transparent border-0'>
        <button
          onClick={() => handleUpdateStock(_id)}
          className='fruit-item-btn'
        >
          Update Stock
        </button>
      </div>
    </div>
  )
}

export default FruitItem
