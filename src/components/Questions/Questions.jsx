import React from 'react'
import "./Question.css";
import Questionans from './Questionans';
import QuestinCard from './QuestinCard';
const Questions = () => {
  return (
    <div className='faqsec '>
    <h1 className='bigHead marBot'>Frequently Asked Questions</h1>
    
    <div className="quesCont">
      {
        Questionans.map((ar)=>{
          return   <QuestinCard ques={ar.ques} ans={ar.ans}/>
        })
      }
  
   
    </div>
    <h2 className='viewmore textblue'>View more</h2>
</div>
  )
}

export default Questions
