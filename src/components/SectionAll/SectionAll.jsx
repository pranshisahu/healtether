import React from 'react'
import Section3 from "../Section3/Section3";
import Section4 from "../Section4/Section4.jsx";
import Section5 from '../Section5/Section5';
import DesccriptionCard from "../Section3/DesccriptionCard"
import Description from "../Card/Description"
import Section6 from '../Section6/Section6';
import Section7 from '../Section7/Section7';
import Text from "../Text/Text";
import Questions from "../Questions/Questions";
import Footer from "../Footer/Footer";
import DescriptionCard from '../Section3/DescriptionCard';
import Section4Arr from '../Section4/Section4Arr.js';

const SectionAll = () => {
  return (
    <div className="sec2">
      <Section3 />
      <DesccriptionCard
        frst={DescriptionCard[0].greentext}
        head={DescriptionCard[0].head}
        desc={DescriptionCard[0].desc}
        btn1={DescriptionCard[0].btn1}
        btn2={DescriptionCard[0].btn2}
      />
      <Section4 arr={[0]}/>
      <Section5 />
      <DesccriptionCard
      frst={DescriptionCard[1].greentext}
      head={DescriptionCard[1].head}
      desc={DescriptionCard[1].desc}
      btn1={DescriptionCard[1].btn1}
      btn2={DescriptionCard[1].btn2} />
      <Section4 arr={Section4Arr[1]} />
      <Section6 />
      <DesccriptionCard
      frst={DescriptionCard[2].greentext}
      head={DescriptionCard[2].head}
      desc={DescriptionCard[2].desc}
      btn1={DescriptionCard[2].btn1}
      btn2={DescriptionCard[2].btn2} />
      <Section4 arr={Section4Arr[2]}/>
      <Description />
      <Section7 />
      <Text />
      <Questions />
      <Footer />
    </div>
  )
}

export default SectionAll
