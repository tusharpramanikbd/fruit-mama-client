import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import TitleUnderline from '../../components/TitleUnderline/TitleUnderline'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import Loading from '../../components/Loading/Loading'
import { ToastContainer, toast } from 'react-toastify'
import PageTitle from '../../components/PageTitle/PageTitle'
import './MyItems.css'

const MyItems = () => {
  const [user] = useAuthState(auth)
  const email = user.email

  const [fruitItems, setFruitItems] = useState([])
  const [isMyItemLoading, setIsMyItemLoading] = useState(true)

  useEffect(() => {
    const url = `https://young-citadel-59712.herokuapp.com/fruitsbyemail?email=${email}`
    fetch(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setFruitItems(data)
        setIsMyItemLoading(false)
      })
  }, [email])

  const trashButtonClickHandler = (id) => {
    const proceed = window.confirm('Are you sure want to delete?')
    if (proceed) {
      const url = `https://young-citadel-59712.herokuapp.com/fruits/${id}`
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const filteredFruitItems = fruitItems.filter(
              (fruit) => fruit._id !== id
            )
            setFruitItems(filteredFruitItems)
            toast('Fruit item is deleted')
          }
        })
    }
  }

  return (
    <div className='container myItems-container'>
      <PageTitle title='My Items' />
      <h2 className='text-center mt-3'>My Items</h2>
      <TitleUnderline />
      {isMyItemLoading ? (
        <Loading />
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {fruitItems.map((fruit) => {
              return (
                <tr key={fruit._id}>
                  <td>{fruit.name}</td>
                  <td>{fruit.price}</td>
                  <td>{fruit.quantity}</td>
                  <td className='text-center'>
                    <FontAwesomeIcon
                      onClick={() => trashButtonClickHandler(fruit._id)}
                      className='btn-trash'
                      icon={faTrash}
                    />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      )}
      <ToastContainer />
    </div>
  )
}

export default MyItems
