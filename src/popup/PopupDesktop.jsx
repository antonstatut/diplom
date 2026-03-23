import { useState, useRef } from 'react';
import s from './styles_popup_desktop.module.css'; // Используем ваши стили

export default function PopupDesktop({ onClose, onSave }) {
  const [filmData, setFilmData] = useState({
    name: '',
    duration: '',
    description: '',
    origin: '',
    poster: null
  });

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilmData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 3 * 1024 * 1024 && file.type === 'image/png') {
      setFilmData(prev => ({ ...prev, poster: file }));
    } else {
      alert('Файл должен быть PNG и не более 3 Мб');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!filmData.poster) return alert('Загрузите постер!');
    onSave(filmData);
  };

  return (
    <div className={s.body_container}>
      <div className={s.popup_content}>
        <div className={s.popup_header}>
          <h2 className={s.heading}>Добавление фильма</h2>
          <button className={s.close_btn} onClick={onClose}>
            <img className={s.popup_close} src={`${import.meta.env.BASE_URL}popup_close.png`} alt="Закрыть"/>
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className={s.popup_form}>
            <div className={s.film_form}>
              <label>Название фильма</label>
              <input 
                name="name" 
                type="text" 
                className={s.input_base} 
                value={filmData.name} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className={s.film_form}>
              <label>Продолжительность (мин.)</label>
              <input 
                name="duration" 
                type="number" 
                className={s.input_base} 
                value={filmData.duration} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className={s.film_form}>
              <label>Описание фильма</label>
              <textarea 
                name="description" 
                className={`${s.input_base} ${s.description}`} 
                value={filmData.description} 
                onChange={handleChange} 
              />
            </div>
            <div className={s.film_form}>
              <label>Страна</label>
              <input 
                name="origin" 
                type="text" 
                className={s.input_base} 
                value={filmData.origin} 
                onChange={handleChange} 
              />
            </div>
          </div>

          <div className={s.popup_buttons}>
            {/* Скрытый инпут для файлов */}
            <input 
              type="file" 
              accept="image/png" 
              style={{ display: 'none' }} 
              ref={fileInputRef} 
              onChange={handleFileChange} 
            />
            
            <input type="submit" className={s.popup_buttons_style} value="Добавить фильм"/>
            
            <button 
              type="button" 
              className={s.popup_buttons_style} 
              onClick={() => fileInputRef.current.click()}
            >
              {filmData.poster ? 'Постер выбран' : 'Загрузить постер'}
            </button>
            
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