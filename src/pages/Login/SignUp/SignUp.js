import React, { useState } from 'react'
import SocialLogin from '../SocialLogin/SocialLogin'
import { Button, Form } from 'react-bootstrap'
import TitleUnderline from '../../../components/TitleUnderline/TitleUnderline'
import { useNavigate } from 'react-router-dom'
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init'
import { signOut } from 'firebase/auth'
import Loading from '../../../components/Loading/Loading'
import PageTitle from '../../../components/PageTitle/PageTitle'
import './SignUp.css'

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, userError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })

  const [updateProfile, updating, updateError] = useUpdateProfile(auth)

  const [agree, setAgree] = useState(false)

  const navigate = useNavigate()

  let errorElement

  const handleRegister = async (event) => {
    event.preventDefault()
    const name = event.target.name.value
    const email = event.target.email.value
    const password = event.target.password.value

    // first create user with email and password and wait for return
    await createUserWithEmailAndPassword(email, password)
    // Then update profile with name and wait for return
    await updateProfile({ displayName: name })
    // Then sign out so that after signup user does not get automatically signed in.
    signOut(auth)
    navigate('/signin')
  }

  const navigateToLogin = () => {
    navigate('/signin')
  }

  if (loading || updating) {
    return <Loading />
  }

  if (userError || updateError) {
    errorElement = (
      <p className='text-danger'>
        Error: {userError?.message} {updateError?.message}
      </p>
    )
  }

  return (
    <div className='container'>
      <PageTitle title='SignUp' />
      <h2 className='text-center mt-3'>SignUp User</h2>
      <TitleUnderline />
      <div className='signup-container'>
        <div>
          <Form
            onSubmit={handleRegister}
            className='border p-3 p-md-5 rounded shadow signup-form'
          >
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
                onClick={() => setAgree(!agree)}
                type='checkbox'
                name='terms'
                label='Accept Terms and Conditions'
              />
            </Form.Group>
            {errorElement}
            <Button
              disabled={!agree}
              className='inventory-btn-signup'
              type='submit'
            >
              SignUp
            </Button>
          </Form>
          <p className='login-toggle'>
            Already have an account?{' '}
            <span onClick={navigateToLogin}>Please SignIn</span>
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
