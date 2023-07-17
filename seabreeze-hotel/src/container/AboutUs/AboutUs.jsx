import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.S} alt="S letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.line} alt="about_line" className="line__img" />
        <p className="p__opensans">At Seabreeze Hotel, we understand the importance of delivering personalized experiences, be it for weddings, corporate gatherings, or leisure vacations. Our dedicated team of professionals strives to exceed your expectations, combining warm Sri Lankan hospitality with modern amenities and services.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_Pen flex__center">
        <img src={images.Pen} alt="about_Pen" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.line} alt="about_line" className="line__img" />
        <p className="p__opensans">As we look back on our journey, we cherish the countless memories created within our walls. Seabreeze Hotel continues to grow, evolve, and welcome guests from all corners of the globe. We remain committed to preserving the charm of Mannar while providing unparalleled event management and hospitality experiences for generations to come.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
