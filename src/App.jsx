import './App.css'
import { Route, Routes } from 'react-router'
import NavigationBar from './components/NavigationBar'
import Home from './views/Home'
import NotFound from './views/NotFound'
import CartDetails from './views/CartDetails'
import Pizza from './views/Pizza'
import PizzaProvider from './context/PizzaProvider'

function App() {
  return (
    <main>
      <PizzaProvider>
        <NavigationBar />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/Pizza/:id'
            element={<Pizza />}
          />
          <Route
            path='/CartDetails'
            element={<CartDetails />}
          />
          <Route
            path='*'
            element={<NotFound />}
          />
        </Routes>
      </PizzaProvider>
    </main>
  )
}

export default App
