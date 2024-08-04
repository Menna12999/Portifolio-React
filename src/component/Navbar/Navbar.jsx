import {React,useState} from 'react'
import logo from '../../assets/logo-dark.svg'
import light_logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import  { useDarkmodeContext } from 'react-use-dark-mode';

export default function Navbar() {
  const[icon,setIcon]=useState(false)
  const[open,setOpen]=useState(false);

  const { mode, toggleMode } = useDarkmodeContext();

  function getLogo(theme) {
    return theme === 'light' ? logo : light_logo;
  }
  function toggleIcon(){
   setIcon(!icon)
  }
  function toggleNav(){
    setOpen(!open)
   }
  return (
    <nav className='md:flex justify-between items-center py-5 md:px-20 max-md:px-10 relative'>
      <div className="img">
        <img src={ getLogo(mode)}/>
      </div>
      <div className="nav-list">
        <ul className={`md:flex gap-5 ${open?'block':'hidden'}`}>
         <li className='max-md:my-4'><NavLink to={'./home'}>Home</NavLink></li>
         <li className='max-md:mb-4'><NavLink to={'./about'}>About</NavLink></li>
         <li className='max-md:mb-4'><NavLink to={'./portfolio'}>Portfolio</NavLink></li>
         <li className='max-md:mb-4'><NavLink to={'./contact'}>Contact</NavLink></li>
        </ul>
      </div>
   <div onClick={toggleMode}>
      <i className={`${!icon?'fa-moon':'fa-sun'} ${open?'block':'hidden'} md:block fa-solid curser-pointer navIcon`} onClick={toggleIcon}></i>
      </div>
      <i onClick={toggleNav} className={`${!open?'fa-bars':'fa-close'} md:hidden block fas fa-2x absolute top-4 right-6 cursor-pointer>`}></i>
    </nav>
  )
}

