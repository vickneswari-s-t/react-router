import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    
  return <>
  <nav className="navBar">
      <div className='items'>
        <ul>
            <li>
                <Link to="/all" className="options"><span>All</span> </Link>
            </li>
            <li>
                <Link to="/Full" className="options"><span>FULL STACK DEVELOPMENT</span> </Link>
            </li>
            <li>
                <Link to="/data" className="options"><span>DATA SCIENCE</span> </Link>
            </li>
            <li>
                <Link to="/cyber" className="options"><span>CYBER SECURITY</span> </Link>
            </li>
            <li>
                <Link to="/others" className="options"><span>CAREER</span> </Link>
            </li>
        </ul>
      </div>
  </nav>
      
  </>
}

export default Navbar