import { useState, useEffect } from 'react';
import { api } from '../../api';
import s from '../styles_admin_index.module.css';
import PopupDesktop from '../../popup/PopupDesktop';
import PopupAddseans from '../../popup/PopupAddseans';

export default function SessionGrid({ halls, onUpdate }) {
  const [films, setFilms] = useState([]);
  const [seances, setSeances] = useState([]); // Сохраненные в БД
  const [tempSeances, setTempSeances] = useState([]); // Новые (черновики)
  const [seancesToDelete, setSeancesToDelete] = useState([]); // ID удаляемых из БД
  
  const [isMoviePopupOpen, setIsMoviePopupOpen] = useState(false);
  const [isSeancePopupOpen, setIsSeancePopupOpen] = useState(false);
  const [dropParams, setDropParams] = useState(null);

  const fetchData = async () => {
    try {
      const data = await api.getInitialData();
      setFilms(data.films || []);
      setSeances(data.seances || []);
      setTempSeances([]);
      setSeancesToDelete([]);
    } catch (err) { console.error("Ошибка загрузки:", err); }
  };

  useEffect(() => { fetchData(); }, [halls]);

  // --- DRAG & DROP ЛОГИКА ---

  // 1. Начало перетаскивания (фильм из списка или сеанс с таймлайна)
  const handleDragStart = (e, id, isTemp) => {
    if (isTemp === undefined) {
      // Тащим новый фильм из верхнего списка
      e.dataTransfer.setData('type', 'new_movie');
      e.dataTransfer.setData('id', String(id));
    } else {
      // Тащим существующий сеанс для удаления
      e.dataTransfer.setData('type', 'delete_seance');
      e.dataTransfer.setData('id', String(id));
      e.dataTransfer.setData('isTemp', String(isTemp));
      e.target.style.opacity = '0.3';
    }
    e.dataTransfer.effectAllowed = 'move';
  };

  // 2. Разрешаем Drop на всей площади секции
  const handleDragOver = (e) => {
    e.preventDefault(); 
  };

  // 3. Сброс "мимо" ленты (Удаление)
  const handleGlobalDrop = (e) => {
    e.preventDefault();
    const type = e.dataTransfer.getData('type');
    const id = e.dataTransfer.getData('id');
    const isTemp = e.dataTransfer.getData('isTemp') === 'true';

    if (type === 'delete_seance') {
      if (isTemp) {
        // Мгновенно убираем из черновиков
        setTempSeances(prev => prev.filter(sItem => sItem.tempId !== Number(id)));
      } else {
        // Помечаем на удаление из БД (исчезнет с экрана до Сохранить)
        setSeancesToDelete(prev => [...new Set([...prev, Number(id)])]);
      }
    }
  };

  // 4. Сброс строго на таймлайн (Добавление)
  const handleTimelineDrop = (e, hallId) => {
    e.preventDefault();
    e.stopPropagation(); // ВАЖНО: прерываем всплытие, чтобы не сработало удаление (GlobalDrop)
    
    const type = e.dataTransfer.getData('type');
    if (type !== 'new_movie') return;

    const filmId = e.dataTransfer.getData('id');
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const startMinutes = Math.floor((offsetX / rect.width) * 1440);
    
    const h = Math.floor(startMinutes / 60).toString().padStart(2, '0');
    const m = (startMinutes % 60).toString().padStart(2, '0');

    setDropParams({ hallId, filmId, time: `${h}:${m}` });
    setIsSeancePopupOpen(true);
  };

  // --- КНОПКИ ---

  const handleCancel = () => {
    setTempSeances([]);
    setSeancesToDelete([]);
  };

  const handleFinalSave = async () => {
    if (tempSeances.length === 0 && seancesToDelete.length === 0) return;
    try {
      // Сначала удаляем
      for (const id of seancesToDelete) {
        await api.deleteSeance(id);
      }
      // Затем добавляем
      for (const sItem of tempSeances) {
        await api.addSeance(sItem.seance_hallid, sItem.seance_filmid, sItem.seance_time);
      }
      alert("Изменения успешно сохранены!");
      fetchData();
      if (onUpdate) onUpdate();
    } catch (err) { alert("Ошибка сохранения: " + err.message); }
  };

  const calculateStart = (t) => {
    if (!t) return 0;
    const [h, m] = t.split(':').map(Number);
    return (h * 60) + m;
  };

  const colors = ['#85FF89', '#CAFF85', '#85FFD3', '#BB85FF', '#FF8585'];

  // Список для рендеринга (БД минус удаляемые плюс черновики)
  const visibleSeances = [
    ...seances.filter(sItem => !seancesToDelete.includes(sItem.id)),
    ...tempSeances
  ];

  return (
    <section 
      className={s.admin_main_section} 
      onDragOver={handleDragOver} 
      onDrop={handleGlobalDrop}
    >
      <div className={s.section_header}><h2 className={s.section_header_text}>Сетка сеансов</h2></div>
      <div className={s.section_main}>
        <div className={s.add_movie_button}>
          <button className={s.add_movie} onClick={() => setIsMoviePopupOpen(true)}>Добавить фильм</button>
        </div>

        <div className={s.movie_list}>
          {films.map((film, index) => (
            <div 
              key={film.id} 
              className={`${s.movie_info} ${s[`back_color_${(index % 5) + 1}`]}`}
              draggable 
              onDragStart={(e) => handleDragStart(e, film.id)}
            >
              <img src={film.film_poster} className={s.movie_info_img} alt="p" />
              <div className={s.movie_info_gap}>
                <p className={s.movie_info_text}>{film.film_name}</p>
                <p className={s.movie_info_time}>{film.film_duration} мин.</p>
              </div>
            </div>
          ))}
        </div>

        <div className={s.hall_movie_list}>
          {halls.map(hall => (
            <div key={hall.id} className={s.hall_movies}>
              <h3 className={s.hall_movies_heading}>{hall.hall_name}</h3>
              <div 
                className={s.seances_timeline} 
                onDragOver={handleDragOver}
                onDrop={(e) => handleTimelineDrop(e, hall.id)}
              >
                {visibleSeances
                  .filter(seance => seance.seance_hallid === hall.id)
                  .map(seance => {
                    const film = films.find(f => f.id === seance.seance_filmid);
                    const colorIdx = films.findIndex(f => f.id === seance.seance_filmid);
                    const isTemp = !!seance.isTemp;
                    const displayId = isTemp ? seance.tempId : seance.id;
                    
                    return (
                      <div 
                        key={isTemp ? `temp-${displayId}` : `real-${displayId}`}
                        className={s.session} 
                        draggable
                        onDragStart={(e) => handleDragStart(e, displayId, isTemp)}
                        onDragEnd={(e) => e.target.style.opacity = '1'}
                        style={{ 
                          "--start": calculateStart(seance.seance_time), 
                          "--label": `'${seance.seance_time}'`, 
                          "--bg": isTemp ? '#808080' : colors[colorIdx % colors.length],
                          border: isTemp ? '2px dashed #000' : 'none',
                          cursor: 'grab'
                        }}
                      >
                        {film?.film_name}
                      </div>
                    );
                  })
                }
              </div>
            </div>
          ))}
        </div>

        <div className={s.fieldset}>
          <button className={s.fieldset_button} onClick={handleCancel}>Отмена</button>
          <input className={s.fieldset_input} type="submit" value="Сохранить" onClick={handleFinalSave} />
        </div>
      </div>

      {isMoviePopupOpen && (
        <PopupDesktop onClose={() => setIsMoviePopupOpen(false)} onSave={(d) => api.addMovie(d).then(fetchData)} />
      )}
      {isSeancePopupOpen && (
        <PopupAddseans 
          halls={halls} films={films} initialData={dropParams}
          onClose={() => setIsSeancePopupOpen(false)} 
          onSave={(h, f, t) => {
            setTempSeances(prev => [...prev, { tempId: Date.now(), seance_hallid: Number(h), seance_filmid: Number(f), seance_time: t, isTemp: true }]);
            setIsSeancePopupOpen(false);
          }} 
        />
      )}
    </section>
  );
}