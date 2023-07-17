import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase The New Exprience" />
      <h1 className="app__header-h1">Crafting Unforgettable Moments</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Welcome to Seabreeze Hotel, your gateway to unforgettable experiences in the serene paradise of Mannar, Sri Lanka. We take immense pride in providing exceptional event management and hospitality services, ensuring that every moment spent with us becomes a cherished memory. </p>
      <button type="button" className="custom__button">Explore Events</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.Welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
