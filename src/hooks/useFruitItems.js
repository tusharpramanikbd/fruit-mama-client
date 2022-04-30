import { useEffect, useState } from 'react'

const useFruitItems = () => {
  const [fruitItems, setFruitItems] = useState([])

  useEffect(() => {
    fetch('https://young-citadel-59712.herokuapp.com/fruits')
      .then((res) => res.json())
      .then((data) => setFruitItems(data))
  }, [])
  return [fruitItems, setFruitItems]
}

export default useFruitItems
