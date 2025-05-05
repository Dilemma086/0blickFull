import { useState, useEffect, useRef } from 'react';
import './Block3.css';
import avatar from './assets/1742921543637.jpg';

const TypewriterText = ({ text, speed = 60, startTyping }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!startTyping) return;
    
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, speed);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, startTyping]);

  return <span>{displayedText}</span>;
};

const Block3 = () => {
  const [visibleBlocks, setVisibleBlocks] = useState([false, false, false]);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Новое состояние для видимости блока
  const blockRef = useRef(null);

  useEffect(() => {
    const currentRef = blockRef.current; 
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Активируем анимацию появления
            
            if (!hasBeenVisible) {
              setHasBeenVisible(true);
              
              // Активируем первый блок
              setVisibleBlocks([true, false, false]);
              
              // Через время активируем второй блок
              setTimeout(() => {
                setVisibleBlocks([true, true, false]);
                
                // Через время активируем третий блок
                setTimeout(() => {
                  setVisibleBlocks([true, true, true]);
                }, 7000);
              }, 11000);
            }
          }
        });
      },
      { threshold: 0.1 } // Уменьшил порог для более раннего срабатывания
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
      className={`block3 ${isVisible ? 'visible' : ''}`} 
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
      <div className='block3_main'>
        {/* Остальной код без изменений */}
        <h3>Пройдите путь с нами</h3>
        <span className="from-primary-600"></span>
        <span className="purple-500">1</span>
        <h4>Анализ и планирование</h4>
        <h5>План Для Разработки</h5>
        <p>Начальный этап, где определяют цели системы, целевую аудиторию и функционал. Проводят интервью с заказчиком, анализируют текущие процессы, формируют ТЗ и выбирают технологии.</p>
        <div className='analysisstage'>
          {visibleBlocks[0] && (
            <div className='messageblock'>
              <TypewriterText 
                text="Для начала определим цели: задачи системы (автоматизация процессов, аналитика, CRM, ERP и т.д.); целевая аудитория (внутренние сотрудники, клиенты, партнеры)." 
                startTyping={visibleBlocks[0]}
              />
              <div className='profile'>
                <div className='imageblock'>
                  <img src={avatar} alt="avatar" />
                </div>
                <span>Юлия</span> 
              </div>
            </div>
          )}
          
          {visibleBlocks[1] && (
            <div className='messageblock'>
              <TypewriterText 
                text="Сбор требований: интервью с заказчиком и сотрудниками; анализ существующих процессов и проблем."
                startTyping={visibleBlocks[1]}
              />
              <div className='profile'>
                <div className='imageblock'>
                  <img src={avatar} alt="avatar" />
                </div>
                <span>Юлия</span> 
              </div>
            </div>
          )}
          
          {visibleBlocks[2] && (
            <div className='messageblock'>
              <TypewriterText 
                text="Техническое задание: детальное описание функционала; выбор технологий (языки, фреймворки, СУБД)."
                startTyping={visibleBlocks[2]}
              />
              <div className='profile'>
                <div className='imageblock'>
                  <img src={avatar} alt="avatar" />
                </div>
                <span>Юлия</span> 
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Block3;