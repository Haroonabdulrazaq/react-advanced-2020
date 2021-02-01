import React from 'react';
import {Link} from 'react-router-dom';
import {AiOutlineHome,AiOutlineTeam,AiFillFolderOpen,AiTwotoneCalendar} from 'react-icons/ai';
import {GiNinjaHead} from 'react-icons/gi';
import {GrDocumentVerified} from 'react-icons/gr';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="sidebar">
      <h3 className="name"><GiNinjaHead/> Haroon Abdulrazaq</h3>
      <ul className="list">
        <li className="list-item">
        <AiOutlineHome/> <Link to='/'> Home</Link>
        </li>
        <li className="list-item">
        <AiOutlineTeam/> <Link to="/team"> Team</Link>
        </li>
        <li className="list-item">
        <AiFillFolderOpen/>  <Link to="/calendar">Project</Link>
        </li>
        <li className="list-item">
        <AiTwotoneCalendar/><Link to="/calendar"> Calendar</Link>
        </li>
        <li className="list-item">
        <GrDocumentVerified/> <Link to="/calendar"> Docs</Link>
        </li>
      </ul>    
    </div>
  )
}
// Put links here
// ul, li and styling
// Add icons here
export default Navbar;
