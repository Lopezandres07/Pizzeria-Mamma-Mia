import { useContext } from 'react'
import { PizzaContext } from '../context/PizzaProvider'
import { Container } from 'react-bootstrap'
import PizzasCard from './PizzasCard'

const PizzasList = () => {
  const { pizzas } = useContext(PizzaContext)
  console.log(pizzas)

  return (
    <Container>
      {pizzas.map((pizza) => {
        return (
          <PizzasCard
            key={pizza.id}
            id={pizza.id}
            img={pizza.img}
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            description={pizza.desc}
          />
        )
      })}
    </Container>
  )
}

export default PizzasList
