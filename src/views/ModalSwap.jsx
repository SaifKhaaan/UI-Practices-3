import React from "react";
import "../styles/modalSwap.css";

import "../styles/dropdown.css";
import { useState } from "react";
import Modal22 from "./Modal22";
import Modal from "./Modal";


const ModalSwap = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal22, setShowModal22] = useState(false);

  const[item,setitem] = useState({title:"",img:""});

  const[iitem,setiitem] = useState({title:"",img:""});
  
//   const mydiv = false

//   const replace=()=>{
//  setmydiv =(!mydiv)
//   };

const getFirstWord = (title) => {
  const firstSpaceIndex = title.indexOf(" "); // Find the index of the first space
  return firstSpaceIndex !== -1 ? title.slice(0, firstSpaceIndex) : title; // Extract substring before space, or entire title if no space
};



   
const swap=()=>{
  setiitem(item);
  setitem(iitem)
}

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal22 = () => {
    setShowModal22(true);
  };

  const closeModal22 = () => {
    setShowModal22(false);
  };


  return (
    <div className="modal1">
      <div className="modal-top">
        <div className="card-text">
          <h2>Swap</h2>
        </div>
        <div className="setting-icon">
          <button>
          <img src="settingsicon.png" alt="" />

          </button>
        </div>
      </div>


 {/* {mydiv && */}
  <div id="div1" className="modal-middle" >
        <div className="modal-selection">
          <div>
            <p>From</p>
          </div>
          <div className="modal-btn">
            <button onClick={openModal22}>
              <div className="modal-btn-div">
              <div className="coin-icon">
                    <img src={iitem.img} alt="" />
                  </div>
                <div>
                  <p>{iitem.title}</p>
                </div>
                <div >
                  <img src="Vector.png" alt="" />
                </div>
              </div>
            </button>
            {showModal22 && <Modal22   onClose={closeModal22} setiitem={setiitem} />}
          </div>
          {/* Other content in modal-selection */}
        </div>

        <div className="input-wrapper">
          <div>
            <input type="number" defaultValue={0} />{" "}
          </div>
          <div className="input-right">
            <div className="max">
              <div className="">
                {" "}
                <h4>Max</h4>
              </div>
              <div className="max2">
              
              {" "}
              <h2>Max</h2>
            
          </div>
            </div>
          

            <div className="modal-btn">
              <button onClick={openModal22}>
                <div className="modal-btn-div">
                  <div className="coin-icon">
                    <img src={iitem.img} alt="" />
                  </div>
                  <div className="white-text">
                  <p>{getFirstWord(iitem.title)}</p>
                  </div>
                  <div>
                    <img src="Vector.png" alt="" />
                  </div>
                </div>
              </button>
              {showModal && <Modal22  onClose={closeModal22} setiitem={setiitem}/>}
            </div>
          </div>
        </div>
        <p id="dull-text">Balance:0</p>
      </div>








      <button id="swap-btn"
       onClick={swap}
      ><img src="./btn.png" alt="" /></button>

      <div id="div2" className="modal-middle" >
        <div className="modal-selection">
          <div>
            <p>To</p>
          </div>
          <div className="modal-btn">
            <button onClick={openModal}>
              <div className="modal-btn-div">
              <div className="coin-icon">
                    <img src={item.img} alt="" />
                  </div>
                <div>
                  <p>{item.title}</p>
                </div>
                <div >
                  <img src="Vector.png" alt="" />
                </div>
              </div>
            </button>
            {showModal && <Modal   onClose={closeModal} setitem={setitem} />}
          </div>
          {/* Other content in modal-selection */}
        </div>

        <div className="input-wrapper">
          <div>
            <input type="number" defaultValue={0} />{" "}
          </div>
          <div className="input-right">
            <div className="max">
              <div className="">
                {" "}
                <h4>Max</h4>
              </div>
              <div className="max2">
              
              {" "}
              <h2>Max</h2>
            
          </div>
            </div>
          

            <div className="modal-btn">
              <button onClick={openModal}>
                <div className="modal-btn-div">
                  <div className="coin-icon">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="white-text">
                  <p>{getFirstWord(item.title)}</p>
                  </div>
                  <div>
                    <img src="Vector.png" alt="" />
                  </div>
                </div>
              </button>
              {showModal && <Modal item={item[0]} onClose={closeModal} setitem={setitem}/>}
            </div>
          </div>
        </div>
                <p id="dull-text">Balance:0</p>

      </div>
      <footer>
        <button className="swap-btn">
          <h3>Enter an Amount</h3>
        </button>
      </footer>
    </div>
  );
};

export default ModalSwap;
