import React from 'react'
import { Button, Form } from 'react-bootstrap'
import TitleUnderline from '../../../components/TitleUnderline/TitleUnderline'
import SocialLogin from '../SocialLogin/SocialLogin'
import './SignIn.css'

const SignIn = () => {
  return (
    <div className='container'>
      <h2 className='text-center mt-3'>SignIn User</h2>
      <TitleUnderline />
      <div className='login-container'>
        <div>
          <Form className='border p-5 rounded shadow login-form'>
            <Form.Group className='mb-3 text-start' controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                name='email'
                placeholder='Enter email'
                required
              />
            </Form.Group>
            <Form.Group
              className='mb-3 text-start'
              controlId='formBasicPassword'
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                name='password'
                placeholder='Password'
                required
              />
            </Form.Group>
            {/* {errorElement} */}
            <Button variant='primary' type='submit'>
              SignIn
            </Button>
          </Form>
          <p className='signup-toggle'>
            Don't have an account? <span>Please Signup</span>
          </p>
          <p className='reset-password'>
            Forgot Password? <span>Reset Password</span>
          </p>
        </div>
        <div className='my-3'>
          <h2>Or</h2>
        </div>
        <div className='mb-3'>
          <SocialLogin />
        </div>
      </div>
    </div>
  )
}

export default SignIn
