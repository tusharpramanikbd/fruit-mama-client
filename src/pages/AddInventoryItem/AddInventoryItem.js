import React from 'react'
import { Button, Form } from 'react-bootstrap'
import TitleUnderline from '../../components/TitleUnderline/TitleUnderline'
import './AddInventoryItem.css'

const AddInventoryItem = () => {
  return (
    <div className='container'>
      <h2 className='text-center mt-3'>Add Inventory Item</h2>
      <TitleUnderline />
      <div>
        <Form className='w-50 mx-auto border p-3 rounded shadow mb-3'>
          <Form.Group className='mb-3' controlId='formBasicName'>
            <Form.Label>Item Name</Form.Label>
            <Form.Control type='text' name='name' placeholder='Enter Name' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPrice'>
            <Form.Label>Price</Form.Label>
            <Form.Control type='number' placeholder='Price' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicQuantity'>
            <Form.Label>Quantity</Form.Label>
            <Form.Control type='number' placeholder='Quantity' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicSupplierName'>
            <Form.Label>Supplier Name</Form.Label>
            <Form.Control type='text' placeholder='Supplier Name' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicSupplierEmail'>
            <Form.Label>Supplier Email</Form.Label>
            <Form.Control type='email' placeholder='Supplier Email' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicImageURL'>
            <Form.Label>Image URL</Form.Label>
            <Form.Control type='text' placeholder='Image URL' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPrice'>
            <Form.Label>Description</Form.Label>
            <Form.Control as='textarea' rows='3' placeholder='Description' />
          </Form.Group>
          <div className='text-center'>
            <Button variant='primary' type='submit'>
              Add Item
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default AddInventoryItem
