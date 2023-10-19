import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { PizzaContext } from '../context/PizzaProvider'
import { Card } from 'react-bootstrap'

const Pizza = () => {
  const { id } = useParams()
  const { pizzas } = useContext(PizzaContext)
  console.log(pizzas)

  const [pizzaDetail, setPizzaDetail] = useState({})
  console.log(pizzaDetail)

  const data = () => {
    const pizzaData = pizzas.find((pizza) => pizza.id === id)
    console.log(pizzaData)

    setPizzaDetail(pizzaData)
  }

  useEffect(() => {
    data()
  }, [])

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant='top'
          src={pizzaDetail.img}
        />
        <Card.Body>
          <Card.Title>{pizzaDetail.name}</Card.Title>
          <Card.Text>{pizzaDetail.ingredients}</Card.Text>
          <p>{pizzaDetail.price}</p>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Pizza
