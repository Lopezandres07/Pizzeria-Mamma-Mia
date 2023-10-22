import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router'
import { PizzaContext } from '../context/PizzaProvider'
import { Button, Card } from 'react-bootstrap'

const Pizza = () => {
  const { id } = useParams()
  console.log(id)

  const { allPizzas, addToCart } = useContext(PizzaContext)
  console.log(allPizzas)

  const navigate = useNavigate()

  const pizzaDetail = allPizzas.find((pizza) => pizza.id == id)
  console.log(pizzaDetail)

  return (
    <div className='p-2 d-flex justify-content-center mt-2'>
      <Card
        className='bg-dark text-white'
        style={{ width: '35rem' }}
      >
        <Card.Img
          src={pizzaDetail.img}
          alt='Card image'
          className='opacity-25'
        />
        <Card.ImgOverlay>
          <Card.Title>{pizzaDetail.name}</Card.Title>
          <Card.Text>{pizzaDetail.desc}</Card.Text>
          <Card.Text className='list-unstyled'>
            {pizzaDetail.ingredients.map((ingredient, id) => (
              <li key={id}>🍕 {ingredient}</li>
            ))}
          </Card.Text>
          <Button
            variant='success'
            onClick={() => {
              addToCart(pizzaDetail)
            }}
          >
            Añadir al carrito 😋
          </Button>
        </Card.ImgOverlay>
      </Card>
    </div>
  )
}

export default Pizza
