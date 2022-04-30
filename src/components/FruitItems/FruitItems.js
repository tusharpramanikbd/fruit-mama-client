import React from 'react'
import useFruitItems from '../../hooks/useFruitItems'
import FruitItem from '../FruitItem/FruitItem'
import './FruitItems.css'

const FruitItems = () => {
  const [fruitItems] = useFruitItems()
  return (
    <div id='inventory'>
      <section className='container section-fruit-items'>
        {fruitItems.map((fruit) => {
          return <FruitItem key={fruit.id} fruit={fruit} />
        })}
      </section>
    </div>
  )
}

export default FruitItems
