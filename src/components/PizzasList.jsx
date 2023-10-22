import { useContext } from 'react'
import { PizzaContext } from '../context/PizzaProvider'
import { useNavigate } from 'react-router'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const PizzasList = () => {
  const { allPizzas, addToCart } = useContext(PizzaContext)
  console.log(allPizzas)

  const navigate = useNavigate()

  return (
    <Container
      fluid
      className='mt-3 text-center'
    >
      <Row>
        {allPizzas.map((pizza) => (
          <Col
            key={pizza.id}
            sm={6}
            md={3}
          >
            <Card className='cards'>
              <Card.Img
                variant='top'
                src={pizza.img}
              />
              <Card.Body style={{ backgroundColor: 'lightgrey' }}>
                <Card.Title>{pizza.name}</Card.Title>
                <Card.Text className='list-unstyled'>
                  {pizza.ingredients.map((ingredient, id) => (
                    <li key={id}>🍕 {ingredient}</li>
                  ))}
                </Card.Text>
                <p>Precio: ${pizza.price}</p>
                <div className='d-flex justify-content-evenly'>
                  <Button
                    className='buttons'
                    variant='primary'
                    onClick={() => {
                      navigate(`/Pizza/${pizza.id}`)
                    }}
                  >
                    Ver más
                  </Button>
                  <Button
                    className='buttons'
                    variant='success'
                    onClick={() => {
                      addToCart(pizza)
                    }}
                  >
                    Añadir 🛒
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default PizzasList
