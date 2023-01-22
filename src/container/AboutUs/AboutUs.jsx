import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">The  Gourmet Restaurant & Bar is the most intriguing venue with lots to offer. The old crown court has been revamped into a vibrant dining restaurant & bar. The restaurant offers a global inspired menu accompanied by mind blowing cocktails, before effortlessly morphing in to one of the hottest parties by night.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history"> 
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">During the period between 1826 and 1873, it was used as both a courtroom and a public meeting space. Today, the building houses Newport's Historical Society museum on the second floor while the first floor has been converted into the Gourmet Courthouse restaurant.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
