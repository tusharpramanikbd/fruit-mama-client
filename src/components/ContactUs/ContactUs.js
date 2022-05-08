import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { toast, ToastContainer } from 'react-toastify'
import TitleUnderline from '../TitleUnderline/TitleUnderline'
import './ContactUs.css'

const ContactUs = () => {
  const contactFormSubmitHandler = (event) => {
    event.preventDefault()
    const name = event.target.name.value
    const email = event.target.email.value
    const message = event.target.message.value
    const contact = { name, email, message }
    fetch('https://young-citadel-59712.herokuapp.com/contact', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(contact),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        toast('Thank you for your query')
        event.target.reset()
      })
  }
  return (
    <div className='container'>
      <h2 className='text-center mt-3'>Want To Become A Supplier?</h2>
      <TitleUnderline />
      <div>
        <Form
          onSubmit={contactFormSubmitHandler}
          className='was-validated mx-auto border p-3 p-md-5 rounded shadow mb-3 contact-us-form'
        >
          <Form.Group className='mb-3' controlId='formBasicFullName'>
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type='text'
              name='name'
              placeholder='Enter Full Name'
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              name='email'
              placeholder='Enter Email'
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicMessage'>
            <Form.Label>Message</Form.Label>
            <Form.Control
              as='textarea'
              rows='3'
              placeholder='Enter Message'
              name='message'
              required
            />
          </Form.Group>
          <div className='text-center'>
            <Button
              variant='primary'
              type='submit'
              className='me-3 contact-us-button'
            >
              Submit
            </Button>
            <Button
              variant='primary'
              type='reset'
              className='contact-us-button'
            >
              Reset
            </Button>
          </div>
        </Form>
        <ToastContainer />
      </div>
    </div>
  )
}

export default ContactUs
