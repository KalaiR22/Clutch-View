import React, { useState, useRef, useEffect } from 'react';
import eyeUp from '../component/images/eye-up.png';
import eyeDown from '../component/images/eye-down.png';
import eyeCenter from '../component/images/eye-center.png';
import eyeCenterB from '../component/images/eye-center-b.png';
import RightIcons from './RightIcons';

export default function EyeMoveCng() {
     const [hovering, setHovering] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const images = [eyeCenter, eyeUp, eyeDown, eyeCenterB]; // Use imported image variables
  const intervalIdRef = useRef(null); // Declare intervalIdRef using useRef
 
   useEffect(() => {
    startOrResetAnimation(); // Start animation when component mounts
    return () => stopAnimation(); // Clean up by stopping animation when component unmounts
  }, []);

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  const startOrResetAnimation = () => {
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = setInterval(() => {
      setImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 1000); // Change image every 1000 milliseconds (1 second)
  };

  const stopAnimation = () => {
    clearInterval(intervalIdRef.current);
    setImageIndex(0); // Reset image index when hovering is false
  };
  return (
    <div>
    <div
      className={`eye-move ${hovering ? 'hovering' : ''}`} // Toggle 'hovering' class based on hovering state
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundImage: `url(${images[imageIndex]})` }}
    ></div>
    <div>
      <RightIcons/>
    </div>
    </div>
  )
}
