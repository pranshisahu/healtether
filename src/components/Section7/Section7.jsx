import React from 'react'
import "./Section7.css";
import PropertiesCard from "../Card/PropertiesCard"
import PropArr from './PorpArr';
import "./Section7Responsive.css"

const Section7 = () => {
  return (
    <div className='sec24'>
      {PropArr.map((arr)=>{
        return <PropertiesCard img={arr.img} head ={arr.head}/>
      })}

        
    </div>
  )
}

export default Section7
