import React, {useState} from 'react';
import SideNav from './SideNav';
import {GiHamburgerMenu} from 'react-icons/gi';



const ReactRouterSetup = () => {
  let [showNav, setShowNav] = useState(false);
  return (
    <div>
      <div className='hamburger' onClick={()=> setShowNav(true)}>
        <GiHamburgerMenu />
      </div>
      <SideNav showNav={showNav} />
    </div>
  )
}

export default ReactRouterSetup;
