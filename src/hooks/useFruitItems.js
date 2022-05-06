import { useEffect, useState } from 'react'

const useFruitItems = () => {
  const [fruitItems, setFruitItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://young-citadel-59712.herokuapp.com/fruits')
      .then((res) => res.json())
      .then((data) => {
        setFruitItems(data)
        setIsLoading(false)
      })
  }, [])
  return [fruitItems, setFruitItems, isLoading]
}

export default useFruitItems
