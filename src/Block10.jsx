import { useState, useEffect, useRef } from 'react';
import './Block10.css';

import data from './data.json';

const Block10 = () => {
  const [reviews, setReviews] = useState(data);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const blockRef = useRef(null);
      

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const currentRef = blockRef.current; 
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);  }
          });
        },
        { threshold: 0.1 } 
      );
  
      if (currentRef) {
        observer.observe(currentRef);
      }
  
      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }, [hasBeenVisible]);
    
  return (
    <section 
    className={`block10 ${isVisible ? 'visible' : ''}`} 
    ref={blockRef}
  >
      <svg className="h-full w-full stroke-gray-100">
        <rect width="100%" height="100%" fill="url(#grid-2)"></rect>
        <defs>
          <pattern id="grid-2" width="145" height="145" x="50%" y="-1" patternUnits="userSpaceOnUse">
            <path fill="none" d="M.5 200V.5H200"></path>
          </pattern>
        </defs>
      </svg>
      <div className='block10_main' style={{ height: isExpanded ? 'auto' : '600px' }}>
        <div className='reviews'>
          <ul className='space'>
            {reviews.slice(0,6).map((item, index)=>(
             
            <li key={index}>
              <figure>
                <figcaption>
                  <img src={`${item.img}`} alt={item.name} />
                  <div className='persona'>
                    <div className='name'>{item.name}</div>
                    <div className='jobs'>{item.jobs}</div>
                  </div>
                </figcaption>
                <blockquote>
                  <p>{item.text}</p>
                </blockquote>
              </figure>
            </li>
            ))}
            
          </ul>
          <ul className='space'>
          {reviews.slice(7,13).map((item, index)=>(
             
             <li key={index}>
               <figure>
                 <figcaption>
                   <img src={`${item.img}`} alt={item.name} />
                   <div className='persona'>
                     <div className='name'>{item.name}</div>
                     <div className='jobs'>{item.jobs}</div>
                   </div>
                 </figcaption>
                 <blockquote>
                   <p>{item.text}</p>
                 </blockquote>
               </figure>
             </li>
             ))}
          </ul>
          <ul className='space'>
          {reviews.slice(14,20).map((item, index)=>(
             
             <li key={index}>
               <figure>
                 <figcaption>
                   <img src={`${item.img}`} alt={item.name} />
                   <div className='persona'>
                     <div className='name'>{item.name}</div>
                     <div className='jobs'>{item.jobs}</div>
                   </div>
                 </figcaption>
                 <blockquote>
                   <p>{item.text}</p>
                 </blockquote>
               </figure>
             </li>
             ))}
          </ul>
        </div>
        <div className='blockbtn'>
          <button className='btn' onClick={toggleExpand}>
            {isExpanded ? 'Свернуть' : 'Показать больше ...'}
          </button>
        </div>
        
      </div>
    </section>
  )
}

export default Block10;