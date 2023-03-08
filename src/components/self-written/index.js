import React, { useEffect, useRef } from "react";
import Typed from 'typed.js';

const SelfWritten = () => {
    const el = useRef(null);
    const typed = useRef(null);
    useEffect(() => {
        const options = {
            strings: [
            'Front-end',
            'JS Fluente',
            'React JS'
        ],
            loop: true,
            typeSpeed: 100,
            backSpeed: 80,
            backDelay: 1200
        };
   typed.current = new Typed(el.current, options);
    
    return () => {
      typed.current.destroy();
    }
  }, [])

  return (
    <span ref={el}/>
  );
}

export default SelfWritten;