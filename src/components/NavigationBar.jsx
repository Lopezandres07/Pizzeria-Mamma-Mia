import { useContext } from 'react'
import { Nav, Navbar, NavbarText } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import { PizzaContext } from '../context/PizzaProvider'

const setActiveClass = ({ isActive }) => (isActive ? 'active' : 'noActive')

const NavigationBar = () => {
  const { totalToPay } = useContext(PizzaContext)
  const navigate = useNavigate()

  return (
    <>
      <Navbar
        className='d-flex justify-content-between px-4 py-0 '
        style={{ backgroundColor: 'lightgrey' }}
      >
        <Navbar.Brand
          onClick={() => navigate('/')}
          className='d-flex align-items-center'
        >
          <img
            alt='Logo'
            style={{ width: '4rem' }}
            src='/src/assets/imgs/pizzaLogo.png'
          />
          <NavbarText style={{ color: 'black' }}>
            <h4>Pizza Mamma Mia!</h4>
          </NavbarText>
        </Navbar.Brand>
        <Nav className='gap-2'>
          <NavLink
            className={setActiveClass}
            to='/'
          >
            <h5>Inicio</h5>
          </NavLink>
          <NavLink
            className={setActiveClass}
            to='/CartDetails'
          >
            <h5>
              <p>${totalToPay}🛒</p>
            </h5>
          </NavLink>
        </Nav>
      </Navbar>
    </>
  )
}

export default NavigationBar
