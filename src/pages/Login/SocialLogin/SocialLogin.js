import React, { useEffect } from 'react'
import './SocialLogin.css'
import google from '../../../images/social/google.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init'
import { useLocation, useNavigate } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
  const navigate = useNavigate()
  const location = useLocation()
  // if location has pathname then go to there otherwise home
  const from = location.state?.from?.pathname || '/'
  let errorElement, loadingElement

  if (loading) {
    loadingElement = (
      <div className='d-block text-center mt-3'>
        <Spinner animation='border' variant='primary' />
      </div>
    )
  }

  if (error) {
    errorElement = <p className='text-danger mt-2'>Error: {error.message}</p>
  }

  useEffect(() => {
    const getToken = async (email) => {
      const response = await fetch(
        'https://young-citadel-59712.herokuapp.com/signin',
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({ email }),
        }
      )
      const data = await response.json()
      localStorage.setItem('accessToken', data.accessToken)
      navigate(from, { replace: true })
    }
    if (user) {
      getToken(user.user.email)
    }
  }, [user, from, navigate])

  return (
    <>
      <button onClick={() => signInWithGoogle()} className='btn-social shadow'>
        <img src={google} alt='google' /> &nbsp; Signin With Google
      </button>
      {loadingElement}
      {errorElement}
    </>
  )
}

export default SocialLogin
