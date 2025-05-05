import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Block11.css';

const Block11 = () => {
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const blockRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    phone: '+7 ',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  // Замените на ваш реальный токен бота и ID чата
  const BOT_TOKEN = '7555934270:AAEsISSYYUrp-OIFqF2x-YWG0ZCaapOrZ3A';
  const CHAT_ID = '756458415';

  // Функция для форматирования номера телефона
  const formatPhoneNumber = (value) => {
    // Удаляем все нецифровые символы, кроме начального +
    const cleaned = value.replace(/[^\d+]/g, '');
    
    // Начинаем с +7
    let formattedValue = '+7 ';
    
    // Добавляем остальные цифры с форматированием
    if (cleaned.length > 2) {
      const digits = cleaned.slice(2); // Убираем +7
      const part1 = digits.slice(0, 3);
      const part2 = digits.slice(3, 6);
      const part3 = digits.slice(6, 8);
      const part4 = digits.slice(8, 10);
      
      if (part1) formattedValue += `(${part1}`;
      if (part2) formattedValue += `) ${part2}`;
      if (part3) formattedValue += `-${part3}`;
      if (part4) formattedValue += `-${part4}`;
    }
    
    return formattedValue;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      // Для поля телефона применяем специальную обработку
      if (value.length < 3) {
        setFormData(prev => ({ ...prev, phone: '+7 ' }));
        return;
      }
      
      setFormData(prev => ({
        ...prev,
        phone: formatPhoneNumber(value)
      }));
    } else {
      // Для остальных полей обычная обработка
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handlePhoneKeyDown = (e) => {
    // Запрещаем удаление +7
    if (e.key === 'Backspace' && formData.phone.length <= 3) {
      e.preventDefault();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Валидация телефона (минимум 11 цифр включая +7)
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (phoneDigits.length < 11) {
      setError('Введите корректный номер телефона');
      setIsSubmitting(false);
      return;
    }

    try {
      // Формируем сообщение для Telegram
      const message = `📌 Новая заявка с сайта:\n\n` +
                      `👤 Имя: ${formData.name}\n` +
                      `📞 Телефон: ${formData.phone}\n` +
                      `✉️ Сообщение: ${formData.message || 'Не указано'}`;

      // Отправляем в Telegram
      await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      });

      setIsSuccess(true);
      setFormData({
        name: '',
        phone: '+7 ',
        message: ''
      });
    } catch (err) {
      setError('Ошибка при отправке. Пожалуйста, попробуйте позже.');
      console.error('Ошибка отправки в Telegram:', err.response?.data || err.message);
    } finally {
      setIsSubmitting(false);
    }
  };
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
      className={`block11 ${isVisible ? 'visible' : ''}`} 
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
      <div className='block11_main'>
        <div className="telegram-form-container">
          <h2>Отправить заявку в Telegram</h2>
          {isSuccess ? (
            <div className="success-message">
              ✅ Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="telegram-form">
              {error && <div className="error-message">{error}</div>}
              
              <div className="form-group">
                <label htmlFor="name">Ваше имя*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  minLength="2"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Телефон*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onKeyDown={handlePhoneKeyDown}
                  required
                  placeholder="+7 (XXX) XXX-XX-XX"
                  maxLength={18}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Сообщение</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                />
              </div>
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="submit-spinner">Отправка...</span>
                ) : (
                  '📨 Отправить в Telegram'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Block11;