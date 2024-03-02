import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/Logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext';


const Navbar = () => {

  const [menu, setMenu] = useState("shop");
  const { totalCartItems } = useContext(CartContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const userExist = localStorage.getItem("token")

  useEffect(() => {
    if (userExist) {
      setIsLoggedIn(true)
    }
  }, [])



  return (
    <div className='navbar'>
      <div className="nav-logo">
        <Link to='/' onClick={() => { setMenu("shop") }}><img src={logo} alt='' /></Link>
      </div>
      <ul className="nav-menu">
        <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link> {menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("sell") }}><Link style={{ textDecoration: 'none' }} to='/sell'>Sell</Link>{menu === "sell" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        {isLoggedIn ?
          (<Link to='/profile' onClick={() => { setMenu("profile") }}><button>Profile</button></Link>)
          :
          (<Link to='/login' onClick={() => { setMenu("login") }}><button>Login</button></Link>)

        }
        <Link to='/cart' onClick={() => { setMenu("cart") }}><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{totalCartItems}</div>{menu === "cart" ? <hr /> : <></>}
      </div>
    </div>
  )
}

export default Navbar
