import React, { useState } from 'react'
import "../styles/searchmodal.css";

import image1 from "./image1.png";
import ethereumImage from "./1421394342400.png";
import binancedexImage from "./binancedex.png";
import polygonImage from "./Vector2.png";


const SearchModal = ({onClose,setcoin}) => {

  // const [
  //   selectedcoin,
  //   setselectedcoin] = useState(null);
  const [searchText, setSearchText] = useState("");
  const coinArray = [
  
    {
      id: 1,
      title: "Aptos Market",
      image: image1,
      
    },
    { id: 2, title: "Ethereum Mainnet", 
    image: ethereumImage  },

    { id: 3, title: "BNB Chain Mainnet", image: binancedexImage },

    { id: 4, title: "Polygon Mainnet", image: polygonImage },
  ];

  
  // const handleClick = (coin) => {
  //   setselectedcoin(coin);
  // }
    const getFirstWordcoin = (title) => {
      const firstSpaceIndex = title.indexOf(" "); 
      return firstSpaceIndex !== -1 ? title.slice(0, firstSpaceIndex) : title; 
    };

    const filteredCoins = searchText
    ? coinArray.filter((coin) =>
        coin.title.toLowerCase().includes(searchText.toLowerCase())
      )
    : coinArray;

  return (

    <div className='search-modal-outer-container'>
        <div className='search-modal-container'>
        <div className='search-top-part'> 
      <div><h2>Select Tokens</h2>
        </div>
      <div className='cross-btn'>
      <button onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="c-fgJvlr c-fgJvlr-igsmDXe-css"><path d="M7 7L17 17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 17L17 7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </button></div>
            </div>
            <div className='display-left'>
            <div className="token-objects-outer-container">
            {(coinArray && coinArray.length > 0)  && coinArray.slice(0, -2).map((coin) => {
                return (
                  <div
                   
                    key={coin.id}
                    className="token-objects-container"
                    onClick={() => {
                      setcoin({ title: coin.title, img: coin.image }); 
                      // handleClick(coin); 
                      // onClose()
                    }}
                  >
                    <div className='token-objects'> 
                      
                    </div>
                    <div>
                      <img src={coin.image} alt={coin.title} />
                    </div>

                    <div>
                      <h3>{getFirstWordcoin(coin.title)}</h3>
                    </div>
                  </div>
                );
              })}
            </div>


            <div className="search-container">
     
            <img
        src="search.png" // Replace with your actual icon path
        alt="Search Icon"
        className="search-icon"
      /> <input
        type="text"
        placeholder="Search or add new tokens"
        className="search-input"
        value={searchText} // Set input value to searchText state
        onChange={(e) => setSearchText(e.target.value)} // Update searchText on input change
      />
      
    </div>
            </div>
          
      






            <div className="array-map">
               {filteredCoins.map((coin) => {
                return (
                  <div
                    id="modal22-map"
                    key={coin.id}
                    className="map-objects"
                    onClick={() => {
                      setcoin({ title: coin.title, img: coin.image }); 
                      // handleClick(coin); 

                    }}
                  >
                    <div>
                      <img src={coin.image} alt={coin.title} />
                    </div>

                    <div>
                      <h3>{coin.title}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
        </div>
      
    </div>
  )
}

export default SearchModal
