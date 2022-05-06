import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import PageTitle from '../../components/PageTitle/PageTitle'
import './Inventory.css'

const Inventory = () => {
  const { id } = useParams()
  const [image, setImage] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [description, setDescription] = useState('')
  const [supplier, setSupplier] = useState('')
  const navigate = useNavigate()

  const updateFruitQuantity = (fruit) => {
    fetch(`https://young-citadel-59712.herokuapp.com/fruits/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(fruit),
    })
      .then((res) => res.json())
      .then((data) => {
        setQuantity(fruit.newQuantity)
      })
  }

  const deliverButtonClickHandler = () => {
    const newQuantity = quantity - 1
    const fruit = { newQuantity }
    updateFruitQuantity(fruit)
  }

  const restockFromSubmitHandler = (event) => {
    event.preventDefault()
    const restockAmount = parseInt(event.target.restock.value)
    const newQuantity = quantity + restockAmount
    const fruit = { newQuantity }
    updateFruitQuantity(fruit)
    event.target.reset()
  }

  const manageInventoryButtonClickHandler = () => {
    navigate('/manageinventory')
  }

  useEffect(() => {
    fetch(`https://young-citadel-59712.herokuapp.com/fruits/${id}`)
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
      <PageTitle title='Inventory' />
      <div className='inventory-details-container'>
        <img src={image} alt='fruit' className='inventory-image' />
        <h5 className='my-3'>{name}</h5>
        <h6 className='text-start'>Id: {id}</h6>
        <h6 className='text-start'>Price: ${price}</h6>
        <h6 className='text-start'>Quantity: {quantity}</h6>
        <h6 className='text-start'>Supplier Name: {supplier}</h6>
        <p className='fruit-item-text text-start'>
          <small>{description}</small>
        </p>
        <button onClick={deliverButtonClickHandler} className='inventory-btn'>
          Delivered
        </button>
      </div>
      <div>
        <Form onSubmit={restockFromSubmitHandler}>
          <Form.Group className='mb-3'>
            <Form.Label>Restock The Items</Form.Label>
            <Form.Control
              type='number'
              name='restock'
              placeholder='Enter Item Number'
              className='w-75 mx-auto'
            />
          </Form.Group>
          <button className='inventory-btn'>Restock</button>
        </Form>
        <button
          onClick={manageInventoryButtonClickHandler}
          className='inventory-btn mt-3'
        >
          Manage Inventory
        </button>
      </div>
    </div>
  )
}

export default Inventory
