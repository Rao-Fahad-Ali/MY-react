import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import pic from './images/img.jpg';


// import aimzLogo from '../images/aimz_logo.png';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          {/* <img src={aimzLogo} alt="AIMZ Technical Institute Logo" /> */}
          {/* <span>Grow With </span><br /> */}
          <span className='aaa'> <a href={pic}> <b>GROW WITH AIMZ</b></a> </span>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/admission">Register</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/team">Team-AIMZ</Link>
          </li>
          <li>
            <Link to="/star-of-aimz">Star of AIMZ</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
