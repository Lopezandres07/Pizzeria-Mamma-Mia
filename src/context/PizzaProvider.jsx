import axios from 'axios'
import { useEffect, useState } from 'react'
import { createContext } from 'react'

export const PizzaContext = createContext()

const pizzasApi = 'public/pizzas.json'

const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([])
  console.log(pizzas)

  useEffect(() => {
    try {
      axios.get(pizzasApi).then((res) => {
        setPizzas(res.data)
      })
    } catch {
      ;(err) => {
        console.log(err)
      }
    }
  }, [])

  return (
    <PizzaContext.Provider value={{ pizzas, setPizzas }}>
      {children}
    </PizzaContext.Provider>
  )
}

export default PizzaProvider
