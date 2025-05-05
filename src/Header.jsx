import React from 'react';
import './App.css';
import { IoIosMenu } from "react-icons/io";

const Header  = () => {
  return (
    <div className="containerHeader">
      <div className="header">
        <IoIosMenu size={40} className='IosMenu' color-='#18181B'/>
        <h1><span className="firstsimvol">0</span>blick.ru</h1>

        <div className="loginBlock">
          <h3>Для бизнеса</h3>
          <button>Войти</button>
          <button>Регистрация</button>
        </div>
      </div>  
    </div>
  )
}
export default Header