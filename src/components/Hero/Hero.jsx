import React from 'react'
import "./Hero.css"
import Header from '../Header/Header'


const Hero = () => {
  return (
    <div className="hero">
        <div className="left-h"><Header/>
        {/* the best ad  */}
        <div className="the-best-ad">
            <div></div>
            <span>the best fitness club in the town</span>
        </div>

        {/* the best ad  */}
        <div className="hero-text">
            <div><span className='stroke-text'>Shape </span>
            <span>Your</span>
            </div>
            <div>
                <span>IDEAL BODY</span>
                </div>
                <div ><span>In here we will help you to shape and build your ideal body and live up your life to fullest</span></div>

        </div>
        {/* figures */}
        </div>
        
        <div className="right-h">right side</div>
        
    </div>
  )
}

export default Hero