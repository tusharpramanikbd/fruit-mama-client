import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom'
import TitleUnderline from '../../../components/TitleUnderline/TitleUnderline'
import auth from '../../../firebase.init'
import SocialLogin from '../SocialLogin/SocialLogin'
import Loading from '../../../components/Loading/Loading'
import './SignIn.css'

const SignIn = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth)
  const navigate = useNavigate()
  const location = useLocation()

  // if location has pathname then go to there otherwise home
  const from = location.state?.from?.pathname || '/'
  let errorElement

  const handleLogin = (event) => {
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value

    signInWithEmailAndPassword(email, password)
  }

  const navigateToSignup = () => {
    navigate('/signup')
  }

  const navigateToForgotPassword = () => {
    navigate('/resetpassword')
  }
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true })
    }
  }, [user, from, navigate])

  if (loading) {
    return <Loading />
  }

  if (error) {
    errorElement = <p className='text-danger'>Error: {error.message}</p>
  }

  return (
    <div className='container'>
      <h2 className='text-center mt-3'>SignIn User</h2>
      <TitleUnderline />
      <div className='login-container'>
        <div>
          <Form
            onSubmit={handleLogin}
            className='border p-5 rounded shadow login-form'
          >
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
            {errorElement}
            <Button variant='primary' type='submit'>
              SignIn
            </Button>
          </Form>
          <p className='signup-toggle'>
            Don't have an account?{' '}
            <span onClick={navigateToSignup}>Please Signup</span>
          </p>
          <p className='reset-password'>
            Forgot Password?{' '}
            <span onClick={navigateToForgotPassword}>Reset Password</span>
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
