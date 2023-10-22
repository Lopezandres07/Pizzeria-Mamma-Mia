import { useState } from 'react'
import { createContext } from 'react'
import { pizzas } from '../pizzas'

export const PizzaContext = createContext()

const PizzaProvider = ({ children }) => {
  const [allPizzas, setAllPizzas] = useState(pizzas)
  console.log(pizzas)

  /*  const getPizzas = async () => {
    try {
      const response = await axios.get(allPizzas)

      if (!response.status) {
        throw new Error('There is not data')
      }

      const getPizzas = await response.data
      console.log(getPizzas)

      setAllPizzas(getPizzas)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPizzas()
  }, []) */

  const [cart, setCart] = useState([])
  console.log(cart)

  const addToCart = (pizza) => {
    const checkingProductInCart = cart.findIndex((item) => item.id === pizza.id)

    if (checkingProductInCart >= 0) {
      const newCart = structuredClone(cart)
      newCart[checkingProductInCart].quantify += 1
      return setCart(newCart)
    }

    setCart((prevState) => [...prevState, { ...pizza, quantify: 1 }])
  }

  const removeFromCart = (id) => {
    const deleteCartProducts = cart.map((pizza) => {
      if (pizza.id === id) {
        if (pizza.quantify > 1) {
          return { ...pizza, quantify: pizza.quantify - 1 }
        }
        return null
      }
      return pizza
    })

    const filterCart = deleteCartProducts.filter((item) => item !== null)

    setCart(filterCart)
  }

  const totalToPay = cart.reduce((previusValue, pizza) => {
    return previusValue + pizza.price * pizza.quantify
  }, 0)

  const totalPizzasPrice = (pizza) => {
    return pizza.price * pizza.quantify
  }

  const cleanCart = () => {
    setCart([])
  }

  return (
    <PizzaContext.Provider
      value={{
        allPizzas,
        setAllPizzas,
        cart,
        addToCart,
        removeFromCart,
        cleanCart,
        totalToPay,
        totalPizzasPrice,
      }}
    >
      {children}
    </PizzaContext.Provider>
  )
}

export default PizzaProvider
