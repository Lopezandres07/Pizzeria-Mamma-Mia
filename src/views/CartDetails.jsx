import { useContext } from 'react'
import { PizzaContext } from '../context/PizzaProvider'
import { Button, Container } from 'react-bootstrap'

const CartDetails = () => {
  const {
    cart,
    addToCart,
    removeFromCart,
    cleanCart,
    totalToPay,
    totalPizzasPrice,
  } = useContext(PizzaContext)
  console.log(cart)

  return (
    <Container>
      <h5 className='mt-2'>Detalles del pedido</h5>
      <article>
        <ul className='border border-success p-2'>
          {cart.map((product) => (
            <li
              key={product}
              className='d-flex flex-row justify-content-between mb-3 '
            >
              <div className='d-flex align-items-center gap-2'>
                <img
                  src={product.img}
                  alt='pizza'
                  width={100}
                />
                <p>{product.name}</p>
              </div>
              <div className='d-flex align-items-center gap-2'>
                <p>Valor: ${totalPizzasPrice(product)}</p>
                <Button
                  onClick={() => addToCart(product)}
                  variant='success'
                >
                  +
                </Button>
                <p>{product.quantify}</p>
                <Button
                  onClick={() => removeFromCart(product.id)}
                  variant='danger'
                >
                  -
                </Button>
              </div>
            </li>
          ))}
        </ul>
        <article className='mt-5 d-flex flex-row justify-content-between'>
          <h5>
            Total: ${totalToPay} <strong className='text-success'>Pagar</strong>
          </h5>
          <Button onClick={cleanCart}>Limpiar carrito</Button>
        </article>
      </article>
    </Container>
  )
}

export default CartDetails
