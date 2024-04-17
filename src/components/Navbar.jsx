import React from 'react'
import { Link } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
  return (
    <div>
      
      <nav >
<div>
    <img src="logo.png" alt="" />
</div>

        <div className='nav-mid'> 
                 <div className="navbar-items">
           
              <Link to="/Swap"><p>Swap</p></Link>
           
          </div>
          <div className="navbar-items">
            
              <Link to="/Stake"><p>Stake</p></Link>
            
          </div>
          <div className="navbar-items">
        
              <Link to="/Pool"><p>Pool</p></Link>
            
          </div>
          <div className="navbar-items">
            
              <Link to="/History"><p>History</p></Link>
            
          </div>
         
            </div>


<div className='nav-btn'>
    <button>
    
      
   
        
        
        <Link to="/Connect"> <div className='nav-btnn' >
            <div>  <img src="btnicon.png" alt="" /></div>
            <div> <p>Connect</p></div>
            </div>  </Link> 
    </button>
</div>
      </nav>
    </div>
  )
}

export default Navbar
