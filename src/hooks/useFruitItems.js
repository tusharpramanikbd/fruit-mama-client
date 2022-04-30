import { useEffect, useState } from 'react'

const useFruitItems = () => {
  const [fruitItems, setFruitItems] = useState([])

  useEffect(() => {
    fetch('fruitData.json')
      .then((res) => res.json())
      .then((data) => setFruitItems(data))
  }, [])
  return [fruitItems, setFruitItems]
}

export default useFruitItems
