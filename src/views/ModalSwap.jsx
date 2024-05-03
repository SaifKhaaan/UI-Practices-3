import React from "react";
import "../styles/modalSwap.css";

import "../styles/dropdown.css";
import { useState } from "react";
import Modal22 from "./Modal22";
import Modal from "./Modal";
import SettingModal from "./SettingModal";
import SearchModal from "./SearchModal";
import Modalenter from "./Modalenter";

export const getFirstWordcoin = (title) => {
  const firstSpaceIndex = title?.indexOf(" ");
  return firstSpaceIndex !== -1 ? title?.slice(0, firstSpaceIndex) : title;
};

const ModalSwap = () => {



  const [data, setData] = useState([
    { title: '', img: '' },
    { title: '', img: '' },
    { title: '', img: '' }
  ]);
  // Function to update data at a specific index
  const updateDataAtIndex = (index, newData) => {
    setData(prevData => {
      const updatedData = [...prevData];
      updatedData[index] = newData;
      return updatedData;
    });
  };



  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);

  
 
  const [showModal, setShowModal] = useState(false);
  const [showModal22, setShowModal22] = useState(false);

  const [item, setitem] = useState({ title: "", img: "" });

  const [iitem, setiitem] = useState({ title: "", img: "" });

  const [iitem2, setiitem2] = useState({ title: "", img: "" });

  const [coin, setcoin] = useState({ title: "", img: "" });

  // const items = [
  //   item,
  //   iitem,
  //   iitem2,
  //   coin,
  // ];

  const [items, setItems] = useState([
    { title: "", img: "" },
  ]);
  console.log(items,'item in swap modal')

  const [showsettingModal, setsettingModal] = useState(false);

  const [searchmodal, setsearchmodal] = useState(false);
  const [searchmodal2, setsearchmodal2] = useState(false);

  


  const [modalenter,setmodalenter] = useState(false)

  //   const mydiv = false

  //   const replace=()=>{
  //  setmydiv =(!mydiv)
  //   };

  // const getFirstWord = (title) => {
  //   const firstSpaceIndex = title.indexOf(" ");
  //   return firstSpaceIndex !== -1 ? title.slice(0, firstSpaceIndex) : title;
  // };

  const swap = () => {
    setiitem(item);
    setitem(iitem);
  };

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

  const opensettingModal = () => {
    setsettingModal(true);
  };

  const closethesettingModal = () => {
    setsettingModal(false);
  };

  const opensearchmodal = () => {
    setsearchmodal(true);
  };
  const closesearchmodal = () => {
    setsearchmodal(false);
  };

 

  const handleChange = (event) => {
    const newValue = event.target.value;
    if (!isNaN(newValue) && newValue.length <= 4) {
      setValue(newValue);
     
    }
  }
  const handleChange1 = (event) => {
    const newValue = event.target.value;
    if (!isNaN(newValue) && newValue.length <= 4) {
     
      setValue1(newValue);
    }
  }

  return (
    <div className="modal1">
      <div className="modal-top">
        <div className="card-text">
          <h2>Swap</h2>
        </div>
        <div className="setting-icon">
          <button onClick={opensettingModal}>
            <img src="settingsicon.png" alt="" />
          </button>
        </div>
      </div>

      {showsettingModal && <SettingModal onClose={closethesettingModal} />}
      {/* {mydiv && */}
      <div id="div1" className="modal-middle">
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
                <div>
                  <img src="Vector.png" alt="" />
                </div>
              </div>
            </button>
            {showModal22 && (
              <Modal22 onClose={closeModal22} setiitem={setiitem} />
            )}
          </div>
          {/* Other content in modal-selection */}
        </div>

        <div className="input-wrapper">
          <div>
            <input type="number" defaultValue={0} value={value} onChange={handleChange} />{" "}
          </div>
          <div className="input-right">
            <div className="max">
              <p>Max</p>
            </div>

            <div className="modal-btn">
              <button onClick={opensearchmodal}>
                <div className="modal-btn-div">
                  <div className="coin-icon">
                    <img src={coin.img} alt="" />
                  </div>
                  <div className="white-text">
                    <p>{getFirstWordcoin(coin.title)}</p>
                  </div>
                  <div>
                    <img src="Vector.png" alt="" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <p id="dull-text">Balance:0</p>
      </div>

      {searchmodal && (
        <SearchModal onClose={closesearchmodal} setcoin={setcoin} />
      )}

      <button id="swap-btn" onClick={swap}>
        <img src="./btn.png" alt="" />
      </button>

      <div id="div2" className="modal-middle">
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
                <div>
                  <img src="Vector.png" alt="" />
                </div>
              </div>
            </button>
            {showModal && <Modal onClose={closeModal} setitem={setitem} />}
          </div>
          {/* Other content in modal-selection */}
        </div>

        <div className="input-wrapper">
          <div>
            <input type="number" defaultValue={0} value={value1} onChange={handleChange1} />{" "}
          </div>
          <div className="input-right">
            <div className="max">
              <p>Max</p>
            </div>

            <div className="modal-btn">
              <button onClick={()=>setsearchmodal2(true)}>
                <div className="modal-btn-div">
                  <div className="coin-icon">
                    <img src={iitem2.img} alt="" /> 
                  </div>
                  <div className="white-text">
                    <p>{getFirstWordcoin(iitem2.title)}</p>
                  </div>
                  <div>
                    <img src="Vector.png" alt="" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <p id="dull-text">Balance:0</p>
      </div>

      {searchmodal2 && (
        <SearchModal onClose={()=>setsearchmodal2(false)} setcoin={setiitem2} />
      )}
      {/* setcoin={setItems} */}

      <footer >
        <button  onClick={()=>setmodalenter(true) }className="swap-btn"  disabled={!value }      style={{ filter: value ? "none" : "blur(1px)" }} >  
          <h3>Enter an Amount</h3>
        </button>

        {modalenter &&(
          <Modalenter setiitem={setiitem} setitem={setitem} onClose={()=>setmodalenter(false)} item={item} iitem={iitem} value={value} value1={value1}/>
        )
          
        }
      </footer>
    </div>
  );
};

export default ModalSwap
 