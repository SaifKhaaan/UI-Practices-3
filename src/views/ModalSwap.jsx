import React from "react";
import "../styles/modalSwap.css";

import "../styles/dropdown.css";
import { useState } from "react";
import Modal22 from "./Modal22";
import Modal from "./Modal";
import SettingModal from "./SettingModal";
import SearchModal from "./SearchModal";

const ModalSwap = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal22, setShowModal22] = useState(false);

  const [item, setitem] = useState({ title: "", img: "" });

  const [iitem, setiitem] = useState({ title: "", img: "" });

  const [iitem2, setiitem2] = useState({ title: "", img: "" });


  const [showsettingModal, setsettingModal] = useState(false);

  const [searchmodal, setsearchmodal] = useState(false);
  const [searchmodal2, setsearchmodal2] = useState(false);

  const [coin, setcoin] = useState({ title: "", img: "" });

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

  const getFirstWordcoin = (title) => {
    const firstSpaceIndex = title.indexOf(" ");
    return firstSpaceIndex !== -1 ? title.slice(0, firstSpaceIndex) : title;
  };

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
            <input type="number" defaultValue={0} />{" "}
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
            <input type="number" defaultValue={0} />{" "}
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

      <footer>
        <button className="swap-btn">
          <h3>Enter an Amount</h3>
        </button>
      </footer>
    </div>
  );
};

export default ModalSwap;
