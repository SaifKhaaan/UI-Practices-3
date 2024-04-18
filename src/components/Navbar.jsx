import React from 'react'
import { Link } from "react-router-dom";
import "./navbar.css"
import Modal22 from "../views/Modal22";
import { useState } from "react";
import "../styles/dropdown.css";


import "../styles/modalSwap.css";


const Navbar = () => {
  const [showModal22, setShowModal22] = useState(false);

  const[iitem,setiitem] = useState({title:"",img:""});

  const openModal22 = () => {
    setShowModal22(true);
  };

  const closeModal22 = () => {
    setShowModal22(false);
  };
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
    <button onClick={openModal22}>
   
      
   
        
        
       <div className='nav-btnn' >
            <div>  <img src="btnicon.png" alt="" /></div>
            <div><h3>Connect</h3></div>
            </div>    
    </button>
</div>
      </nav>
      {showModal22 && <Modal22   onClose={closeModal22} setiitem={setiitem} />}
      {/* {showModal22 && <Modal22  onClose={closeModal22} setiitem={setiitem}/>} */}
    </div>
  )
}

export default Navbar
