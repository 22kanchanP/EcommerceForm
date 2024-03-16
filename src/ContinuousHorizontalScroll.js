import React from 'react';
import './ContinuousHorizontalScroll.css'; // Import your CSS file for styling

const ContinuousHorizontalScroll = ({ images }) => {
  return (
    <div className="continuous-horizontal-scroll">
      <div className="image-container">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`image-${index}`} />
        ))}
        {/* Duplicate images to create a seamless loop */}
        {images.map((image, index) => (
          <img key={`duplicate-${index}`} src={image} alt={`image-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default ContinuousHorizontalScroll;