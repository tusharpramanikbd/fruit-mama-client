import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import './Inventory.css'

const Inventory = () => {
  const { id } = useParams()
  const [image, setImage] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [description, setDescription] = useState('')
  const [supplier, setSupplier] = useState('')

  const restockFromSubmitHandler = (event) => {
    event.preventDefault()
  }

  useEffect(() => {
    fetch(`http://localhost:5000/fruits/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name)
        setImage(data.image)
        setPrice(data.price)
        setQuantity(data.quantity)
        setDescription(data.desc)
        setSupplier(data.supplier)
      })
  }, [id])
  return (
    <div className='container section-inventory-details'>
      <div className='inventory-details-container'>
        <img src={image} alt='fruit' className='inventory-image' />
        <h5 className='my-3'>{name}</h5>
        <h6 className='text-start'>Cost: ${price}</h6>
        <h6 className='text-start'>Quantity: {quantity}</h6>
        <h6 className='text-start'>Supplier Name: {supplier}</h6>
        <p className='fruit-item-text text-start'>
          <small>{description}</small>
        </p>
        <button className='inventory-btn'>Delivered</button>
      </div>
      <div>
        <Form onSubmit={restockFromSubmitHandler}>
          <Form.Group className='mb-3'>
            <Form.Label>Restock The Items</Form.Label>
            <Form.Control
              type='number'
              placeholder='Enter Item Number'
              className='w-75 mx-auto'
            />
          </Form.Group>
          <button className='inventory-btn'>Restock</button>
        </Form>
      </div>
    </div>
  )
}

export default Inventory
