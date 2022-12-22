import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
//import { useInView } from 'framer-motion';
import '../Styles/Section.css';

 const Section = ({ children }) => {

    //is element in view state:
    const [isInView, setIsInView] = useState(false);
    
    //refference to the element:
    const ref = useRef();
    
    //alternative:
    //const isInView = useInView(ref);
    
    //changing isInView state based on element intersection:
    useEffect(()=> {
      
      const callback = (entries) => 
        entries.forEach((entry) => {
            setIsInView(entry.isIntersecting);
        })

      const observer = new IntersectionObserver(callback);
      observer.observe(ref.current);
    },[])

    return (
      //change the class based on element intersection: [note: you can do this by inline styling]
      <div ref={ref} className={`page${isInView ? " show" : ""}`}>
          {children}
      </div>
    );
}

export default Section;