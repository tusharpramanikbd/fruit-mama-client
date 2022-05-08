import React from 'react'
import { Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import TitleUnderline from '../../components/TitleUnderline/TitleUnderline'
import { ToastContainer, toast } from 'react-toastify'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import PageTitle from '../../components/PageTitle/PageTitle'
import './AddInventoryItem.css'

const AddInventoryItem = () => {
  const [user] = useAuthState(auth)
  const { register, handleSubmit } = useForm()
  const addInventoryItemOnSubmit = (fruitData, event) => {
    console.log(fruitData)
    fetch('https://young-citadel-59712.herokuapp.com/fruits', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(fruitData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast('Fruit Item Added')
        event.target.reset()
      })
  }
  return (
    <div className='container'>
      <PageTitle title='Add Item' />
      <h2 className='text-center mt-3'>Add Inventory Item</h2>
      <TitleUnderline />
      <div>
        <Form
          className='mx-auto border p-3 p-md-5 rounded shadow mb-3 add-item-form'
          onSubmit={handleSubmit((data, event) =>
            addInventoryItemOnSubmit(data, event)
          )}
        >
          <Form.Group className='mb-3' controlId='formBasicName'>
            <Form.Label>Item Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Name'
              {...register('name')}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPrice'>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type='number'
              placeholder='Price'
              {...register('price')}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicQuantity'>
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type='number'
              placeholder='Quantity'
              {...register('quantity')}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicSupplierName'>
            <Form.Label>Supplier Name</Form.Label>
            <Form.Control
              type='text'
              value={user.displayName}
              contentEditable={false}
              {...register('supplier')}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              value={user.email}
              contentEditable={false}
              {...register('email')}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicImageURL'>
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type='text'
              placeholder='Image URL'
              {...register('image')}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicDescription'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as='textarea'
              rows='3'
              placeholder='Description'
              {...register('desc')}
              required
            />
          </Form.Group>
          <div className='text-center'>
            <button className='inventory-btn' type='submit'>
              Add Item
            </button>
          </div>
        </Form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default AddInventoryItem
