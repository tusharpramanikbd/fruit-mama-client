import React from 'react'
import { Button, Form } from 'react-bootstrap'
import TitleUnderline from '../../../components/TitleUnderline/TitleUnderline'
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init'
import { ToastContainer, toast } from 'react-toastify'
import './ResetPassword.css'
import PageTitle from '../../../components/PageTitle/PageTitle'

const ResetPassword = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth)

  let errorElement

  if (error) {
    errorElement = <p className='text-danger'>Error: {error.message}</p>
  }

  const handleForgotPassword = async (event) => {
    event.preventDefault()
    const email = event.target.email.value
    if (email) {
      // if email is present then sent password reset email and then toast
      await sendPasswordResetEmail(email)
      toast('Sent email')
    } else {
      toast('Please enter your email address')
    }
  }

  return (
    <div>
      <div className='container resetpassword-container'>
        <PageTitle title='Reset Password' />
        <h2 className='text-center mt-3'>Reset Password</h2>
        <TitleUnderline />
        <div>
          <Form
            onSubmit={handleForgotPassword}
            className='border p-5 rounded shadow resetpassword-form'
          >
            <Form.Group className='mb-3 text-start' controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                name='email'
                placeholder='Enter email'
              />
            </Form.Group>
            {errorElement}
            <Button variant='primary' type='submit'>
              Reset Password
            </Button>
          </Form>
          <ToastContainer />
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
