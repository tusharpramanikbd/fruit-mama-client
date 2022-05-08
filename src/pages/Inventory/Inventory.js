import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import PageTitle from '../../components/PageTitle/PageTitle'
import { ToastContainer, toast } from 'react-toastify'
import TitleUnderline from '../../components/TitleUnderline/TitleUnderline'
import Loading from '../../components/Loading/Loading'
import './Inventory.css'

const Inventory = () => {
  const { id } = useParams()
  const [image, setImage] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [description, setDescription] = useState('')
  const [supplier, setSupplier] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  // Update fruit quantity
  const updateFruitQuantity = (fruit, message) => {
    fetch(`https://young-citadel-59712.herokuapp.com/fruits/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(fruit),
    })
      .then((res) => res.json())
      .then((data) => {
        toast(message)
        setQuantity(fruit.newQuantity)
      })
  }

  // Deliver Item
  const deliverButtonClickHandler = () => {
    if (quantity >= 1) {
      const newQuantity = quantity - 1
      const fruit = { newQuantity }
      updateFruitQuantity(fruit, 'Item delivered.')
    } else {
      toast('You can not deliver this item. Please restock.')
    }
  }

  // Restock Item
  const restockFromSubmitHandler = (event) => {
    event.preventDefault()
    const restockAmount = parseInt(event.target.restock.value)
    if (restockAmount < 1) {
      toast('Restock value can not be zero or negative.')
    } else {
      const newQuantity = quantity + restockAmount
      const fruit = { newQuantity }
      updateFruitQuantity(fruit, 'Item restocked.')
    }
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
        setIsLoading(false)
      })
  }, [id])
  return (
    <div className='container inventory-container'>
      <PageTitle title='Inventory' />
      <h2 className='text-center mt-3'>Inventory Item Details</h2>
      <TitleUnderline />
      {/* Conditional rendering */}
      {isLoading ? (
        <Loading />
      ) : (
        <div className='border p-3 p-md-5 rounded shadow section-inventory-details'>
          <div className='article-a'>
            <img src={image} alt='fruit' className='inventory-image' />
          </div>
          <div className='article-b'>
            <h3 className='my-3 text-center'>{name}</h3>
            <h6 className='text-start'>Id: {id}</h6>
            <h6 className='text-start'>
              Availability:{' '}
              <span className={quantity > 0 ? 'text-success' : 'text-danger'}>
                {quantity > 0 ? 'Available' : 'Sold Out'}
              </span>
            </h6>
            <h6 className='text-start'>Price: ${price}</h6>
            <h6 className='text-start'>Quantity: {quantity}</h6>
            <h6 className='text-start'>Supplier Name: {supplier}</h6>
            <p className='fruit-item-text text-start'>
              <small>{description}</small>
            </p>
            <div className='text-center'>
              <button
                onClick={deliverButtonClickHandler}
                className='inventory-btn'
              >
                Delivered
              </button>
            </div>
          </div>
          <div className='text-center mt-3 article-c'>
            <Form onSubmit={restockFromSubmitHandler}>
              <Form.Group className='mb-3'>
                <Form.Label>
                  <h3>Restock The Items</h3>
                </Form.Label>
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
      )}
      <ToastContainer />
    </div>
  )
}

export default Inventory
