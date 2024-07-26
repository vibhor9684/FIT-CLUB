import React from 'react'
import "./Hero.css"
import Header from '../Header/Header'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";


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
        <div className="figures">
          <div>
          <span>+140</span>
          <span>expert coachs</span>
          </div>
          <div>
          <span>+978</span>
          <span>member joint</span>
          </div>
          <div>
          <span>+50</span>
          <span>fitness program</span>
          </div>
        </div>
        {/*hero button */}
        <div className="hero-buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>

        </div>
        <div className="right-h">
          <buttons className="btn">Join Now</buttons>

          <div className="heart-rate">
            <img src={Heart} alt="" />
            <span>Heart Rate</span>
            <span>116 bpm</span>
          </div>

        {/* hero images  */}
        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} alt=""  className="hero-image-back"/>
      {/*calories */}
      <div className="calories">
        <img src={Calories} alt="" />
        <div>
          <span>Calories Burned </span>
        <span>220 kcal</span> 
        </div>
      </div>

        </div>
        
    </div>
  )
}

export default Hero