 import React from 'react'
import "../styles/modalenter.css"
import { getFirstWordcoin } from './ModalSwap'
import { useState } from 'react'
import { useEffect } from 'react'
import imgage  from "../images/success.png"



const Modalenter = ({onClose,items,value,item,setiitem,setitem,value1,iitem}) => {
  console.log(item,'item')

  const [showDiv1, setShowDiv1] = useState(true);
  const [showDiv2, setShowDiv2] = useState(false );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowDiv1(false);
      setShowDiv2(true);
    }, 11000); // 12 seconds in milliseconds

    return () => clearTimeout(timeoutId); // Cleanup function for useEffect
  }, []);



  const swap= ()=>{
    setitem(iitem);
  setiitem(item)
  }


    return (
    <div className='modal-enter-outer-container'>
<div className='modal-enter-container'>
{showDiv1 && <div><div>
    <h2>
        Swapping ...
    </h2>
</div>
<div className='center'>
<div class="loading-circle"></div>
<div className='loader'></div>
</div>

</div>}
{showDiv2 && <div>
    <div>
      <img src={imgage} alt="" />
    </div>
    <div><h2>Swap Sucess!</h2>
      </div>
  </div> }

<div>
<div>
    <div className=''>
        <div className='enter-from-upper'>
        <div>
          
            <p>From</p>
          </div>



          <div className="modal-btn">
            <button >
             <div className="modal-btn-div">
                 
               
  <div className='enter-from-upper' key={item.title}>  
<div className="coin-icon">
                  <img src={item?.img} alt="" />
                </div>
    <div>
                  <p>{item?.title}</p>
                </div>
  </div>

             
               
              </div>
            </button>
           
          </div>
        </div>
        <div className='h1'>
           
            <h1>{value}</h1>
        </div>
    </div>
</div>
<div className="enter-from-lower">
                  <div> <img src={item.img} alt="" />
                    </div> 
                  
                  <div className="white-text">
                    <p>{getFirstWordcoin(item?.title)}</p>
                  </div>
                  </div>
</div>




<div className='border'> 
    
    
         {/* <img src={items[0]?.img} alt="" />   */}
          
    
    
</div>



<div className='enter-swap-btn'>
<button id="swap-btn" 
onClick={swap}
>
        <img src="./btn.png" alt="" />
      </button>
</div>



 {/* secondddddddddddddddddddddddddddd  */}



<div>


<div>
    <div className=''>
        <div className='enter-from-upper'>
        <div>
          
            <p>To</p>
          </div>



          <div className="modal-btn">
            <button >
             <div className="modal-btn-div">
                 
               
  <div className='enter-from-upper' key={iitem.title}>  
<div className="coin-icon">
                  <img src={iitem?.img} alt="" />
                </div>
    <div>
                  <p>{iitem?.title}</p>
                </div>
  </div>

             
               
              </div>
            </button>
           
          </div>
        </div>
        <div className='h1'>
           
            <h1>{value1}</h1>
        </div>
    </div>
</div>
<div className="enter-from-lower">
                  <div> <img src={iitem.img} alt="" />
                    </div> 
                  
                  <div className="white-text">
                    <p>{getFirstWordcoin(iitem?.title)}</p>
                  </div>
                  </div>

</div>












<div className='cross-btn'>
      <button onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="c-fgJvlr c-fgJvlr-igsmDXe-css"><path d="M7 7L17 17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 17L17 7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </button></div>


</div>

<div className='number-container'>
<div className='number-border' id='firstborder'></div>
<div className='number-circle-container' >
<div  className='number-circle' id='firstcircle'><p>1</p></div>
<div id='firsttext'><h3>
  initiating Swap</h3></div><p></p>
  </div>


  <div className='number-border' id='secondborder'></div>
  <div className='number-circle-container' >
<div  className='number-circle' id='secondcircle'><p>2</p></div>
<div id='second-text'><h3>
  Bridging Assets</h3></div>
  </div>


  <div className='number-border' id='thirdborder'></div>
  <div className='number-circle-container' >
<div  className='number-circle' id='thirdcircle'><p>3</p></div>
<div id='thirdtext'><h3>
 Approving transfer</h3></div>
  </div>


  <div className='number-circle-container'>
<div  className='number-circle' id='fourthcircle'><p>4</p></div>
<div id='fourthtext'> <h3>
  Complete</h3></div>
  </div>


</div>



    </div>
  )
}

export default Modalenter
