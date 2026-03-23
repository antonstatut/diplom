import { useState, useEffect } from 'react';
import { api } from '../../api';
import s from '../styles_admin_index.module.css';

export default function OpenSales({ halls, onUpdate }) {
  const [selectedHall, setSelectedHall] = useState(null);

  // Автоматический выбор первого зала при загрузке
  useEffect(() => {
    if (halls && halls.length > 0 && !selectedHall) {
      setSelectedHall(halls[0]);
    }
  }, [halls, selectedHall]);

  const handleToggleSales = async () => {
    if (!selectedHall) return;

    // Инвертируем статус: если 0 (закрыт), отправляем 1 (открыть) и наоборот
    const newStatus = selectedHall.hall_open === 0 ? 1 : 0;

    try {
      await api.toggleSales(selectedHall.id, newStatus);
      alert(newStatus === 1 ? 'Продажи в зале открыты!' : 'Продажи в зале приостановлены');
      
      // Обновляем данные в AdminIndex, чтобы статус изменился во всем приложении
      if (onUpdate) onUpdate(); 
    } catch (err) {
      alert('Ошибка при изменении статуса: ' + err.message);
    }
  };

  return (
    <section className={s.admin_main_section}>
      <div className={s.section_header}>
        <h2 className={`${s.section_header_text} ${s.last_before}`}>Открыть продажи</h2>
      </div>
      <div className={s.section_main}>
        <div className={s.open_sale_gap}>
          <p className={s.wrapper_text}>Выберите зал для открытия/закрытия продаж:</p>
          
          <ul className={s.configure_list}>
            {halls && halls.map(hall => (
              <li 
                key={hall.id} 
                className={s.configure_item} 
                onClick={() => setSelectedHall(hall)}
              >
                <span className={`${s.configure_item_text} ${selectedHall?.id === hall.id ? s.active_config_item : ''}`}>
                  {hall.hall_name}
                </span>
              </li>
            ))}
          </ul>

          <div className={s.open_sale_ready_container}>
            <p className={s.wrapper_text}>
              {selectedHall?.hall_open === 1 
                ? "Продажи билетов в этот зал уже открыты" 
                : "Всё готово к открытию"}
            </p>
          </div>

          <div className={s.open_sale_button_container}>
            <button 
              className={s.open_sale} 
              onClick={handleToggleSales}
              style={{ backgroundColor: selectedHall?.hall_open === 1 ? '#e64a19' : '' }}
            >
              {selectedHall?.hall_open === 1 ? 'Приостановить продажи' : 'Открыть продажу билетов'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}