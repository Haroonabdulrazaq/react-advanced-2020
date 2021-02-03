import React, {useState} from 'react';
import SideNav from './SideNav';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiFillCloseCircle} from 'react-icons/ai';
import './index.css'


const ReactRouterSetup = () => {
  let [showNav, setShowNav] = useState(false);
 
  return (
    <div className="">
      <div className='hamburger' onClick={()=> setShowNav(!showNav)}>
        {showNav? <AiFillCloseCircle size="35px" /> : <GiHamburgerMenu size="35px"/> }
      </div>
      <SideNav showNav={showNav} />
      
    </div>
  )
}

export default ReactRouterSetup;
