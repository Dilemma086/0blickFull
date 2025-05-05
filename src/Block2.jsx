import React from 'react';
import './Block2.css';
import { MdOutlineMobileFriendly } from "react-icons/md";
import { GrSystem } from "react-icons/gr";
import { FaInternetExplorer } from "react-icons/fa";
import { SiChatbot } from "react-icons/si";
import { TfiSupport } from "react-icons/tfi";
import { GoGraph } from "react-icons/go";

const Block2 = () => {
  return (
    <section className='block'>
      <h2>Кейсы которые реализовываем</h2>
      <div className='gradientblock'>
        <div className='keys'>
          <div className='frame'>
            <MdOutlineMobileFriendly size={55}/>
            <p>Мобильные <br /> приложения</p>
          </div>
          <div className='frame'>
            <GrSystem size={55}/>
            <p>Информационные <br /> системы</p>
          </div>
          <div className='frame'>
            <FaInternetExplorer size={55} />
            <p>Официальные <br /> сайты</p>
          </div>
          <div className='frame'>
            <SiChatbot size={55} />
            <p>Обучаемые <br /> чат-боты</p>
          </div>
          <div className='frame'>
            <TfiSupport size={55} />
            <p>Поддержка <br /> решений</p>
          </div>
          <div className='frame'>
            <GoGraph size={55} />
            <p>Консалдинг <br /> аудит</p>
          </div>
        </div>
        <div className='keys2' hidden>
          <div className='frame'>
            <MdOutlineMobileFriendly size={55}/>
            <p>Мобильные <br /> приложения</p>
          </div>
          <div className='frame'>
            <GrSystem size={55}/>
            <p>Информационные <br /> системы</p>
          </div>
          <div className='frame'>
            <FaInternetExplorer size={55} />
            <p>Официальные <br /> сайты</p>
          </div>
          <div className='frame'>
            <SiChatbot size={55} />
            <p>Обучаемые <br /> чат-боты</p>
          </div>
          <div className='frame'>
            <TfiSupport size={55} />
            <p>Поддержка <br /> решений</p>
          </div>
          <div className='frame'>
            <GoGraph size={55} />
            <p>Консалдинг <br /> аудит</p>
          </div>
        </div>
      </div>

    </section>
  )
}
export default Block2