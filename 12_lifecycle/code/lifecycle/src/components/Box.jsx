import React, { useState, useEffect } from 'react';
import './Box.css';

const Box = ({ size }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsVisible(false), 4000);
    return () => clearTimeout(timeoutId);
  }, []);

  return isVisible ? <div className={`box box-${size}`} /> : null;
};

export default Box;
