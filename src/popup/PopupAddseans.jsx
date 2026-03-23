import { useState, useEffect } from 'react';
import s from './styles_popup_addseans.module.css';

export default function PopupAddseans({ halls, films, initialData, onClose, onSave }) {
  // Состояния для полей формы
  const [selectedHallId, setSelectedHallId] = useState('');
  const [selectedFilmId, setSelectedFilmId] = useState('');
  const [seanceTime, setSeanceTime] = useState('00:00');

  // При открытии подставляем данные из Drag & Drop
  useEffect(() => {
    if (initialData) {
      setSelectedHallId(initialData.hallId || '');
      setSelectedFilmId(initialData.filmId || '');
      setSeanceTime(initialData.time || '00:00');
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedHallId && selectedFilmId && seanceTime) {
      onSave(selectedHallId, selectedFilmId, seanceTime);
    }
  };

  return (
    <div className={s.body_container}>
      <div className={s.popup_content}>
        <div className={s.popup_header}>
          <h2 className={s.heading}>Добавление сеанса</h2>
          <button className={s['close-btn']} onClick={onClose}>
            <img className={s.popup_close} src={`${import.meta.env.BASE_URL}popup_close.png`} alt="Закрыть"/>
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className={s.popup_form}>
            <div className={s.select_container}>
              <label htmlFor="select_hall">Название зала</label>
              <select 
                id="select_hall" 
                className={s['input-base']}
                value={selectedHallId}
                onChange={(e) => setSelectedHallId(e.target.value)}
                required
              >
                <option value="" disabled>Выберите зал</option>
                {halls.map(hall => (
                  <option key={hall.id} value={hall.id}>{hall.hall_name}</option>
                ))}
              </select>
            </div>

            <div className={s.select_container}>
              <label htmlFor="select_film">Название фильма</label>
              <select 
                id="select_film" 
                className={s['input-base']}
                value={selectedFilmId}
                onChange={(e) => setSelectedFilmId(e.target.value)}
                required
              >
                <option value="" disabled>Выберите фильм</option>
                {films.map(film => (
                  <option key={film.id} value={film.id}>{film.film_name}</option>
                ))}
              </select>
            </div>

            <div className={s.select_container}>
              <label htmlFor="select_time">Время начала</label>
              <input 
                id="select_time" 
                type="time" 
                className={s['input-base']}
                value={seanceTime}
                onChange={(e) => setSeanceTime(e.target.value)}
                required
              />
            </div>
          </div>

          <div className={s.popup_buttons}>
            <input type="submit" className={s.popup_buttons_style} value="Добавить сеанс"/>
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