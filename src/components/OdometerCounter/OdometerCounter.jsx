import React, { useEffect, useRef, useState } from 'react';
import Odometer from 'odometer';
import { useInView } from 'react-intersection-observer';
import 'odometer/themes/odometer-theme-default.css';

const OdometerCounter = ({ value }) => {
  const ref = useRef(null);
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const combinedRef = (node) => {
    ref.current = node;
    inViewRef(node);
  };

  useEffect(() => {
    if (inView) {
      const od = new Odometer({
        el: ref.current,
        value: 0,
        duration: 2000,
        format: '(,ddd)',
      });

      od.update(value);
    }
  }, [inView, value]);

  return <span ref={combinedRef}>0</span>;
};

export default OdometerCounter;
