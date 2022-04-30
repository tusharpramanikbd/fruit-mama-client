import React from 'react'
import { Table } from 'react-bootstrap'
import './ManageInventory.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import useFruitItems from '../../hooks/useFruitItems'

const ManageInventory = () => {
  const [fruitItems] = useFruitItems()

  const trashButtonClickHandler = (id) => {
    console.log(id)
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
