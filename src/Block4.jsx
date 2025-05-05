import React, { useState, useEffect, useRef } from 'react';
import './Block4.css';
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import jsimage from './assets/jsimage.jpg'

const Block4 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animations, setAnimations] = useState({
    codeLine: false,
    jsBlock: false,
    fadeInBlock: false,
    challenges: Array(6).fill(false),
    typingText: '',
    typingComplete: false
  });
  
  const blockRef = useRef(null);
  const observerRef = useRef(null);
  const textToType = '<Game details={data} />';
  const typingSpeed = 200; // скорость печати в ms

  useEffect(() => {
    
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Запускаем первую анимацию
            setAnimations(prev => ({...prev, codeLine: true}));
            
            // Начинаем печатать текст
            let i = 0;
            const typingInterval = setInterval(() => {
              if (i < textToType.length) {
                setAnimations(prev => ({
                  ...prev,
                  typingText: prev.typingText + textToType.charAt(i)
                }));
                i++;
              } else {
                clearInterval(typingInterval);
                setAnimations(prev => ({...prev, typingComplete: true}));
                
                // Запускаем остальные анимации после завершения печати
                setTimeout(() => {
                  setAnimations(prev => ({...prev, jsBlock: true}));
                  
                  setTimeout(() => {
                    setAnimations(prev => ({...prev, fadeInBlock: true}));
                    
                    // Анимация для каждого challenge по очереди
                    animations.challenges.forEach((_, index) => {
                      setTimeout(() => {
                        setAnimations(prev => {
                          const newChallenges = [...prev.challenges];
                          newChallenges[index] = true;
                          return {...prev, challenges: newChallenges};
                        });
                      }, index * 300);
                    });
                  }, 1000);
                }, 1500);
              }
            }, typingSpeed);
            
            // Отключаем observer после первого срабатывания
            observerRef.current.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (blockRef.current) {
      observerRef.current.observe(blockRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const CheckIcon = ({ visible }) => (
    <svg 
      stroke="currentColor" 
      fill={visible ? "currentColor" : "transparent"} 
      strokeWidth="0" 
      viewBox="0 0 16 16" 
      height="1em" 
      width="1em"
      className={`transition-all duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
    >
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
      <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"></path>
    </svg>
  );


  return (
    <section className={`block4 ${isVisible ? 'visible' : ''}`}  ref={blockRef}>
      <svg className="h-full w-full stroke-gray-100">
        <rect width="100%" height="100%" fill="url(#grid-2)"></rect>
        <defs>
          <pattern id="grid-2" width="145" height="145" x="50%" y="-1" patternUnits="userSpaceOnUse">
            <path fill="none" d="M.5 200V.5H200"></path>
          </pattern>
        </defs>
      </svg>
      <div className='block4_main'>
        <span className="from-primary-600"></span>
        <span className="purple-500">2</span>
        <h4>Разработка</h4>
        <h5>Комплексное Кодирование</h5>
        <p>Реализуем серверную часть с интеграцией внешних сервисов и клиентские интерфейсы с адаптивным дизайном.</p>
        <div className='backend'>
          <div className='order-3'>
            <div className='w-full'>
              <div className='aspect'>
                <div className='rounded'>
                  <div className='block-left'>
                    <div className='headwindow'>
                      <div className='bg-circle'>
                        <div className="bg-red"></div>
                        <div className="bg-yellow"></div>
                        <div className="bg-green"></div>
                      </div>
                      <div className='tab'>
                        index.jsx
                      </div>
                    </div>
                    <div className='codeblock'>
                      <div className='number'>
                        <span>05</span>
                        <span>06</span>
                        <span>07</span>
                        <span>08</span>
                        <span>09</span>
                        <span>10</span>
                        <span>11</span>
                        <span>12</span>
                        <span>13</span>
                        <span>14</span>
                        <span>15</span>
                        <span>16</span>
                        <span>17</span>
                      </div>
                      <code className="code">
                        <span className="text-gray-500">....</span>
                        <span className="inline">
                          <span className="font-semibold">export function </span>
                          <span>({'{'} data {'}'}) =&gt; {'{'}</span>
                        </span>
                        <span>
                          <span>&nbsp;&nbsp;</span>
                          <span className="font-semibold">return&nbsp;</span>
                          <span>&lt;</span>
                          <span className="purple">Layout</span>
                          <span>&gt;</span>
                        </span>
                        {animations.codeLine && (
                          <span className="typing-text">
                            {animations.typingText}
                            <span className="typing-cursor">|</span>
                          </span>
                        )}
                        <span>
                          <span>&nbsp;&nbsp;</span>
                          <span>&lt;/</span>
                          <span className="purple">Layout</span>
                          <span>&gt;</span>
                        </span>
                        <span>{'}'}</span>
                        <span className="text-gray-500">....</span>
                      </code>
                    </div>
                    <div className="blockchallenge">
                      <span>6/6 challenges completed</span>
                      <ul>
                        {animations.challenges.map((visible, index) => (
                          <li key={index}>
                            <CheckIcon visible={visible} />
                          </li>
                        ))}
                      </ul>

                        </div>
                  </div>
                  <div className='block-right'>
                    <div className={`jsblock transition-opacity duration-500 ${animations.jsBlock ? 'opacity-100' : 'opacity-0'}`}>
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"></path>
                      </svg>
                      <img src={jsimage} alt='jsimage'/>
                    </div>
                    <div className='headwindow'>
                      <HiOutlineArrowNarrowLeft />
                    </div>
                    <div className={`animate-fade-in transition-opacity duration-500 ${animations.fadeInBlock ? 'opacity-100' : 'opacity-0'}`}>
                      <span className="tracking">Реализация + Интеграция </span>
                      <div className="grid-cols-12">
                        <span className="bg-red"></span>
                        <span className="bg-transparent"></span>
                        <span className="bg-transparent"></span>
                        <span className="bg-yellow"></span>
                        <span className="bg-yellow"></span>
                        <span className="bg-transparent"></span>
                        <span className="bg-transparent"></span>
                        <span className="bg-transparent"></span>
                        <span className="bg-green"></span>
                        <span className="bg-transparent"></span>
                        <span className="bg-cyan"></span>
                        <span className="bg-cyan"></span>
                        <span className="bg-red"></span>
                        <span className="bg-red"></span>
                        <span className="bg-red"></span>
                        <span className="bg-yellow"></span>
                        <span className="bg-yellow"></span>
                        <span className="bg-transparent"></span>
                        <span className="bg-green"></span>
                        <span className="bg-green"></span>
                        <span className="bg-green"></span>
                        <span className="bg-transparent"></span>
                        <span className="bg-cyan"></span>
                        <span className="bg-cyan"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='order-1'>
            <span class="line_solid"></span>
            <span class="rounded-full"></span>
            <span class="linebroken"></span>
          </div>
          <div className='order-2'>
            
            <svg fill="none" viewBox="0 0 186 186">
              <defs><linearGradient id="LearnSvgGradient">
                <stop offset="5%" stop-color="#4f46e5"></stop>
                <stop offset="95%" stop-color="#c084fc"></stop>
                </linearGradient>
              </defs>
              <path fill="url(#LearnSvgGradient)" d="M17.438 0A17.437 17.437 0 000 17.438v81.374a17.438 17.438 0 0017.438 17.438H69.75v11.625H11.625A11.626 11.626 0 000 139.5v34.875A11.625 11.625 0 0011.625 186h162.75A11.625 11.625 0 00186 174.375V139.5a11.625 11.625 0 00-11.625-11.625H116.25V116.25h52.312A17.439 17.439 0 00186 98.812V17.439A17.438 17.438 0 00168.562 0H17.437zm0 11.625h151.124a5.814 5.814 0 015.813 5.813v81.374a5.813 5.813 0 01-5.813 5.813H17.437a5.812 5.812 0 01-5.812-5.813V17.439a5.813 5.813 0 015.813-5.813zM139.5 145.312a5.813 5.813 0 1111.626 0 5.813 5.813 0 01-11.626 0zm23.25 0a5.813 5.813 0 1111.626 0 5.813 5.813 0 01-11.626 0zM17.437 139.5h58.126a5.812 5.812 0 110 11.625H17.437a5.812 5.812 0 110-11.625zm-5.812 26.156a2.906 2.906 0 012.906-2.906H78.47a2.906 2.906 0 110 5.812H14.53a2.906 2.906 0 01-2.906-2.906z"></path>
              <rect width="114" height="9" x="27" y="37" rx="4.5"></rect>
              <rect width="69" height="9" x="27" y="54" rx="4.5"></rect>
              <rect width="114" height="9" x="27" y="71" rx="4.5"></rect>
            </svg>
            <h3 class="text-2">Бэкенд</h3>
            <p class="leading-relaxed">Ядро вашего проекта. Мы разрабатываем и внедряем надежные и масштабируемые решения на базе Python/Django, Node.js, Java/Spring и других технологий. Интегрируем системы оплаты, CRM (в том числе AmoCRM) и 1С для полной автоматизации бизнес-процессов. Наш приоритет - стабильность, безопасность и высокая производительность.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Block4;