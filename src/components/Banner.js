import React from 'react';
import "../styles/Banner.css";
import bannerPic from '../assets/images/DN9A8934.jpg'

export default function Banner() {
  return (
    <div className="banner-pic">
      <img
        src={bannerPic}
        alt="Mitchel Wachtel with his wife and child"
      />
    </div>
  );
}
