import { useState, useEffect } from 'react';
import { api } from '../../api'; // Проверь путь до файла с классом API
import s from '../styles_admin_index.module.css';
import PopupAddhall from '../../popup/PopupAddhall';

export default function HallManagement({ halls, onUpdate }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // 1. Загрузка списка залов
  const fetchHalls = async () => {
    try {
      const data = await api.getInitialData();
      onUpdate(data.halls);
    } catch (err) {
      console.error('Ошибка загрузки:', err.message);
    }
  };

  useEffect(() => {
    fetchHalls();
  }, []);

  // 2. Функция добавления зала (передаем в попап)
  const handleAddHall = async (name) => {
  try {
    const result = await api.createHall(name);
    // Так как сервер возвращает { halls: [] }, берем именно поле halls
    onUpdate(result.halls); 
    setIsPopupOpen(false);
  } catch (err) {
    alert(err.message);
  }
};

  // 3. Функция удаления зала
  const handleDeleteHall = async (id, name) => {
    if (!window.confirm(`Удалить зал "${name}"?`)) return;
    
    try {
      const result = await api.deleteHall(id);
      onUpdate(result.halls); // Обновляем список из ответа сервера
    } catch (err) {
      alert('Ошибка при удалении: ' + err.message);
    }
  };

  return (
    <section className={s.admin_main_section}>
      <div className={s.section_header}>
        <h2 className={s.section_header_text}>Управление залами</h2>
      </div>
      <div className={s.section_main}>
        <div className={s.hall_management_gap}>
          <p className={s.wrapper_text}>Доступные залы:</p>
          <ul className={s.hall_list}>
            {halls.map((hall) => (
              <li key={hall.id} className={s.item_hall}>
                - {hall.hall_name} 
                <button 
                  className={s.item_hall_button} 
                  onClick={() => handleDeleteHall(hall.id, hall.hall_name)}
                />
              </li>
            ))}
          </ul>
          {/* Открываем попап при клике */}
          <button className={s.wrapper_button} onClick={() => setIsPopupOpen(true)}>
            Создать зал
          </button>
        </div>
      </div>

      {/* Рендерим попап, если стейт true */}
      {isPopupOpen && (
        <PopupAddhall 
          onClose={() => setIsPopupOpen(false)} 
          onSave={handleAddHall} 
        />
      )}
    </section>
  );
}