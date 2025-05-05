import { useState, useEffect, useRef } from 'react';
import './Block9.css';

const Block9 = () => {
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const blockRef = useRef(null);
      
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
      className={`block9 ${isVisible ? 'visible' : ''}`} 
      ref={blockRef}
    >
      <div className='linetotal'>
        <div className='meaning'>
          <p>30+</p>
          <span>Разработок</span>
        </div>
        <div className='meaning'>
          <p>14+</p>
          <span>Внедрений ИС</span>
        </div>
        <div className='meaning'>
          <p>74+</p>
          <span>Доработанных проектов</span>
        </div>
        <div className='meaning'>
          <p>40+</p>
          <span>Поддержка ИР</span>
        </div>
      </div>
      
    </section>
  )
}

export default Block9;