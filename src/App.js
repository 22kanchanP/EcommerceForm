import React from 'react';
import ContinuousHorizontalScroll from './ContinuousHorizontalScroll';

import Footer from './Footer';
import Body from './Body';

import "./css.css"
import Routing from './Routing';
import Footer2 from './Footer2';

const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg',
  'image5.jpg'
  // Add more image URLs as needed
];

const App = () => {
  return (
    <div>
      
      <ContinuousHorizontalScroll images={images} />

      <Footer></Footer>
      <Body></Body>

      <Footer2></Footer2>

      

      <Routing></Routing>
    </div>
  );
};

export default App;
