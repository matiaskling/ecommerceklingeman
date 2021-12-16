import { Link } from 'react-router-dom'
import { CartWidget } from "./CartWidget";
import '../styles/navBar.css' 

const NavBar = () => {
  return (

            <nav className='nav'>
                      <Link className='link' to="/">CONTEK</Link>
                      <Link className='link' to="/">Inicio</Link>
                      <Link className='link' to="/categoria/procesadores">Procesadores</Link>
                      <Link className='link' to="/categoria/motherboards">Motheboards</Link>
                      <Link className='link' to="/cart"><CartWidget/></Link>
            </nav>

  );
};
export default NavBar;