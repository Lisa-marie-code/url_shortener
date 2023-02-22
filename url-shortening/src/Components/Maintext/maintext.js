import React from 'react';
import "../App/App.css";

export const LargeText = ()=>{
    return(
        <div>
             <div className="flex-text">
          <div>
            <h2 className="large-text">More than just shorter links</h2>
            <h3>
              Build your brand's recognition and get detailed insights on how
              your links are performing
            </h3>
            <a href="/">Get Started</a>
          </div>
          <img
            className="worker-img"
            src="/images/illustration-working.svg"
            alt="worker"
          />
        </div>
        </div>
    )
}
export default LargeText;