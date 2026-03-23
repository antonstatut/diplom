import { useState, useEffect } from 'react';
import { api } from '../../api';
import s from '../styles_admin_index.module.css';

export default function PriceConfiguration({ halls, onUpdate }) {
  const [selectedHall, setSelectedHall] = useState(null);
  const [priceStandart, setPriceStandart] = useState(0);
  const [priceVip, setPriceVip] = useState(0);

  // Автовыбор первого зала при загрузке
  useEffect(() => {
    if (halls && halls.length > 0 && !selectedHall) {
      setSelectedHall(halls[0]);
    }
  }, [halls, selectedHall]);

  // Подгружаем цены выбранного зала в инпуты
  useEffect(() => {
    if (selectedHall) {
      setPriceStandart(selectedHall.hall_price_standart || 0);
      setPriceVip(selectedHall.hall_price_vip || 0);
    }
  }, [selectedHall]);

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await api.updatePrices(selectedHall.id, priceStandart, priceVip);
      alert('Цены успешно сохранены!');
      if (onUpdate) onUpdate(); // Обновляем данные в AdminIndex
    } catch (err) {
      alert('Ошибка при сохранении цен: ' + err.message);
    }
  };

  const handleCancel = () => {
    if (selectedHall) {
      setPriceStandart(selectedHall.hall_price_standart);
      setPriceVip(selectedHall.hall_price_vip);
    }
  };

  return (
    <section className={s.admin_main_section}>
      <div className={s.section_header}>
        <h2 className={s.section_header_text}>Конфигурация цен</h2>
      </div>
      <div className={s.section_main}>
        <div className={s.hall_configuration}>
          <div className={s.configure}>
            <p className={s.wrapper_text}>Выберите зал для конфигурации:</p>
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
          </div>
        </div>

        {selectedHall && (
          <form className={s.price_configuration_gap} onSubmit={handleSave}>
            <div className={s.conf_step_paragraph}>
              <p className={s.wrapper_text}>Установите цены для типов кресел:</p>
            </div>
            
            {/* Обычные кресла */}
            <div className={s.price_type_chairs}>
              <div className={s.price_type_chairs_container}>
                <label className={s.price_chairs_label}>Цена, рублей</label>
                <input 
                  type="number" 
                  className={s.price_chairs_input} 
                  value={priceStandart}
                  onChange={(e) => setPriceStandart(e.target.value)}
                  placeholder="0"
                />
              </div>
              <div className={s.side_content}>
                <p>за</p>
                <span className={`${s.chair} ${s.std_chair}`}></span>
                <p>обычные кресла</p>
              </div>
            </div>

            {/* VIP кресла */}
            <div className={s.price_type_chairs}>
              <div className={s.price_type_chairs_container}>
                <label className={s.price_chairs_label}>Цена, рублей</label>
                <input 
                  type="number" 
                  className={s.price_chairs_input_vip} 
                  value={priceVip}
                  onChange={(e) => setPriceVip(e.target.value)}
                  placeholder="0"
                />
              </div>
              <div className={s.side_content}>
                <p>за</p>
                <span className={`${s.chair} ${s.vip_chair}`}></span>
                <p>VIP кресла</p>
              </div>
            </div>

            <div className={s.fieldset}>
              <button 
                type="button" 
                className={s.fieldset_button} 
                onClick={handleCancel}
              >
                Отмена
              </button>
              <input 
                className={s.fieldset_input} 
                type="submit" 
                value="Сохранить" 
              />
            </div>
          </form>
        )}
      </div>
    </section>
  );
}