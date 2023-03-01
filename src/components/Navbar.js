import './Navbar.css';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" 
        // className={({isActive}) => (isActive ? 'ativo' : 'nao-ativo')}
        >Home
      </NavLink>
      <NavLink to="/about">Sobre</NavLink>
    </nav>
  )
}

export default Navbar