import React from "react";
import "../styles/modalStyle.css";
import image1 from "./image1.png";
import ethereumImage from "./1421394342400.png";
import binancedexImage from "./binancedex.png";
import polygonImage from "./Vector2.png";
import image3 from "./image3.png"
import image2 from "./image2.png"
import MetaMask from "./MetaMask.webp"
import { useState } from 'react';

const Modal22 = ({ onClose, setiitem ,setitems}) => {

  const [selectediitem, setSelectediitem] = useState(null);
  const [subarray, setsubarray] = useState(null);

  const handleClick = (iitem) => {
    setSelectediitem(iitem);
setsubarray(iitem.subiitems);
    
  };
  console.log( "iitem", subarray)


  const iitemArray = [
  
    {
      id: 1,
      title: "Aptos Market",
      image: image1,
      subiitems: [{ id: 1, title: "Petra Wallet", image: image3 },{ id: 2, title: "Pontem Wallet", image: image2}],
    },
    { id: 2, title: "Ethereum Mainnet", 
    image: ethereumImage , subiitems: [{ id: 1, title: "MetaMask", image: MetaMask }] },

    { id: 3, title: "BNB Chain Mainnet", image: binancedexImage ,  subiitems: [{ id: 1, title: "Petra Wallet", image: image3 },{ id: 2, title: "Pontem Wallet", image: image2 }],},

    { id: 4, title: "Polygon Mainnet", image: polygonImage, subiitems: [{ id: 1, title: "MetaMask", image: MetaMask }] },
  ];

  return (
    <div className="modal">
      <div
        className="modal-content"
        style={{ backgroundColor: "rgb(9, 11, 18)" }}
      >
        {/* Your modal content goes here */}
        <div>
          <h2>Connect</h2>
        </div>
        <div className="mid-container">
          <div className="object-item" id="left">
           <div><h3>Select Network</h3>
            </div> 

            <div className="array-map">
               {(iitemArray && iitemArray.length > 0) && iitemArray.map((iitem) => {
                return (
                  <div
                    id="modal22-map"
                    key={iitem.id}
                    className="map-objects"
                    onClick={() => {
                      setiitem({ title: iitem.title, img: iitem.image }); 
                      handleClick(iitem); 

                    }}
                  >
                    <div>
                      <img src={iitem.image} alt={iitem.title} />
                    </div>

                    <div>
                      <h3>{iitem.title}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="right">
          <div className="Center-text">
              <h3 >Select Wallet</h3>
              <div>
                 {/* yahan map krwana */}

      {subarray && subarray.length>0 && subarray.map((iitem) => {
                return (
                  <div className="wallet-map">
                  <div>
                  <img src={iitem.image} alt={iitem.title} />
                </div>

                <div>
                  <h3>{iitem.title}</h3>
                </div>
                </div>
   
      )})}
           
              </div>
          </div>
        
        </div>
        </div>
        
<div className="modal-continue-btn">
        <button  onClick={onClose}><h3>Continue</h3></button>

</div>
      </div>
    </div>
  );
};

export default Modal22;
