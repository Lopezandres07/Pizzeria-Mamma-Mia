import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { PizzaContext } from '../context/PizzaProvider'

const Pizza = () => {
  const { id } = useParams()
  const { pizzas } = useContext(PizzaContext)

  const [pizzaDetail, setPizzaDetail] = useState([])
  console.log(pizzaDetail)

  const data = () => {
    const pizzaData = pizzas.find((pizza) => pizza.id === id)
    setPizzaDetail(pizzaData)
  }

  useEffect(() => {
    data()
  }, [])

  return <div>{pizzaDetail}</div>
}

export default Pizza
