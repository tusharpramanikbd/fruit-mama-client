import React from 'react'
import { Table } from 'react-bootstrap'
import './ManageInventory.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import useFruitItems from '../../hooks/useFruitItems'

const ManageInventory = () => {
  const [fruitItems, setFruitItems] = useFruitItems()

  const trashButtonClickHandler = (id) => {
    const proceed = window.confirm('Are you sure want to delete?')
    if (proceed) {
      const url = `http://localhost:5000/fruits/${id}`
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

export default ManageInventory
