import React, {useState} from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'
import logo from '../../assets/kot.png';
import { TbGalaxy } from 'react-icons/tb';

const Menu = () => (
 <>
        <p><a href='#home'>Home</a></p>
        <p><a href='#products'>Our products</a></p>
        <p><a href='#contact'>Contact Info</a></p>
 </>
)



const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);



  return (
    <div className='laiz__navbar'>
      <div className='laiz__navbar-links'>

        <div className='laiz__navbar-links_logo'>
          <img  src={logo} alt='logo'/>
        </div>
      <div className='laiz__navbar-links_container'>
        <Menu />
      </div>
      </div>
      <div className='laiz__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className='laiz__navbar-menu'>
      {toggleMenu 
      ? <RiCloseLine color='#fff' size={27}  onClick={()=> setToggleMenu(false)}/>
      : <RiMenu3Line color='#fff' size={27}  onClick={()=> setToggleMenu(true)}/>
      }
      {toggleMenu && (
        <div className='laiz__navbar-menu_container scale-up-center'> 
        <div className='laiz__navbar-menu_container-links'> 
          <Menu />
          <div className='laiz__navbar-menu_container-links-sign'>
            <p>Sign in</p>
            <button type='button'>Sign Up</button>
          </div>
        </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default Navbar
