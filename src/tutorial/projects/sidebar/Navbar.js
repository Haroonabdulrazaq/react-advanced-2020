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
          <Link to='/'> <AiOutlineHome/> Home</Link>
        </li>
        <li className="list-item">
          <Link to="/team"><AiOutlineTeam/> Team</Link>
        </li>
        <li className="list-item">
          <Link to="/project"><AiFillFolderOpen/>Project</Link>
        </li>
        <li className="list-item">
          <Link to="/calendar"><AiTwotoneCalendar/> Calendar</Link>
        </li>
        <li className="list-item">
          <Link to="/document"><GrDocumentVerified/> Docs</Link>
        </li>
      </ul>    
    </div>
  )
}
// Put links here
// ul, li and styling
// Add icons here
export default Navbar;
