import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Event.css';

const Event = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.event} alt="event_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Coordinator's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__event-content">
        <div className="app__event-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">There are some people who live in a dream world, and there are some who face reality; and then there are those who turn one into the other.</p>
        </div>
        <p className="p__opensans"> SeaBreeze is one of the best Wedding and Event management in mananr. which offers wedding decorations, party planning, photographs and catering services. </p>
      </div>

      <div className="app__event-sign">
        <p>Mr.Fernado</p>
        <p className="p__opensans">Event & Coordinator</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Event;