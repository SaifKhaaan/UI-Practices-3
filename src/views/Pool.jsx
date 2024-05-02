import React from "react";
import "../styles/pool.css";
import image1 from "./image1.png";
import ethereumImage from "./1421394342400.png";
import binancedexImage from "./binancedex.png";

const Pool = () => {
  return (
    <div className="pool">
      <div>
        <h1>Pool</h1>
      </div>
      <div className="pool-items-container"> 
        <div className="pool-items">
          <div className="left-pool">
            <div>
              <img src={image1} alt="" />
            </div>
            <div>
              {" "}
              <div>
                <div>
                  <p>Pool</p>
                </div>

                <div>
                  <h3>LP USDC</h3>
                </div>
              </div>
              <div>
                <div>
                  <p>Lock/Unlock</p>
                </div>

                <div>
                  <h3>1.96.98</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="right-pool">
            <div>
              <h3>Sepolia</h3>
            </div>

            <div>
              <div>
                <p>Fee generated</p>
              </div>
              <div>
                <h3>0.06</h3>
              </div>
            </div>

            <div>
              <div>
                <p>Liquidity</p>
              </div>

              <div>
                <h3>11.448</h3>
              </div>
            </div>
          </div>
        </div>



        <div className="pool-items">
          <div className="left-pool">
            <div>
              <img src={ethereumImage} alt="" />
            </div>
            <div>
              {" "}
              <div>
                <div>
                  <p>Pool</p>
                </div>

                <div>
                  <h3>LP USDC</h3>
                </div>
              </div>
              <div>
                <div>
                  <p>Lock/Unlock</p>
                </div>

                <div>
                  <h3>1.96.98</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="right-pool">
            <div>
              <h3>Sepolia</h3>
            </div>

            <div>
              <div>
                <p>Fee generated</p>
              </div>
              <div>
                <h3>0.06</h3>
              </div>
            </div>

            <div>
              <div>
                <p>Liquidity</p>
              </div>

              <div>
                <h3>11.448</h3>
              </div>
            </div>
          </div>
        </div>





        <div className="pool-items">
          <div className="left-pool">
            <div>
              <img src={binancedexImage} alt="" />
            </div>
            <div>
              {" "}
              <div>
                <div>
                  <p>Pool</p>
                </div>

                <div>
                  <h3>LP USDC</h3>
                </div>
              </div>
              <div>
                <div>
                  <p>Lock/Unlock</p>
                </div>

                <div>
                  <h3>1.96.98</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="right-pool">
            <div>
              <h3>Sepolia</h3>
            </div>

            <div>
              <div>
                <p>Fee generated</p>
              </div>
              <div>
                <h3>0.06</h3>
              </div>
            </div>

            <div>
              <div>
                <p>Liquidity</p>
              </div>

              <div>
                <h3>11.448</h3>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
};

export default Pool;
