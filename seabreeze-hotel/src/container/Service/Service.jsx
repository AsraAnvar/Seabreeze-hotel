import React from "react";
import { SubHeading } from '../../components';
import { data, images } from '../../constants';
import './Service.css';

const FeatureCard = ({ feature: { imgUrl, title, subtitle } }) => (
    <div className="app__Service_features-card">
      <img src={imgUrl} alt="features" />
      <div className="app__Service_features-card_content">
        <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
        <p className="p__opensans">{subtitle}</p>
      </div>
    </div>
  );
  
  const Service = () => (
    <div className="app__bg app__wrapper section__padding" id="features">
      <div className="app__wrapper_info">
        <SubHeading title="features & facilities" />
        <h1 className="headtext__cormorant">Our Services</h1>
  
        <div className="app__Service_features">
          {data.features.map((feature) => <FeatureCard feature={feature} key={feature.title} />)}
        </div>
      </div>
  
      <div className="app__wrapper_img">
        <img src={images.Service} alt="service" />
      </div>
    </div>
  );
  


export default Service;
 



