import React from 'react';

import { AboutUs, Event, FindUs, Footer, Gallery, Header, Intro, Service, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Event/>
    <Intro />
    <Service/>
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
