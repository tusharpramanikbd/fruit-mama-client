import React from 'react'
import { Table } from 'react-bootstrap'
import './ManageInventory.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import useFruitItems from '../../hooks/useFruitItems'
import TitleUnderline from '../../components/TitleUnderline/TitleUnderline'
import { useNavigate } from 'react-router-dom'

const ManageInventory = () => {
  const navigate = useNavigate()
  const [fruitItems, setFruitItems] = useFruitItems()

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

  const addNewItemClickHandler = () => {
    navigate('/addinventoryitem')
  }

  return (
    <div className='container manage-inventory-container'>
      <h2 className='text-center mt-3'>Inventory Items</h2>
      <TitleUnderline />
      <div className='text-end'>
        <button onClick={addNewItemClickHandler} className='btn-add-new-item'>
          Add New Item
        </button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
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
                <td>{fruit.email}</td>
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
