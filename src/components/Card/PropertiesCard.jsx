import React from 'react'
import './PropertiesCard.css'
const PropertiesCard = (props) => {
  return (
    <div className='propcardcont'>
    <h2 className="propcardhead">
    {props.head}
    </h2>
    <img src={props.img} alt="" className="propcardimg" />
</div>
  )
}

export default PropertiesCard
