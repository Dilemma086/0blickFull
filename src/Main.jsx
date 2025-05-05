import React, { useState, useEffect } from 'react';
import './App.css';
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdCheckCircle } from "react-icons/md";
import { FaFlagCheckered } from "react-icons/fa6";
import { SiExpo } from "react-icons/si";
import background from './assets/background.jpg'
import face01 from './assets/1742921851737.jpg'
import face02 from './assets/1742921851874.jpg'
import face03 from './assets/1742921851024.jpg'


const Main = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    // Добавляем слушатель события resize
    window.addEventListener('resize', handleResize);
    // Удаляем слушатель при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let w; // Width screen 
  let h; // height first block
  let t2, t3; // height top
  
    if (windowWidth > 1248) {
      w = 1248;
      h = 900
      t2 = false
      t3 = false
    } else if (windowWidth < 1248 && windowWidth > 641) {
      w = windowWidth - 20;
      h = 900
      t2 = false
      t3 = false
    } else {
      w = windowWidth + 510;
      h = 0.9 * windowWidth + 200 
      t2 = 0.25 * windowWidth
      t3 = 0.4 * windowWidth- (8 / 3)
    }

  return (
    <section className="containerMain" style={{height: `${h}px`}} >
      
      <div className="background">
        <img src={background} alt='background' />
      </div>
      <div className="circul1" style={{ width: `${w}px`}}>
        <div className="iconMain0011">
          <div className="svg011a">
            <FaFlagCheckered />
          </div>
          <div className="text011">
            <p>Завершенные проекты</p>
            <span>Количество выполненных проектов</span>
          </div>
          <div className="svg011b">
            12
          </div>
        </div>
        <div className="iconMain0012">
          <div className="curve01">
            
            <svg viewBox="0 0 152 162">
              <path fill="none" d="M11.5 0.5C4.50029 20 -7.46644 47.5 8.74439 69.5C17.5867 81.5 41.7436 98.375 51.7436 104C74.2436 116.656 91.2435 121 93.2435 146.5C93.7435 156 88.7443 166.667 83.7443 176.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
          <div className="block0012a">
            <div className="blockImg0012a">
              <img src={face03} alt="face03" />
            </div>
            <div className="dialog1">
              <p>😥 Проблема!</p>
            </div>
          </div>
          <div className="block0012b">
            <div className="dialog2">
              <p>😄 Сообщите нам!</p>
            </div>
          </div>

        </div>
        <div className="iconMain0013"> 
          <div className="svg0016">
            <svg viewBox="0 0 94 177" >
              <path fill="none" d="M11.5 0.5C4.50029 20 -7.46644 47.5 8.74439 69.5C17.5867 81.5 41.7436 98.375 51.7436 104C74.2436 116.656 91.2435 121 93.2435 146.5C93.7435 156 88.7443 166.667 83.7443 176.5" stroke-linecap="round" stroke-linejoin="round"></path>
              {/* <defs>
                <linearGradient id="LearnSvgGradient">
                  <stop offset="5%" stop-color="#4f46e5"></stop>
                  <stop offset="95%" stop-color="#c084fc"></stop>
                </linearGradient>
                <linearGradient id="ApplySvgGradient">
                  <stop offset="5%" stop-color="#0ea5e9"></stop>
                  <stop offset="95%" stop-color="#22d3ee"></stop>
                </linearGradient>
                <linearGradient id="GrowSvgGradient">
                  <stop offset="5%" stop-color="#65a30d"></stop>
                  <stop offset="95%" stop-color="#84cc16"></stop>
                </linearGradient>
                <linearGradient id="AccentSvgGradient">
                  <stop offset="10%" stop-color="#fde047"></stop>
                  <stop offset="90%" stop-color="#bef264"></stop>
                </linearGradient>
              </defs> */}
            </svg>
          </div>
          <div className="svg0015">
            <SiExpo />
          </div>
          <div className="svg0013">
            <svg viewBox="0 0 24 24">
              <path d="M21 7c-.8-1-2.2-1.4-4.2-1.4h-.3c0-1.8 0-3.8-3.7-3.8h-1.6c-3.7 0-3.7 2-3.7 3.7h-.3C5.2 5.6 3.8 6 3 7c-1 1-1 2.6-.8 3.6v.9l.3.3a17.9 17.9 0 006.8 2.7c0 1 .5 2 2.7 2s2.6-1 2.7-2c2-.3 4-1 5.8-2l.1-.2 1.2-.8.2-.3v-.8c.2-1 .1-2.4-.8-3.4zm-8 6.8c0 1 0 1.3-1.1 1.3-1.3 0-1.3-.2-1.3-1.3v-1.2h2.5v1.2zM9 5.6c0-1.8 0-2.4 2.2-2.4h1.6c2.3 0 2.3.6 2.3 2.3H8.9z"></path>
              <path d="M20.9 13.7c.3-.1.7.1.7.5l-.4 4c-.2 2-1 4-5.4 4H8.2c-4.4 0-5.2-2-5.4-4l-.4-3.7c0-.4.4-.7.7-.6 1.2.6 3.3 1.5 4.6 1.8l.3.3c.7 1.3 2 2 3.9 2s3.2-.7 3.8-2a34.6 34.6 0 005.2-2.3z"></path>
            </svg>
          </div>
          <div className="svg0014">
            <svg id="HTML-5-logo" fill="none" viewBox="0 0 133 141">
              <path fill="#000" d="M42.4 30l.2 46.3c0 .7.5 1.4 1.1 1.6l18.5 7.4h1l19.4-4.5c.6-.2 1.1-.8 1.3-1.4l7-45.8c0-1-.7-1.8-1.6-2l-45-3.2c-1 0-1.9.7-1.9 1.7z"></path>
              <path fill="url(#AccentSvgGradient)" d="M80.4 47.5L57 45.8l.2 6.5L79.4 54l-2.8 18.4-13.3 3.2-12.7-5v-9.8l6.8.5L57 66l7 2.5 7.2-1.4 1.1-7.6L50.5 58V39.3l30.8 2.2-.9 6z"></path>
            </svg>
          </div>
        </div>
        <div className="iconMain0033_1mobaile" hidden>
          <div className="svg033">
            <svg fill="none" viewBox="0 0 50 51" >
              <defs>
                <linearGradient id="Gradient">
                  <stop offset="10%" stopColor="#fde047"></stop>
                  <stop offset="90%" stopColor="#bef264"></stop>
                </linearGradient>
              </defs>
              <path fill="url(#Gradient)" d="M23.4 0h-.8a25 25 0 0 0-18 10.4 24.8 24.8 0 0 0-4.4 11C0 22.7 0 23 0 25a25.1 25.1 0 0 0 36.9 22s-2-2.5-4.1-5.5l-4-5.4-5-7.4-5-7.4a399.9 399.9 0 0 0-.2 14.8c-.1.2-.2.3-.5.4l-1 .1h-.8l-.3-.1a1 1 0 0 1-.3-.4v-20c.2 0 .3-.2.5-.3h1c1 0 1.2 0 1.5.2a924.8 924.8 0 0 1 15.9 24l4 6h.2c1.7-1.2 3.6-2.9 5-4.6a24.9 24.9 0 0 0 6-12.8c.2-1.3.2-1.7.2-3.6 0-1.9 0-2.3-.2-3.6A25.1 25.1 0 0 0 23.4 0zm10.2 15.1a1 1 0 0 1 .5.6v17.8L32.6 31 31 28.7V15.8a1 1 0 0 1 .5-.7h2.1z"></path>
            </svg>
          </div>
        </div>
        <div className="iconMain0021_1mobale" hidden>
          <div className="iconMain0021svg" >
            <svg fill="none" className="absolute -top-[1%] left-[60%] rotate-6 rounded-md bg-black p-[0.4%] sm:left-[8%] sm:top-[43%] sm:-rotate-0 lg:rounded-lg" viewBox="0 0 50 50">
              <defs>
                <linearGradient id="Grad">
                  <stop offset="10%" stopColor="#fde047"></stop>
                  <stop offset="90%" stopColor="#bef264"></stop>
                </linearGradient>
              </defs>
              <path fill="url(#Grad)" d="M25.7 29.2a4.7 4.7 0 1 0-2.2-9 4.7 4.7 0 0 0 2.2 9Z"></path>          <path fill="url(#AccentSvgGradient)" d="M25.7 29.2a4.7 4.7 0 1 0-2.2-9 4.7 4.7 0 0 0 2.2 9Z"></path>
              <path stroke="url(#Grad)" d="M39 14.4V14v.5c2.7.3 5 .9 6.6 1.7 1.7.8 2.6 1.8 2.8 2.8.3 1-.1 2.5-1.3 4-1.2 1.6-3 3.3-5.6 4.8a52 52 0 0 1-14.8 5.8c-5.9 1.4-11.6 2-16 1.7-2.9-.3-5.3-1-7-1.8-1.7-.9-2.7-2-2.9-3-.2-1 .1-2.3 1.2-3.8 1-1.4 2.7-3 5-4.4a54.6 54.6 0 0 1 31.9-7.8Z"></path>
              <path stroke="url(#Grad)" d="M13.6 38.7A52 52 0 0 1 16 22.4v-.2c1.8-6 4.3-11.3 7-15 1.6-2.2 3.2-4 4.8-5 1.5-1 2.8-1.3 3.8-1 1 .3 2 1.4 2.8 3.2.8 1.8 1.3 4.2 1.4 7.2a52 52 0 0 1-2.4 15.7c-1.7 5.8-4 11-6.6 14.8l.4.2-.4-.2c-1.7 2.3-3.4 4-5 5s-3 1.4-4 1.1c-1-.3-2-1.2-2.7-2.9a21 21 0 0 1-1.4-6.6h-.5.5Z"></path>
              <path stroke="url(#Grad)" d="M18 31a51.9 51.9 0 0 1-9.4-13.5 19.6 19.6 0 0 1-2-6.6C6.7 9 7 7.7 7.8 7c.8-.7 2.2-1 4.2-.8 1.9.2 4.3 1 6.9 2.4 3.9 2 8.3 5.6 12.4 9.9 4.2 4.4 7.6 9 9.5 13a20 20 0 0 1 1.9 7c0 1.9-.3 3.3-1.1 4-.7.7-2 1-3.9.9-1.7-.2-4-1-6.4-2.2l-.2.5.2-.5c-4-2-8.8-5.7-13.1-10.3Z"></path>
            </svg>
          </div>
          <div className="iconMain0021Text">
            <MdCheckCircle size={15} />
            <span>Разработка</span>
          </div>
        </div>
      </div>
      <div className="circul2" style={{ width: `${w - (w * 0.2)}px`, top: t2 && `${t2}px` }}>
        <div className="iconMain0021" >
          <div className="iconMain0021svg" >
            <svg fill="none" className="absolute -top-[1%] left-[60%] rotate-6 rounded-md bg-black p-[0.4%] sm:left-[8%] sm:top-[43%] sm:-rotate-0 lg:rounded-lg" viewBox="0 0 50 50">
              <defs>
                <linearGradient id="AccentSvgGradient">
                  <stop offset="10%" stopColor="#fde047"></stop>
                  <stop offset="90%" stopColor="#bef264"></stop>
                </linearGradient>
              </defs>
              <path fill="url(#AccentSvgGradient)" d="M25.7 29.2a4.7 4.7 0 1 0-2.2-9 4.7 4.7 0 0 0 2.2 9Z"></path>          <path fill="url(#AccentSvgGradient)" d="M25.7 29.2a4.7 4.7 0 1 0-2.2-9 4.7 4.7 0 0 0 2.2 9Z"></path>
              <path stroke="url(#AccentSvgGradient)" d="M39 14.4V14v.5c2.7.3 5 .9 6.6 1.7 1.7.8 2.6 1.8 2.8 2.8.3 1-.1 2.5-1.3 4-1.2 1.6-3 3.3-5.6 4.8a52 52 0 0 1-14.8 5.8c-5.9 1.4-11.6 2-16 1.7-2.9-.3-5.3-1-7-1.8-1.7-.9-2.7-2-2.9-3-.2-1 .1-2.3 1.2-3.8 1-1.4 2.7-3 5-4.4a54.6 54.6 0 0 1 31.9-7.8Z"></path>
              <path stroke="url(#AccentSvgGradient)" d="M13.6 38.7A52 52 0 0 1 16 22.4v-.2c1.8-6 4.3-11.3 7-15 1.6-2.2 3.2-4 4.8-5 1.5-1 2.8-1.3 3.8-1 1 .3 2 1.4 2.8 3.2.8 1.8 1.3 4.2 1.4 7.2a52 52 0 0 1-2.4 15.7c-1.7 5.8-4 11-6.6 14.8l.4.2-.4-.2c-1.7 2.3-3.4 4-5 5s-3 1.4-4 1.1c-1-.3-2-1.2-2.7-2.9a21 21 0 0 1-1.4-6.6h-.5.5Z"></path>
              <path stroke="url(#AccentSvgGradient)" d="M18 31a51.9 51.9 0 0 1-9.4-13.5 19.6 19.6 0 0 1-2-6.6C6.7 9 7 7.7 7.8 7c.8-.7 2.2-1 4.2-.8 1.9.2 4.3 1 6.9 2.4 3.9 2 8.3 5.6 12.4 9.9 4.2 4.4 7.6 9 9.5 13a20 20 0 0 1 1.9 7c0 1.9-.3 3.3-1.1 4-.7.7-2 1-3.9.9-1.7-.2-4-1-6.4-2.2l-.2.5.2-.5c-4-2-8.8-5.7-13.1-10.3Z"></path>
            </svg>
          </div>
          <div className="iconMain0021Text">
            <MdCheckCircle size={15} />
            <span>Разработка</span>
          </div>
        </div>
        <div className="iconMain0022">
          <div className="svg022">
            <svg viewBox="0 0 29 18">
              <path fill="url(#AccentSvgGradient)" d="M7.3 6.8C8.2 3 10.5 1 14.3 1c5.6-.1 6.4 4 9.2 4.7 1.9.4 3.5-.3 4.9-2.2-.9 3.8-3.2 5.7-7 5.8-5.6.1-6.4-4.1-9.2-4.7-1.9-.5-3.5.3-4.9 2.2ZM.5 15.4c.9-3.8 3.2-5.7 6.9-5.8 5.6-.1 6.4 4 9.2 4.7 2 .4 3.6-.3 5-2.2-1 3.8-3.2 5.7-7 5.8-5.6 0-6.4-4.1-9.2-4.8-2-.4-3.5.4-4.9 2.3Z"></path>
            </svg>
          </div>
          <p><b>Индивидуальные IT-решения</b><br />
            Подать заявку</p>
          <div className="lineBlock">
            <div className="lineInside"></div>
          </div>
        </div>
        <div className="iconMain0023">
          <div className="block0012c">
            <svg viewBox="0 0 28 28" fill="currentColor">
              <path d="M23 16.5h-2.6a1 1 0 0 0-.5.2l-3.1 2a2.9 2.9 0 0 1-4.4-1.7c0-.4-.4-.8-.8-1-.7-.3-1.3-.7-1.8-1.2A6.4 6.4 0 0 1 8 10.2V4.3c0-.5-.4-1-1-1h-.3c-3.6 0-6 1.8-6 6v7.2c0 4.2 2.4 6 6 6h5v3.8H7.9a1 1 0 0 0-1 1c0 .6.4 1 1 1h9.6c.5 0 1-.4 1-1 0-.5-.5-1-1-1h-3.8v-3.8h5c3.3 0 5.6-1.5 6-5 0-.5-.5-1-1-1H23Z"></path>
              <path d="M27.3 5v5.2c0 2-1 3.5-2.6 4-.5.2-1.1.3-1.7.3h-3.5l-3.8 2.6a.9.9 0 0 1-1.4-.7v-1.9c-1.3 0-2.4-.4-3.1-1.2a4.4 4.4 0 0 1-1.2-3.1V5c0-.6 0-1.2.3-1.7.6-1.6 2-2.6 4-2.6H23c2.6 0 4.3 1.7 4.3 4.3Z"></path>
            </svg>
          </div>
        </div>
        <div className="iconMain0034_2mobile" hidden>
          <div className="img034">
            <img src={face02} alt='face02' />
          </div>
          <div className="comment034" >
              <div class="stars">
                <div class="star-1">
                  <svg aria-hidden="true" class="rr--svg" viewBox="0 0 24.99 24.1" preserveAspectRatio="xMidYMid meet"><g shape-rendering="geometricPrecision" transform="translate(-87.55 -48.8)"><path d="M112.46,57.88c-.23-.72-.88-1.22-1.63-1.27l-6.63-.46-2.45-6.19c-.27-.7-.95-1.16-1.7-1.16h0c-.75,0-1.42,.46-1.7,1.16l-2.5,6.23-6.58,.42c-.75,.05-1.4,.55-1.63,1.27-.24,.73,0,1.53,.58,2.02l5.07,4.28-1.51,5.92c-.21,.82,.1,1.69,.78,2.19,.66,.48,1.55,.5,2.24,.07l5.23-3.31h.02l5.63,3.56c.29,.19,.63,.29,.97,.29,1.02,0,1.83-.84,1.83-1.86,0-.16-.02-.31-.06-.47l-1.6-6.48,5.04-4.2c.59-.49,.82-1.29,.58-2.02Z"></path></g></svg>
                </div>
                <div class="star-1">
                  <svg aria-hidden="true" class="rr--svg" viewBox="0 0 24.99 24.1" preserveAspectRatio="xMidYMid meet"><g shape-rendering="geometricPrecision" transform="translate(-87.55 -48.8)"><path d="M112.46,57.88c-.23-.72-.88-1.22-1.63-1.27l-6.63-.46-2.45-6.19c-.27-.7-.95-1.16-1.7-1.16h0c-.75,0-1.42,.46-1.7,1.16l-2.5,6.23-6.58,.42c-.75,.05-1.4,.55-1.63,1.27-.24,.73,0,1.53,.58,2.02l5.07,4.28-1.51,5.92c-.21,.82,.1,1.69,.78,2.19,.66,.48,1.55,.5,2.24,.07l5.23-3.31h.02l5.63,3.56c.29,.19,.63,.29,.97,.29,1.02,0,1.83-.84,1.83-1.86,0-.16-.02-.31-.06-.47l-1.6-6.48,5.04-4.2c.59-.49,.82-1.29,.58-2.02Z"></path></g></svg>
                </div>
                <div class="star-1">
                  <svg aria-hidden="true" class="rr--svg" viewBox="0 0 24.99 24.1" preserveAspectRatio="xMidYMid meet"><g shape-rendering="geometricPrecision" transform="translate(-87.55 -48.8)"><path d="M112.46,57.88c-.23-.72-.88-1.22-1.63-1.27l-6.63-.46-2.45-6.19c-.27-.7-.95-1.16-1.7-1.16h0c-.75,0-1.42,.46-1.7,1.16l-2.5,6.23-6.58,.42c-.75,.05-1.4,.55-1.63,1.27-.24,.73,0,1.53,.58,2.02l5.07,4.28-1.51,5.92c-.21,.82,.1,1.69,.78,2.19,.66,.48,1.55,.5,2.24,.07l5.23-3.31h.02l5.63,3.56c.29,.19,.63,.29,.97,.29,1.02,0,1.83-.84,1.83-1.86,0-.16-.02-.31-.06-.47l-1.6-6.48,5.04-4.2c.59-.49,.82-1.29,.58-2.02Z"></path></g></svg>
                </div>
                <div class="star-1">
                  <svg aria-hidden="true" class="rr--svg" viewBox="0 0 24.99 24.1" preserveAspectRatio="xMidYMid meet"><g shape-rendering="geometricPrecision" transform="translate(-87.55 -48.8)"><path d="M112.46,57.88c-.23-.72-.88-1.22-1.63-1.27l-6.63-.46-2.45-6.19c-.27-.7-.95-1.16-1.7-1.16h0c-.75,0-1.42,.46-1.7,1.16l-2.5,6.23-6.58,.42c-.75,.05-1.4,.55-1.63,1.27-.24,.73,0,1.53,.58,2.02l5.07,4.28-1.51,5.92c-.21,.82,.1,1.69,.78,2.19,.66,.48,1.55,.5,2.24,.07l5.23-3.31h.02l5.63,3.56c.29,.19,.63,.29,.97,.29,1.02,0,1.83-.84,1.83-1.86,0-.16-.02-.31-.06-.47l-1.6-6.48,5.04-4.2c.59-.49,.82-1.29,.58-2.02Z"></path></g></svg>
                </div>
                <div class="star-1">
                  <svg aria-hidden="true" class="rr--svg" viewBox="0 0 24.99 24.1" preserveAspectRatio="xMidYMid meet"><g shape-rendering="geometricPrecision" transform="translate(-87.55 -48.8)"><path d="M112.46,57.88c-.23-.72-.88-1.22-1.63-1.27l-6.63-.46-2.45-6.19c-.27-.7-.95-1.16-1.7-1.16h0c-.75,0-1.42,.46-1.7,1.16l-2.5,6.23-6.58,.42c-.75,.05-1.4,.55-1.63,1.27-.24,.73,0,1.53,.58,2.02l5.07,4.28-1.51,5.92c-.21,.82,.1,1.69,.78,2.19,.66,.48,1.55,.5,2.24,.07l5.23-3.31h.02l5.63,3.56c.29,.19,.63,.29,.97,.29,1.02,0,1.83-.84,1.83-1.86,0-.16-.02-.31-.06-.47l-1.6-6.48,5.04-4.2c.59-.49,.82-1.29,.58-2.02Z"></path></g></svg>
                </div>
              </div>
              <div class="flex-col-star">
                <p>"Мощная команда профессионалов!"</p>
              </div>
            </div>
        </div>
        <div className="iconMain0036_2mobile" hidden>
          <div className="svg036">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" >
              <rect width="64" height="64" fill="black" rx="15"></rect>
              <path fill="url(#AccentSvgGradient)" d="M32 54c-.6 0-1.2-.2-1.7-.5L25 50.4c-.8-.5-.4-.6-.1-.7l2.4-1.1a.4.4 0 01.4 0l4.2 2.4a.5.5 0 00.5 0l16-9.3a.5.5 0 00.3-.4V22.7a.5.5 0 00-.2-.5L32.2 13a.5.5 0 00-.4 0l-16.2 9.3a.5.5 0 00-.2.5v18.6a.5.5 0 00.2.4l4.5 2.6c2.4 1.2 3.8-.2 3.8-1.7V24.3a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v18.3c0 3.2-1.7 5-4.8 5-1.3.1-2.6-.2-3.7-1l-4.2-2.4a3.4 3.4 0 01-1.7-2.9V22.7a3.4 3.4 0 011.7-3l16.1-9.3a3.5 3.5 0 013.4 0l16.1 9.3a3.4 3.4 0 011.7 3v18.6a3.4 3.4 0 01-1.7 3l-16.1 9.2c-.5.3-1.1.5-1.7.5z"></path>
              <path fill="url(#AccentSvgGradient)" d="M29 35a.5.5 0 01.4-.4h2.1a.5.5 0 01.5.4c.3 2.1 1.2 3.2 5.5 3.2 3.4 0 4.8-.8 4.8-2.6 0-1-.4-1.8-5.7-2.3-4.4-.5-7.1-1.4-7.1-5 0-3.2 2.7-5.1 7.3-5.1 5.2 0 7.8 1.7 8 5.6a.5.5 0 01-.4.5h-2a.5.5 0 01-.5-.4c-.5-2.2-1.8-3-5-3-3.8 0-4.2 1.4-4.2 2.3 0 1.2.5 1.6 5.5 2.2 5 .7 7.3 1.6 7.3 5 0 3.6-3 5.6-8 5.6-7 0-8.6-3.2-8.6-6z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="circul3" style={{ width: `${w - (w * 0.4)}px`, top: t3 && `${t3}px` }}>
        <div className="iconMain0031">
          <div class="blockOI">
            <div class="circul">
              <div class="circul-1"></div>
              <div class="circul-2"></div>
              <div class="circul-3"></div>
            </div>

            <div class="flex-col">
              <p>
                <span class="mr-1">&lt;h1 &gt;</span>
                Разработка backend
                <span class="mr-1">&lt;/h1 &gt;</span>
              </p>
              <p>
                <span class="mr-1">&lt;em &gt;</span>
                интеграция систем
                <span class="mr-1">&lt;/em &gt;</span>
              </p>
            </div>

          </div>
          <div className="blockSvg">
            <svg viewBox="0 0 28 28" >
              <path d="M14 .7a13.3 13.3 0 1 0 0 26.6A13.3 13.3 0 0 0 14 .7ZM9.4 16c.4.3.4 1 0 1.4a1 1 0 0 1-.7.3 1 1 0 0 1-.7-.3l-2.7-2.7a1 1 0 0 1 0-1.4L8 10.6a1 1 0 0 1 1.4 0c.4.4.4 1 0 1.4l-2 2 2 2Zm6.9-4.7-2.7 6.2a1 1 0 0 1-1.3.5 1 1 0 0 1-.5-1.3l2.6-6.2a1 1 0 0 1 1.3-.5c.5.2.8.8.6 1.3Zm6.4 3.4L20 17.4a1 1 0 0 1-.7.3 1 1 0 0 1-.7-.3 1 1 0 0 1 0-1.4l2-2-2-2a1 1 0 0 1 0-1.4 1 1 0 0 1 1.4 0l2.7 2.7c.4.4.4 1 0 1.4Z"></path>
            </svg>
          </div>
        </div>
        <div className="iconMain0032">
          <div class="img032">
            <img src={face01} alt='face01' />
          </div>
          <div className="svg032">
            <svg viewBox="0 0 22 28">
              <path d="M18.7 5.3v1L14 3.6c-1.8-1-4.3-1-6 0L3.3 6.3v-1c0-3 1.6-4.6 4.6-4.6H14c3 0 4.6 1.6 4.6 4.6Z"></path>
              <path d="M18.8 8.6h-.2l-1.8-1.1L13 5.3c-1.1-.6-2.9-.6-4 0L5.2 7.5l-1.8 1-.2.2C.8 10.2.7 10.5.7 13v6c0 2.5.1 2.8 2.5 4.4L9 26.8a4 4 0 0 0 2 .5c.7 0 1.5-.1 2-.5l5.8-3.3c2.4-1.6 2.5-1.9 2.5-4.4v-6c0-2.6-.1-2.9-2.5-4.5Zm-4 7.4-.9 1a1 1 0 0 0-.2.6V19c.1.8-.4 1.2-1.2 1l-1.2-.6h-.6l-1.2.5c-.8.3-1.3-.1-1.3-1l.1-1.2c0-.2 0-.5-.2-.6l-.8-1c-.5-.6-.3-1.3.5-1.5l1.2-.3c.2 0 .4-.2.5-.4l.7-1c.5-.7 1.1-.7 1.6 0l.7 1c0 .2.3.4.5.4l1.2.3c.8.2 1 .9.5 1.5Z"></path>
            </svg>
          </div>
        </div>
        <div className="iconMain0033">
          <div className="svg033">
            <svg fill="none" viewBox="0 0 50 51" >
              <defs>
                <linearGradient id="AccentSvgGradient">
                  <stop offset="10%" stopColor="#fde047"></stop>
                  <stop offset="90%" stopColor="#bef264"></stop>
                </linearGradient>
              </defs>
              <path fill="url(#AccentSvgGradient)" d="M23.4 0h-.8a25 25 0 0 0-18 10.4 24.8 24.8 0 0 0-4.4 11C0 22.7 0 23 0 25a25.1 25.1 0 0 0 36.9 22s-2-2.5-4.1-5.5l-4-5.4-5-7.4-5-7.4a399.9 399.9 0 0 0-.2 14.8c-.1.2-.2.3-.5.4l-1 .1h-.8l-.3-.1a1 1 0 0 1-.3-.4v-20c.2 0 .3-.2.5-.3h1c1 0 1.2 0 1.5.2a924.8 924.8 0 0 1 15.9 24l4 6h.2c1.7-1.2 3.6-2.9 5-4.6a24.9 24.9 0 0 0 6-12.8c.2-1.3.2-1.7.2-3.6 0-1.9 0-2.3-.2-3.6A25.1 25.1 0 0 0 23.4 0zm10.2 15.1a1 1 0 0 1 .5.6v17.8L32.6 31 31 28.7V15.8a1 1 0 0 1 .5-.7h2.1z"></path>
            </svg>
          </div>
        </div>
        <div className="iconMain0034">
          <div className="img034">
            <img src={face02} alt='face02' />
          </div>
          <div className="comment034">
            <div class="stars">
              <div class="star-1">
                <svg aria-hidden="true" class="rr--svg" viewBox="0 0 24.99 24.1" preserveAspectRatio="xMidYMid meet"><g shape-rendering="geometricPrecision" transform="translate(-87.55 -48.8)"><path d="M112.46,57.88c-.23-.72-.88-1.22-1.63-1.27l-6.63-.46-2.45-6.19c-.27-.7-.95-1.16-1.7-1.16h0c-.75,0-1.42,.46-1.7,1.16l-2.5,6.23-6.58,.42c-.75,.05-1.4,.55-1.63,1.27-.24,.73,0,1.53,.58,2.02l5.07,4.28-1.51,5.92c-.21,.82,.1,1.69,.78,2.19,.66,.48,1.55,.5,2.24,.07l5.23-3.31h.02l5.63,3.56c.29,.19,.63,.29,.97,.29,1.02,0,1.83-.84,1.83-1.86,0-.16-.02-.31-.06-.47l-1.6-6.48,5.04-4.2c.59-.49,.82-1.29,.58-2.02Z"></path></g></svg>
              </div>
              <div class="star-1">
                <svg aria-hidden="true" class="rr--svg" viewBox="0 0 24.99 24.1" preserveAspectRatio="xMidYMid meet"><g shape-rendering="geometricPrecision" transform="translate(-87.55 -48.8)"><path d="M112.46,57.88c-.23-.72-.88-1.22-1.63-1.27l-6.63-.46-2.45-6.19c-.27-.7-.95-1.16-1.7-1.16h0c-.75,0-1.42,.46-1.7,1.16l-2.5,6.23-6.58,.42c-.75,.05-1.4,.55-1.63,1.27-.24,.73,0,1.53,.58,2.02l5.07,4.28-1.51,5.92c-.21,.82,.1,1.69,.78,2.19,.66,.48,1.55,.5,2.24,.07l5.23-3.31h.02l5.63,3.56c.29,.19,.63,.29,.97,.29,1.02,0,1.83-.84,1.83-1.86,0-.16-.02-.31-.06-.47l-1.6-6.48,5.04-4.2c.59-.49,.82-1.29,.58-2.02Z"></path></g></svg>
              </div>
              <div class="star-1">
                <svg aria-hidden="true" class="rr--svg" viewBox="0 0 24.99 24.1" preserveAspectRatio="xMidYMid meet"><g shape-rendering="geometricPrecision" transform="translate(-87.55 -48.8)"><path d="M112.46,57.88c-.23-.72-.88-1.22-1.63-1.27l-6.63-.46-2.45-6.19c-.27-.7-.95-1.16-1.7-1.16h0c-.75,0-1.42,.46-1.7,1.16l-2.5,6.23-6.58,.42c-.75,.05-1.4,.55-1.63,1.27-.24,.73,0,1.53,.58,2.02l5.07,4.28-1.51,5.92c-.21,.82,.1,1.69,.78,2.19,.66,.48,1.55,.5,2.24,.07l5.23-3.31h.02l5.63,3.56c.29,.19,.63,.29,.97,.29,1.02,0,1.83-.84,1.83-1.86,0-.16-.02-.31-.06-.47l-1.6-6.48,5.04-4.2c.59-.49,.82-1.29,.58-2.02Z"></path></g></svg>
              </div>
              <div class="star-1">
                <svg aria-hidden="true" class="rr--svg" viewBox="0 0 24.99 24.1" preserveAspectRatio="xMidYMid meet"><g shape-rendering="geometricPrecision" transform="translate(-87.55 -48.8)"><path d="M112.46,57.88c-.23-.72-.88-1.22-1.63-1.27l-6.63-.46-2.45-6.19c-.27-.7-.95-1.16-1.7-1.16h0c-.75,0-1.42,.46-1.7,1.16l-2.5,6.23-6.58,.42c-.75,.05-1.4,.55-1.63,1.27-.24,.73,0,1.53,.58,2.02l5.07,4.28-1.51,5.92c-.21,.82,.1,1.69,.78,2.19,.66,.48,1.55,.5,2.24,.07l5.23-3.31h.02l5.63,3.56c.29,.19,.63,.29,.97,.29,1.02,0,1.83-.84,1.83-1.86,0-.16-.02-.31-.06-.47l-1.6-6.48,5.04-4.2c.59-.49,.82-1.29,.58-2.02Z"></path></g></svg>
              </div>
              <div class="star-1">
                <svg aria-hidden="true" class="rr--svg" viewBox="0 0 24.99 24.1" preserveAspectRatio="xMidYMid meet"><g shape-rendering="geometricPrecision" transform="translate(-87.55 -48.8)"><path d="M112.46,57.88c-.23-.72-.88-1.22-1.63-1.27l-6.63-.46-2.45-6.19c-.27-.7-.95-1.16-1.7-1.16h0c-.75,0-1.42,.46-1.7,1.16l-2.5,6.23-6.58,.42c-.75,.05-1.4,.55-1.63,1.27-.24,.73,0,1.53,.58,2.02l5.07,4.28-1.51,5.92c-.21,.82,.1,1.69,.78,2.19,.66,.48,1.55,.5,2.24,.07l5.23-3.31h.02l5.63,3.56c.29,.19,.63,.29,.97,.29,1.02,0,1.83-.84,1.83-1.86,0-.16-.02-.31-.06-.47l-1.6-6.48,5.04-4.2c.59-.49,.82-1.29,.58-2.02Z"></path></g></svg>
              </div>
            </div>
            <div class="flex-col-star">
              <p>"Мощная команда профессионалов!"</p>
            </div>
          </div>
        </div>
        <div className="iconMain0035">
          <div className="svg035">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" >
              <rect width="64" height="64" fill="black" rx="15"></rect>
              <path fill="#bef264" d="m32 10-.3 1v29l.3.4 13.5-8L32 10Z"></path>
              <path fill="#fde047" d="M32 10 18.5 32.4l13.5 8V10Z"></path>
              <path fill="#bef264" d="m32 43-.2.1v10.4l.2.5 13.5-19L32 43Z"></path>
              <path fill="#fde047" d="M32 54V43l-13.5-8L32 54Z"></path>
              <path fill="#bef264" d="m32 40.4 13.5-8L32 26.3v14Z"></path>
              <path fill="#fde047" d="m18.5 32.4 13.5 8V26.3l-13.5 6.1Z"></path>
            </svg>
          </div>
        </div>
        <div className="iconMain0036">
          <div className="svg036">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" >
              <rect width="64" height="64" fill="black" rx="15"></rect>
              <path fill="url(#AccentSvgGradient)" d="M32 54c-.6 0-1.2-.2-1.7-.5L25 50.4c-.8-.5-.4-.6-.1-.7l2.4-1.1a.4.4 0 01.4 0l4.2 2.4a.5.5 0 00.5 0l16-9.3a.5.5 0 00.3-.4V22.7a.5.5 0 00-.2-.5L32.2 13a.5.5 0 00-.4 0l-16.2 9.3a.5.5 0 00-.2.5v18.6a.5.5 0 00.2.4l4.5 2.6c2.4 1.2 3.8-.2 3.8-1.7V24.3a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v18.3c0 3.2-1.7 5-4.8 5-1.3.1-2.6-.2-3.7-1l-4.2-2.4a3.4 3.4 0 01-1.7-2.9V22.7a3.4 3.4 0 011.7-3l16.1-9.3a3.5 3.5 0 013.4 0l16.1 9.3a3.4 3.4 0 011.7 3v18.6a3.4 3.4 0 01-1.7 3l-16.1 9.2c-.5.3-1.1.5-1.7.5z"></path>
              <path fill="url(#AccentSvgGradient)" d="M29 35a.5.5 0 01.4-.4h2.1a.5.5 0 01.5.4c.3 2.1 1.2 3.2 5.5 3.2 3.4 0 4.8-.8 4.8-2.6 0-1-.4-1.8-5.7-2.3-4.4-.5-7.1-1.4-7.1-5 0-3.2 2.7-5.1 7.3-5.1 5.2 0 7.8 1.7 8 5.6a.5.5 0 01-.4.5h-2a.5.5 0 01-.5-.4c-.5-2.2-1.8-3-5-3-3.8 0-4.2 1.4-4.2 2.3 0 1.2.5 1.6 5.5 2.2 5 .7 7.3 1.6 7.3 5 0 3.6-3 5.6-8 5.6-7 0-8.6-3.2-8.6-6z"></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="textBlock">
        <h1>Ваш облик <br /><span class="animated-text">в цифровом мире</span></h1>
        <h2>Решение реальных задач <br />для вашего бизнеса</h2>
        <div className="btnStack">
          <span>Посмотреть Полный Стек</span>
          <IoIosArrowRoundForward size={35} color="white" />
        </div>
      </div>
    </section>
  )
}
export default Main