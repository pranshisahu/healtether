import React from 'react'
import "./Text.css";
import TestCards from './TestCards';
import TestArr from "./TestArr"
import "./TestResponsive.css";
const Text = () => {
  return (
    <div className="testsec">
    <p className="greembg">TESTIMONIALS</p>

    <p className="bgPara tealc">
      Checkout what people are saying about their experiences.
    </p>
    <div className="testcardholder">
      {TestArr.map((arr)=>{
        return <TestCards name={arr.name} date={arr.date} rating={arr.rating} review={arr.review} />
      })}
      
      
    </div>
  </div>
  )
}

export default Text
