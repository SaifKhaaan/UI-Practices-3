import React from 'react'
import "../styles/settingmodal.css"
// import {Slider} from '@mui/material';
// import {handleChange,Typography,value} from '@mui/material';
// import valueLabelFormat from  '@mui/material';
import { useState } from 'react';
import { useRef } from 'react';

const SettingModal = ({onClose}) => {

  const [value, setValue] = useState(50);
  const sliderRef = useRef(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const trackStyle = {
    background: `linear-gradient(to right, rgb(164,218,253) 0%, rgb(164,218,253) ${value}%,rgb(29,31,33) ${value}%, rgb(29,31,33) 100%)`,
  };


  return (
    <div className="setting-modal-outer-container">

   
    <div className='setting-modal-container'>
      
      <div className='setting-top-part'> 
      <div><h2>Setting</h2>
        </div>
        <div className='cross-btn'>
          <button onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="c-fgJvlr c-fgJvlr-igsmDXe-css"><path d="M7 7L17 17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 17L17 7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </button></div>

      </div>
     
        <div className='slip-container'>
  
  
     <div> <p>Slipage Tolerance</p>
      </div>   
        <div className="slidecontainer">
 
      <div>
        <div><input   

ref={sliderRef}
type="range"
min="1"
max="99"
value={value}
className="slider"
id="myRange"
onChange={handleChange}
style={trackStyle}
/>
          </div>
          <div className='percentage-container'>
            <div>0.1</div>
            <div>0.33</div>
            <div>0.66</div>
            <div>0.99</div>
            
          </div>
</div> <div id='result'><p>0.<span id="demo">{value}</span></p></div>
    </div>

        </div>
        <div className='setting-save-btn'> <button><h2>Save</h2></button></div>
    </div> 
   
    </div>
  )
}

export default SettingModal
