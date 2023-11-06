import React from 'react'
import "./Section5.css";
import FeaturesCard from "../Card/FeaturesCard"
import Achive from './Achieve';
import FeatureArr from './FeatureArray';
import Achieve from './Achieve';

const Section5 = () => {
  return (
    <div className='sec25'>
    <div className="featurecardsHolder">
      {FeatureArr.map((arr)=>{
        return  <FeaturesCard img={arr.img} head={arr.head} desc={arr.desc}/>
       
      })}
      
    </div>
    <div className="achivementcardsholder">
      {
        Achieve.map((arr)=>{
          return <Achive img={arr.img} desc ={arr.desc}/>
        })
      }


    </div>
  </div>
  )
}

export default Section5
