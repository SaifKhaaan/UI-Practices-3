import React from 'react'
import { Link } from "react-router-dom";
import "./navbar.css"
import Modal22 from "../views/Modal22";
import { useState } from "react";
import "../styles/dropdown.css";
import { useRef } from "react";
import { FaBars} from "react-icons/fa";

import "../styles/modalSwap.css";


const Navbar = () => {
  const [showModal22, setShowModal22] = useState(false);

  const[iitem,setiitem] = useState({title:"",img:""});
  const navRef = useRef();
  const showNav = () => {
    navRef.current.classList.toggle("responsive_nav");
  };


  const openModal22 = () => {
    setShowModal22(true);
  };
  // console.log(iitem)

  const closeModal22 = () => {
    setShowModal22(false);
  };
  return (
    <div >
       <div className="header-button-container">
        <button className="nav-btn" onClick={showNav}>
          
          <FaBars />
        </button></div>
      <nav className="nav"  ref={navRef}>
<div className='nav-logo-img'>
    <img src="logo.png" alt="" />
</div>

        <div className='nav-mid'> 
                 <div className="navbar-items">
           
              <Link to="/Swap"><p>Swap</p></Link>
           
          </div>
         
          <div className="navbar-items">
        
              <Link to="/Pool"><p>Pool</p></Link>
            
          </div>
          <div className="navbar-items">
            
              <Link to="/History"><p>History</p></Link>
            
          </div>
         
            </div>

<div className='nav-right'>



<div className='nav-btn1'>
    <button onClick={openModal22}>      
       <div className='nav-btnn' >
            <div>  <img src="btnicon.png" alt="" /></div>
            <div><h3>Connect</h3></div>
            </div>    
    </button>
</div>


</div>


      </nav>
     
    
      {showModal22 && <Modal22   onClose={closeModal22} 
      setiitem={setiitem} 
      />}
      {/* {showModal22 && <Modal22  onClose={closeModal22} setiitem={setiitem}/>} */}
    
    
      

    </div>
  )
}

export default Navbar
