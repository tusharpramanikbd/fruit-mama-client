import React from 'react'
import './SocialLogin.css'
import google from '../../../images/social/google.png'

const SocialLogin = () => {
  return (
    <>
      <button className='btn-social shadow'>
        <img src={google} alt='google' /> &nbsp; Signin With Google
      </button>
      {/* {errorElement} */}
    </>
  )
}

export default SocialLogin
