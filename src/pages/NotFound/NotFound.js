import React from 'react'
import PageTitle from '../../components/PageTitle/PageTitle'
import './NotFound.css'

const NotFound = () => {
  return (
    <div className='container not-found-container'>
      <PageTitle title='Not Found' />
      <h1>This is not found page</h1>
    </div>
  )
}

export default NotFound
