import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'


const Navbar = () => {

  const{Theme, handleThemeChange} = useContext(ContextGlobal)
  
return (
   
  <nav  className='navbar' style={{background:Theme.backgroundNavbar, color:Theme.color}}>
    
    <Link to={'/'}><h2>ClinicaOdontologica</h2></Link>
    
    <div>
          <Link to='/'>Home</Link>
          <Link to='/favs'>Favoritos</Link>
          <Link to='/contact'>Contactanos</Link>
          <button className={(Theme.color === 'black')} onClick={handleThemeChange}>🌙</button>
    </div>
  </nav>
  )
}

export default Navbar
