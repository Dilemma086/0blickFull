import { useState, useEffect, useRef } from 'react';
import './Block7.css';
import { ReactComponent as Angular } from  './assets/angular-icon-svgrepo-com.svg';
import { ReactComponent as Postgresql } from  './assets/postgresql-svgrepo-com.svg';
import { ReactComponent as Next } from  './assets/next-dot-js-svgrepo-com.svg';

const Block7 = () => {
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Новое состояние для видимости блока
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
      className={`block7 ${isVisible ? 'visible' : ''}`} 
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
      <div className='block7_main'>
        <p>Используем 50+ мощных иструментов для работы</p>
        <div className='best_prog'>
          <div class="has-tooltip">
            <svg fill="none" class="transition-transform hover:scale-110" viewBox="-10.5 -9.4 21 18.9">
              <circle r="2" fill="#00D8FF"></circle>
              <g stroke="#00D8FF">
                <ellipse rx="10" ry="4.5"></ellipse>
                <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
              </g>
            </svg>
          </div>
          <div className="has-tooltip">
          <svg fill="none" viewBox="0 0 400 400" class="transition-transform hover:scale-110">
            <path fill="#E44D26" d="M56 360 24 0h353l-32 360-145 40"></path>
            <path fill="#F16529" d="M200 369V30h145l-28 307"></path>
            <path fill="#EBEBEB" d="M90 74h110v44h-62l4 45h58v44h-98L90 74Zm14 155h44l3 35 49 14v46l-90-26"></path>
            <path fill="#fff" d="M311 74H200v44h107l4-44Zm-8 89H200v44h55l-6 57-49 14v46l91-26"></path>
            </svg>
          </div>
          <div className="has-tooltip">
            <svg fill="none" viewBox="0 0 400 400" class="transition-transform hover:scale-110">
              <path fill="#539E43" d="M200 400c-5 0-10-1-15-4l-49-29c-7-4-3-6-1-6l22-10h3l38 23h4l147-85 2-4V115l-2-4-147-84h-4L51 111l-2 4v170l2 4 40 23c22 11 36-2 36-15V130c0-2 1-5 4-5h19c2 0 4 2 4 5v167c0 29-16 46-43 46-9 0-15 0-34-9l-39-22c-9-6-15-16-15-27V116c0-11 6-22 15-27L185 4c9-5 22-5 31 0l147 85c9 5 15 16 15 27v169c0 11-6 21-15 27l-147 85c-5 2-10 3-16 3Zm46-116c-65 0-78-30-78-55 0-2 2-4 5-4h19c2 0 4 1 4 3 3 20 11 29 50 29 31 0 44-7 44-23 0-10-4-17-52-21-40-4-65-13-65-45 0-30 25-48 67-48 47 0 70 17 73 52l-1 3-3 2h-19c-2 0-4-2-4-4-4-20-16-27-46-27-34 0-38 12-38 21 0 11 5 14 51 20 45 6 66 14 66 46s-27 51-73 51Z"></path>
            </svg>
          </div>
          <div className="has-tooltip">
            <svg class="transition-transform hover:scale-110" fill="none" viewBox="0 0 400 400"><path fill="url(#a)" d="M199 1c-102 0-96 44-96 44v46h97v13H65S0 97 0 199c0 103 57 99 57 99h34v-47s-2-57 55-57h96s54 1 54-52V54s9-53-97-53Zm-54 31a17 17 0 1 1 0 35 17 17 0 0 1 0-35Z"></path><path fill="url(#b)" d="M201 399c102 0 96-44 96-44v-46h-97v-13h135s65 7 65-96c0-102-57-98-57-98h-34v47s2 57-55 57h-96s-54-1-54 52v88s-9 53 97 53Zm54-31a17 17 0 1 1 0-35 17 17 0 0 1 0 35Z"></path><defs><linearGradient id="a" x1="38.4" x2="236.7" y1="36.8" y2="233" gradientUnits="userSpaceOnUse"><stop stop-color="#387EB8"></stop><stop offset="1" stop-color="#366994"></stop></linearGradient><linearGradient id="b" x1="160.1" x2="373" y1="162.8" y2="364" gradientUnits="userSpaceOnUse"><stop stop-color="#FFE052"></stop><stop offset="1" stop-color="#FFC331"></stop></linearGradient></defs></svg>
          </div>
          <div className="has-tooltip">
            <svg class="transition-transform hover:scale-110" fill="none" viewBox="0 0 400 400"><path fill="#649AD2" d="M378 118c0-7-2-13-4-18-3-5-8-9-13-13L218 5c-12-7-25-7-37 1L39 87c-11 7-17 17-17 31v164c0 7 1 13 4 18s7 9 13 13l142 81c12 8 25 8 37 1l143-82c6-4 10-8 13-13s4-11 4-18V118Z"></path><path fill="#004482" d="M200 199 26 300c3 5 7 9 13 13l142 81c12 8 25 8 37 1l143-82c6-4 10-8 13-13L200 199Z"></path><path fill="#1A4674" d="M149 229a59 59 0 0 0 102 0l-51-30-51 30Z"></path><path fill="#01589C" d="M378 118c0-7-2-13-4-18l-174 99 174 101c3-5 4-11 4-18V118Z"></path><path fill="#fff" d="M368 207h-13v13h-14v-13h-13v-14h13v-13h14v13h13v14ZM200 82c43 0 81 23 102 58v1l-51 29a59 59 0 1 0 0 59l52 30A118 118 0 1 1 200 82Zm105 98v13h14v14h-14v13h-13v-13h-14v-14h14v-13h13Z"></path></svg>
          </div>
          <div className="has-tooltip">
            <Angular />
          </div>
          <div className="has-tooltip">
            <Postgresql />
          </div>
          <div className="has-tooltip">
            <Next />
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Block7;