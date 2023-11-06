import React from 'react'
import "./Section4.css"
import InformationCard from '../Card/InformationCard'
import phone2 from "../../images/phone2.png"
import aadharcard from "../../images/aadharcard.png";

const Section4 = ({arr}) => {
     console.log("arr",arr)
  return (
    
       <div  className='section22'>
        <div className="sec22left">
          {arr.map((ele)=>{
            return <InformationCard icon={ele.logo} head={ele.head} />
          })}
        </div>
        <div className="sec22right">
          <img src={aadharcard} alt="" srcset="" className='adharc' />
          <img src={phone2} alt="" className="phn2" />
        </div>
    </div>
    
  )
}

export default Section4
