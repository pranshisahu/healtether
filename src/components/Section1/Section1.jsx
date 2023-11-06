import React from 'react'
import phone1 from "../../images/phone1.png"
import section1 from "../../images/section1.png"
import {BsGooglePlay} from "react-icons/bs"
import {AiFillApple} from "react-icons/ai"
import "./Section1.css";
import "./Section1Responsive.css";

const Section1 = () => {
  return (
    <div className="sec1">
      <div className="sec1para">
        <h1 className="bigHead">Digitize, Preserve & Empower <span className="textblue">Healthcare</span> </h1>
        <p className="bigPara">
          Your comprehensive online healthcare solution, we provide 24x7 access
          to personalized healthcare services, seamless integration of health
          devices, and daily health updates, all within a unified and empowering
          ecosystem.
          
        </p>
        <div className="secBtnCont">
            <button className="playStorebtn"><BsGooglePlay className="btnicon"/>Play Store</button>
            <button className="AppStorebtn"><AiFillApple className="aplleicon"/> App Store</button>
        </div>
      </div>
      <div className="sec1phoneCont">
        <img className="sec1img" src={section1} alt="" />
        <img className="sec1phn" src={phone1} alt="" />
      </div>
    </div>
  )
}

export default Section1
