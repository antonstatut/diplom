import { useState } from 'react';
import s from './styles_popup_addhall.module.css';

export default function PopupAddhall({ onClose, onSave }) {
  const [hallName, setHallName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hallName.trim()) {
      onSave(hallName);
    }
  };

  return (
    <div className={s.body_container}>
      <div className={s.popup_content}>
        <div className={s.popup_header}>
          <h2 className={s.heading}>Добавление зала</h2>
          <button className={s.close_btn} onClick={onClose}>
            <img 
              className={s.popup_close} 
              src={`${import.meta.env.BASE_URL}popup_close.png`} 
              alt="Закрыть"
            />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={s.popup_form}>
            <div className={s.film_form}>
              <label>Название зала</label>
              <input 
                type="text" 
                className={s.input_base} 
                placeholder="Например, «Зал 1»"
                value={hallName}
                onChange={(e) => setHallName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className={s.popup_buttons}>
            <input 
              type="submit" 
              className={s.popup_buttons_style} 
              value="Добавить зал" 
            />
            <button 
              type="button" 
              className={`${s.popup_buttons_style} ${s.cancell}`} 
              onClick={onClose}
            >
              Отменить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}