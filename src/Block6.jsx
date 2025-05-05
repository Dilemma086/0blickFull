import React, { useState, useEffect, useRef } from 'react';
import './Block6.css';
import { MdOutlineInstallDesktop } from "react-icons/md";
import { LuDatabaseBackup } from "react-icons/lu";
import { GrSupport } from "react-icons/gr";
import { BsFileCode } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosArrowRoundBack } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";
import { TbFolderCog } from "react-icons/tb";
import Techno from './assets/744617821385.png'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const Block6 = () => {
  const [animations, setAnimations] = useState({
    typingText: '',
    showTechno: false,
    showSuggestions: false,
    showAnalysis: false,
    showSummary: false,
    showGenerated: false
  });

  const blockRef = useRef(null);
  const observerRef = useRef(null);
  const typingIntervalRef = useRef(null);
  
  const textToType = '<The hero strikes first />';
  const typingSpeed = 50;

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Начинаем печатать текст
            let i = 0;
            typingIntervalRef.current = setInterval(() => {
              if (i < textToType.length) {
                setAnimations(prev => ({
                  ...prev,
                  typingText: textToType.substring(0, i + 1)
                }));
                i++;
              } else {
                clearInterval(typingIntervalRef.current);
                
                // Последовательно показываем остальные элементы
                setTimeout(() => {
                  setAnimations(prev => ({...prev, showTechno: true}));
                  
                  setTimeout(() => {
                    setAnimations(prev => ({...prev, showSuggestions: true}));
                    
                    setTimeout(() => {
                      setAnimations(prev => ({...prev, showAnalysis: true}));
                      
                      setTimeout(() => {
                        setAnimations(prev => ({...prev, showSummary: true}));
                        
                        setTimeout(() => {
                          setAnimations(prev => ({...prev, showGenerated: true}));
                          
                        }, 500);
                      }, 500);
                    }, 500);
                  }, 500);
                }, 500);
              }
            }, typingSpeed);
            
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
    <section className='block6' ref={blockRef}>
      <svg className="h-full w-full stroke-gray-100">
        <rect width="100%" height="100%" fill="url(#grid-2)"></rect>
        <defs>
          <pattern id="grid-2" width="145" height="145" x="50%" y="-1" patternUnits="userSpaceOnUse">
            <path fill="none" d="M.5 200V.5H200"></path>
          </pattern>
        </defs>
      </svg>
      <div className='block6_main'>
        <div className='backend'>
          <div className='order-3'>
              <div className='aspect'>
                <div className='rounded'>
                  <div className='boardpanel'>
                    <div className='topblock'>
                      <BsFileCode />
                      <IoIosSearch />
                      <MdOutlineMessage />
                    </div>
                    <div className='bottomblock'>
                      <IoSettingsOutline />
                    </div>
                  </div>
                  <div className='block-left'>
                    <div className='headwindow'>
                      <div className='tab'>
                        main.jsx
                      </div>
                      <div className='tab noactive'>
                        style.css
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
                        <span>09</span>
                        <span>10</span>
                        
                      </div>
                      <code>
                        <span><span className="text-gray">// Tesla clone project</span></span>
                        <span className="text-gray">....</span>
                        <span className="inline-flex"><span>&lt;</span><span className="font-semibold">Layout</span><span>&gt;</span></span>
                        <span className="inline-flex"><span>&nbsp;&lt;</span><span className="font-semibold">Container</span><span>&gt;</span></span>
                        <span className="inline-flex">{animations.typingText && animations.typingText}</span>
                        <span className="inline-flex"><span>&nbsp;&lt;/</span><span className="font-semibold">Container</span><span>&gt;</span></span>
                        <span className="inline-flex"><span>&lt;/</span><span className="font-semibold">Layout</span><span>&gt;</span></span>
                        <span class="text-gray">....</span>
                      </code>
                    </div>
                    
                  </div>
                  <div className='block-right_2'>
                    <div className='navigation'>
                      <IoIosArrowRoundBack />
                      <span className="rounded-sm"></span>
                      <TfiReload size=".7em"/>
                    </div>
                    {animations.showTechno && 
                      <div className='folder' >
                        <TbFolderCog size="2em" color='#a1a1aa' />
                        <img src={Techno} alt="Techno"/>
                      </div>
                    }
                  </div>
                </div>
                {animations.showSuggestions && 
                <div className='suggestions' >
                  <div className='suggestions-1' >
                    <div class="tracking-wider">Suggestions</div>
                    <span class="line-full"></span>
                    <span class="line-full"></span>
                    <span class="line-full"></span>
                    <span class="line-full"></span>
                    <span class="line-full"></span>
                    <span class="line-full"></span>
                    <span class="line-full"></span>
                    <span class="line-full w78"></span>
                  </div>
                  
                  <div className={`code-analysys ${animations.showAnalysis ? 'visible' : ''}`}>
                    <div class="tracking-wider">Code Analysis</div>
                    <div class="rating">
                      <span>4.5</span>
                      <div>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                      </div>
                    </div> 
                    <div className='performance'>
                      <span>Performance</span>
                      <div className='relative'>
                        <div className='relative-inset w87'></div>
                      </div>
                      <span>87%</span>
                    </div>
                    <div className='performance'>
                      <span>Security</span>
                      <div className='relative'>
                        <div className='relative-inset w78'></div>
                      </div>
                      <span>78%</span>
                    </div>
                    <div className='performance'>
                      <span>Readability</span>
                      <div className='relative'>
                        <div className='relative-inset w92'></div>
                      </div>
                      <span>92%</span>
                    </div>
                    <div className='performance'>
                      <span>Accuracy</span>
                      <div className='relative'>
                        <div className='relative-inset w89'></div>
                      </div>
                      <span>89%</span>
                    </div>
                  </div>
                  <div className={`summary ${animations.showSummary ? 'visible' : ''}`}>
                    <div className="tracking-wider">Summary</div>
                    <span className="line-full"></span>
                    <span className="line-full"></span>
                    <span className="line-full w78"></span>
                  </div>
                  <div className={`generated ${animations.showGenerated ? 'visible' : ''}`}>
                    <span>Generated by codedamn AI in 10 mins</span>
                  </div>
                </div>
                }
              </div>
            
          </div>
          <div className='order-1'>
            <span className="linebroken"></span>
            <span className="rounded-full"></span>
            <span className="line_solid"></span>
          </div>
          <div className='order-2'>
            <MdOutlineInstallDesktop />
            <h3 className="text-2">Внедрение</h3>
            <p className="leading-relaxed">
              <ul>
                <li>- Настройка серверов (AWS, Azure, VPS).</li>
                <li>- CI/CD (GitHub Actions, Docker, Kubernetes).</li>
              </ul>
            </p>
            <LuDatabaseBackup style={{fill: 'none'}}/>
            <h3 className="text-2">Миграция данных</h3>
            <p className="leading-relaxed">
              <ul>
                <li>- Перенос из старых систем.</li>
                <li>- Очистка и валидация данных.</li>
              </ul>
            </p>
            <GrSupport />
            <h3 className="text-2"> Поддержка и развитие</h3>
            <p className="leading-relaxed">
              <ul>
                <li>- Логирование ошибок (Sentry, ELK Stack).</li>
                <li>- Анализ производительности (Grafana, Prometheus).</li>
                <li>- Добавление новых модулей.  </li>
                <li>- Рефакторинг кода. </li> 
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Block6;