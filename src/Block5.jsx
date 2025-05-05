import React, { useState, useEffect, useRef } from 'react';
import './Block5.css';
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import avatar_man from './assets/22637.jpg'
import avatar_wom from './assets/35247489.jpg'

const Block5 = () => {
  const [animations, setAnimations] = useState({
    message1: false,
    message2: false,
    codeLine: false,
    svgVisible: false,
    typingText: '',
    typingText2: '', 
    typingComplete: false
  });
  
  const blockRef = useRef(null);
  const observerRef = useRef(null);
  const typingIntervalRef = useRef(null);
  const textToType = 'Если Вы столкнулись с трудностями, то мы поможем с любым заданием.';
  const textToType2 = `return str(p1) + str(p2)`; // Упрощаем текст без HTML тегов
  const typingSpeed = 50; 
  
  const startTyping = (text, fieldName, onComplete) => {
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
    }
    
    let i = 0;
    typingIntervalRef.current = setInterval(() => {
      if (i < text.length) {
        setAnimations(prev => ({
          ...prev,
          [fieldName]: text.substring(0, i + 1)
        }));
        i++;
      } else {
        clearInterval(typingIntervalRef.current);
        if (onComplete) onComplete();
      }
    }, typingSpeed);
  };
  
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setAnimations(prev => ({...prev, message1: true}));
            
            // Начинаем печатать первый текст
            startTyping(textToType, 'typingText', () => {
              setAnimations(prev => ({...prev, typingComplete: true}));
              
              setTimeout(() => {
                setAnimations(prev => ({...prev, message2: true}));
                
                setTimeout(() => {
                  setAnimations(prev => ({...prev, codeLine: true}));
                  
                  // Начинаем печатать второй текст
                  startTyping(textToType2, 'typingText2', () => {
                    setTimeout(() => {
                      setAnimations(prev => ({...prev, svgVisible: true}));
                    }, 1000);
                  });
                }, 1000);
              }, 500);
            });
            
            observerRef.current.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (blockRef.current) {
      observerRef.current.observe(blockRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
    };
  }, []);

  return (
    <section className='block5' ref={blockRef}>
      <svg className="h-full w-full stroke-gray-100">
        <rect width="100%" height="100%" fill="url(#grid-2)"></rect>
        <defs>
          <pattern id="grid-2" width="145" height="145" x="50%" y="-1" patternUnits="userSpaceOnUse">
            <path fill="none" d="M.5 200V.5H200"></path>
          </pattern>
        </defs>
      </svg>
      <div className='block5_main'>
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
                        main.jsx
                      </div>
                    </div>
                    <div className='codeblock'>
                      <div className='number'>
                        <span>01</span>
                        <span>02</span>
                        <span>03</span>
                        <span>04</span>
                        <span>05</span>
                        <span>06</span>
                        <span>07</span>
                        <span>08</span>
                      </div>
                      <code>
                        <span className="font-opacity"># Concatenate the parameters</span><br/>
                        <span>
                          <span>def</span>
                          <span className="font-semibold">&nbsp;concat</span>
                          <span>(p1,p2)</span>
                          <span>:</span><br/>
                        </span>
                        <span>&nbsp;&nbsp;
                          {animations.codeLine ? (
                            <span className="typing-text">
                              {animations.typingText2}
                            </span>
                          ) : (
                            <span className="font-opacity invisible">// Your code here</span>
                          )}
                        </span><br/><br/>
                        <span>
                          <span>param_1</span>
                          <span>&nbsp;=&nbsp;</span>
                          <span className="font-semibold">13</span>
                        </span><br/>
                        <span>
                          <span>param_2</span>
                          <span>&nbsp;=&nbsp;</span>
                          <span className="font-semibold">37</span>
                        </span><br/>
                        <span>
                          <span className="font-semibold">print</span>
                          <span>(</span>
                          <span className="font-semibold">concat</span>
                          <span>(param_1,param_2))</span>
                        </span>
                      </code>
                    </div>
                    <div className={`mess_block_w ${animations.message2 ? 'opacity-100' : 'opacity-0 transition-opacity duration-500'}`}>
                      <span>Решение вопроса займет некоторое время...</span>
                      <div className="profile">
                        <div className="imageblock">
                          <img src={avatar_wom} alt="avatar_wom" />
                        </div>
                        <span>Ольга</span>
                      </div>
                    </div>
                  </div>
                  <div className='block-right_2'>
                    <div className='mess_block'>
                        <span className="typing-text">{animations.typingText}</span>
                      <div className="profile">
                        <div className="imageblock">
                          <img src={avatar_man} alt="avatar_man" />
                        </div>
                        <span>Иван</span>
                      </div>
                    </div>
                    <div className='headwindow'>
                      <HiOutlineArrowNarrowLeft />
                    </div>
                    <div className='animate-fade-in'>
                      {animations.svgVisible ? (
                        <svg stroke="currentColor" style={{opacity: 1}} fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em">
                          <path d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zM2 1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm0 8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm.854-3.646a.5.5 0 0 1-.708 0l-1-1a.5.5 0 1 1 .708-.708l.646.647 1.646-1.647a.5.5 0 1 1 .708.708zm0 8a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647 1.646-1.647a.5.5 0 0 1 .708.708zM7 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"></path>
                        </svg>
                      ): <svg></svg>}
                      <div className="block-end_fdat">
                        <span><b>$shell:</b> Output → 1337</span>
                        <span><b>$shell:</b> Success! 🎉</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='order-1'>
            <span className="linebroken"></span>
            <span className="rounded-full"></span>
            <span className="line_solid"></span>
          </div>
          <div className='order-2'>
            <svg stroke="currentColor" fill="url(#LearnSvgGradient)" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em">
              <defs><linearGradient id="LearnSvgGradient">
                <stop offset="5%" stopColor="#4f46e5"></stop>
                <stop offset="95%" stopColor="#c084fc"></stop>
                </linearGradient>
              </defs>
              <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135"></path>
              <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5"></path>
            </svg>
            <h3 className="text-2">Фронтенд</h3>
            <p className="leading-relaxed">Мы создаем интуитивно понятные и привлекательные веб-интерфейсы с помощью HTML/CSS и современных фреймворков React и Vue.js. Обеспечиваем идеальную адаптивность под мобильные устройства, гарантируя комфортную работу вашего сайта или приложения на любом экране.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Block5;