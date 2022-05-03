import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import TitleUnderline from '../../components/TitleUnderline/TitleUnderline'
import './MyItems.css'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'

const MyItems = () => {
  const [user] = useAuthState(auth)
  const email = user.email

  const [fruitItems, setFruitItems] = useState([])

  useEffect(() => {
    const url = `https://young-citadel-59712.herokuapp.com/fruits?email=${email}`
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFruitItems(data)
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
          }
        })
    }
  }

  return (
    <div className='container'>
      <h2 className='text-center mt-3'>My Items</h2>
      <TitleUnderline />
      <Table striped bordered hover>
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
    </div>
  )
}

export default MyItems
