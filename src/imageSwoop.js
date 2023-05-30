import React, { useState, useEffect } from 'react';

const ImageSwapper = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(images[currentIndex]);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsHidden(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsHidden(false);
      }, 500);
    }, 11000);

    return () => clearInterval(interval);
  }, [images]);

  useEffect(() => {
    setCurrentImage(images[currentIndex]);
  }, [currentIndex, images]);

  return (
    <div className="image-swapper">
      <img
        src={currentImage}
        alt="Swapping Image"
        className={`swoop-animation ${isHidden ? 'fade-animation hide' : 'fade-animation'}` }
      />
    </div>
  );
};

export default ImageSwapper;
