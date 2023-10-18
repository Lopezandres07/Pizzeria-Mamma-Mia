import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router'

const PizzasCard = ({ id, img, name, ingredients, price }) => {
  const navigate = useNavigate()

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant='top'
          src={img}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{ingredients}</Card.Text>
          <p>{price}</p>
          <Button
            variant='primary'
            onClick={() => {
              navigate(`/Pizza/${id}`)
            }}
          >
            Más Informacion
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default PizzasCard

{
}
