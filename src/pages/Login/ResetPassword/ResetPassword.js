import React from 'react'
import { Button, Form } from 'react-bootstrap'
import TitleUnderline from '../../../components/TitleUnderline/TitleUnderline'
import './ResetPassword.css'

const ResetPassword = () => {
  return (
    <div>
      <div className='container resetpassword-container'>
        <h2 className='text-center mt-3'>Reset Password</h2>
        <TitleUnderline />
        <div>
          <Form className='border p-5 rounded shadow resetpassword-form'>
            <Form.Group className='mb-3 text-start' controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                name='email'
                placeholder='Enter email'
                required
              />
            </Form.Group>
            {/* {errorElement} */}
            <Button variant='primary' type='submit'>
              Reset Password
            </Button>
          </Form>
          {/* <ToastContainer /> */}
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
