import React from 'react'

const Achive = (props) => {
  return (
    <div>
        <div className='AchiveCont'>
        <img src={props.img} alt="" className="achive" />
        <p className="achivcarddesc">{props.desc}</p>
    </div>
    </div>
  )
}

export default Achive
