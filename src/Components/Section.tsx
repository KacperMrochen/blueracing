import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
//import { useInView } from 'framer-motion';
import '../Styles/Section.css';

  type Props = {
    children: JSX.Element,
  }

 const Section = ({ children }: Props) => {

    //is element in view state:
    const [isInView, setIsInView] = useState(false);
    
    //refference to the element:
    const ref = useRef<HTMLDivElement | null>(null);
    
    //alternative:
    //const isInView = useInView(ref);
    
    //changing isInView state based on element intersection:
    useEffect(()=> {
      
      const callback = (entries:IntersectionObserverEntry[]) => 
        entries.forEach((entry) => {
            setIsInView(entry.isIntersecting);
        })

      const observer = new IntersectionObserver(callback);
      if (ref.current) {
        observer.observe(ref.current);
      }
    },[])

    return (
      //change the class based on element intersection: [note: you can do this by inline styling]
      <div ref={ref} className={`page${isInView ? " show" : ""}`}>
          {children}
      </div>
    );
}

export default Section;