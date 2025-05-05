import { useState, useEffect, useRef } from 'react';
import './Block8.css';
import { LuArrowBigUpDash } from "react-icons/lu";
import { MdOutlineMonitorHeart } from "react-icons/md";
import { FaConnectdevelop } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import map from "./assets/6809137e0cdf0a000d871538.png"

const Block8 = () => {
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
      className={`block8 ${isVisible ? 'visible' : ''}`} 
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
      <div className='block8_main'>
        <span className="from-primary-600"></span>
        <span className="purple-500">3</span>
        <h4>Анализ</h4>
        <h5>Мониторинг, обновления</h5>
        <p>Добавление новых модулей и функций для расширения возможностей системы. Рефакторинг кода для повышения производительности и устранения ошибок.</p>
        <div className='monitoring'>
          <div className='descript'>
              <span><LuArrowBigUpDash/></span>
              <h4>Обновления</h4>
              <p>Добавление новых модулей и функций для расширения возможностей системы. Рефакторинг кода для повышения производительности и устранения ошибок.</p>
              <span><MdOutlineMonitorHeart /></span>
              <h4>Мониторинг и анализ</h4>
              <p>Логирование ошибок с использованием инструментов типа Sentry или ELK Stack для быстрого обнаружения и устранения проблем.</p>
              <span><FaConnectdevelop/></span>
              <h4>Обратная связь и развитие</h4>
              <p>Сбор и анализ отзывов пользователей для понимания их потребностей и предпочтений.</p>
              <span><MdOutlineSecurity/></span>
              <h4>Безопасность и стабильность</h4>
              <p>Регулярное обновление системы для устранения уязвимостей и обеспечения безопасности данных.</p>
          </div>
          <div className='actionsfera'>
            <img src={map} alt='map'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Block8;