import React from "react";
import {useState,useEffect} from 'react';
import {Link } from "react-router-dom";
import '../../styled-components/header/navbar.css';

import { FaAtlassian,FaTimes,FaAlignJustify } from 'react-icons/fa';
import  Button from './Button';

function Header(){
//Set the button to open and close the nav menu burger onclick on mobile devices
  const[click,setclick]=useState(false)
  const[button,setbutton]=useState(true)
  useEffect(()=>{
showbutton();
  },[])
  const eventhandler=()=>{
    setclick(!click)
  }
  const closemobilemenu=()=>{
    setclick(false)
  }
  const showbutton=()=>{
    if(window.innerWidth<=960){
setbutton(false)
    }
    else{
setbutton(true)
    }
  }
window.addEventListener('resize',showbutton)
//display the navbar
  return(
    <> 
    <div className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-lo'>
          PEMA<FaAtlassian ></FaAtlassian>
          </Link>
          
          
          <div className='menu-icon'>
          
        <i className='menu' onClick={eventhandler}>
         {click ? <FaTimes className='Fatimes'></FaTimes> : <FaAlignJustify className='Faalignjustify'></FaAlignJustify>}

        </i>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
          <Link to='/' className='nav-link'onClick={closemobilemenu} >
          C'est l'histoire de...
</Link>
</li>
<li className='nav-item'>
          <Link to='/dirigeants' className='nav-link'onClick={closemobilemenu} >
            Les dirigeants
</Link>
</li>
<li className='nav-item'>
          <Link to='/leviers' className='nav-link' onClick={closemobilemenu} >
Les 4 leviers

</Link>
</li>
</ul>
{button && <Button buttonStyle='btn--outline' >Explorez</Button>}

</div>
</div>
</>

  )
}
export default Header