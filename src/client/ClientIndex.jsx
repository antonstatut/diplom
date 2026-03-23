import { useState, useEffect } from 'react';
import { api } from '../api';
import s from './styles_client_index.module.css';
import { Link } from "react-router-dom";

export default function ClientIndex() {
  const [data, setData] = useState({ films: [], seances: [], halls: [] });
  // Текущая точка отсчета для календаря (по умолчанию сегодня)
  const [calendarStart, setCalendarStart] = useState(new Date());
  // Выбранная пользователем дата для фильтрации сеансов
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  useEffect(() => {
    api.getInitialData().then(res => setData(res));
  }, []);

  // Функция переключения на следующую неделю (+7 дней)
  const handleNextWeek = (e) => {
    e.preventDefault();
    const nextWeek = new Date(calendarStart);
    nextWeek.setDate(nextWeek.getDate() + 7);
    setCalendarStart(nextWeek);
  };

  // Генератор 7 дней от точки calendarStart
  const getDays = () => {
    const days = [];
    const weekDays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    const todayStr = new Date().toISOString().split('T')[0];

    for (let i = 0; i < 7; i++) {
      const d = new Date(calendarStart);
      d.setDate(d.getDate() + i);
      const iso = d.toISOString().split('T')[0];
      days.push({
        iso,
        dayName: weekDays[d.getDay()],
        dayNum: d.getDate(),
        isToday: iso === todayStr,
        isDayOff: d.getDay() === 0 || d.getDay() === 6
      });
    }
    return days;
  };

  const days = getDays();
  const openHalls = data.halls.filter(h => h.hall_open === 1);
  const openHallIds = openHalls.map(h => h.id);

  return (
    <div className={s.body_container}>
      <main>
        <div className={s.Header}>
          <p className={s.header_text}>Идём<span className={s.header_text_v}>в</span>кино</p>
          <Link to="/admin/login"><button className={s.header_button}>Войти</button></Link>
        </div>

        <nav className={s.Nav}>
          <div className={s.nav_list}>
            {days.map(day => (
              <a 
                key={day.iso}
                href="#"
                onClick={(e) => { e.preventDefault(); setSelectedDate(day.iso); }}
                className={`${s.nav_list_item} ${selectedDate === day.iso ? s.nav_list_item_active : ''} ${day.isDayOff ? s.day_off : ''}`}
              >
                <span className={day.isToday ? s.today : ''}>{day.dayName},</span>
                <span>{day.dayNum}</span>
              </a>
            ))}
            {/* ОЖИВЛЕННАЯ СТРЕЛКА */}
            <a href="#" className={s.nav_list_item_change} onClick={handleNextWeek}>{'>'}</a>
          </div>
        </nav>

        <div className={s.Main}>
          {data.films.map(film => {
            const filmSeances = data.seances.filter(seance => 
              seance.seance_filmid === film.id && openHallIds.includes(seance.seance_hallid)
            );

            if (filmSeances.length === 0) return null;

            return (
              <section key={film.id} className={s.Movie}>
                <div className={s.movie_info}>
                  <div className={s.movie_poster}>
                    <img src={film.film_poster} alt={film.film_name} className={s.poster} />
                  </div>
                  <div className={s.movie_description}>
                    <h2 className={s.movie_heading}>{film.film_name}</h2>
                    <p className={s.movie__synopsis}>{film.film_description}</p>
                    <span className={s.movie_data}>
                      <p>{film.film_duration} минут</p>
                      <p>{film.film_origin}</p>
                    </span>
                  </div>
                </div>

                {openHalls.map(hall => {
                  const hallSeances = filmSeances.filter(seance => seance.seance_hallid === hall.id);
                  if (hallSeances.length === 0) return null;

                  return (
                    <div key={hall.id} className={s.movie_seances_hall}>
                      <h3 className={s.movie_seances_heading}>{hall.hall_name}</h3>
                      <ul className={s.movie_time_list}>
                        {hallSeances.map(seance => (
                          <Link 
                            key={seance.id} 
                            to={`/client/hall/${seance.id}?date=${selectedDate}`}
                            className={s.movie_time_link}
                          >
                            <li className={s.movie_time_item}>{seance.seance_time}</li>
                          </Link>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
}