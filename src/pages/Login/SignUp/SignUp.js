import React from 'react'
import './SignUp.css'
import SocialLogin from '../SocialLogin/SocialLogin'
import { Button, Form } from 'react-bootstrap'
import TitleUnderline from '../../../components/TitleUnderline/TitleUnderline'

const SignUp = () => {
  return (
    <div className='container'>
      <h2 className='text-center mt-3'>SignUp User</h2>
      <TitleUnderline />
      <div className='signup-container'>
        <div>
          <Form className='border p-5 rounded shadow signup-form'>
            <Form.Group className='mb-3 text-start' controlId='formBasicName'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='name'
                name='name'
                placeholder='Enter Name'
                required
              />
            </Form.Group>
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
            <Form.Group
              className='mb-3 text-start'
              controlId='formBasicCheckbox'
            >
              <Form.Check
                type='checkbox'
                name='terms'
                label='Accept Terms and Conditions'
              />
            </Form.Group>
            {/* {errorElement} */}
            <Button variant='primary' type='submit'>
              SignUp
            </Button>
          </Form>
          <p className='login-toggle'>
            Already have an account? <span>Please SignIn</span>
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

export default SignUp
