import { useState, useEffect } from 'react';
import { api } from '../../api';
import s from '../styles_admin_index.module.css';

export default function HallConfiguration({ halls, onUpdate }) {
  const [selectedHall, setSelectedHall] = useState(null);
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    if (halls && halls.length > 0 && !selectedHall) {
      setSelectedHall(halls[0]);
    }
  }, [halls, selectedHall]);

  useEffect(() => {
    if (selectedHall) {
      const r = selectedHall.hall_rows || 0;
      const c = selectedHall.hall_places || 0;
      setRows(r);
      setCols(c);

      const initialGrid = Array.isArray(selectedHall.hall_config) && selectedHall.hall_config.length > 0
        ? selectedHall.hall_config
        : Array.from({ length: r }, () => Array(c).fill('standart'));
      
      setGrid(initialGrid);
    }
  }, [selectedHall]);

  const handleSizeChange = (newRows, newCols) => {
    const r = Math.max(0, parseInt(newRows) || 0);
    const c = Math.max(0, parseInt(newCols) || 0);
    setRows(r);
    setCols(c);

    const newGrid = Array.from({ length: r }, (_, rIdx) =>
      Array.from({ length: c }, (_, cIdx) => grid[rIdx]?.[cIdx] || 'standart')
    );
    setGrid(newGrid);
  };

  const toggleChair = (rIdx, cIdx) => {
    const types = ['standart', 'vip', 'disabled'];
    const currentType = grid[rIdx][cIdx];
    const nextType = types[(types.indexOf(currentType) + 1) % types.length];

    const newGrid = grid.map((row, i) =>
      i === rIdx ? row.map((col, j) => (j === cIdx ? nextType : col)) : row
    );
    setGrid(newGrid);
  };

  const handleSave = async () => {
    try {
      await api.updateHallConfig(selectedHall.id, rows, cols, grid);
      alert('Конфигурация сохранена успешно!');
      if (onUpdate) onUpdate(); 
    } catch (err) {
      alert('Ошибка сохранения: ' + err.message);
    }
  };

  return (
    <section className={s.admin_main_section}>
      <div className={s.section_header}>
        <h2 className={s.section_header_text}>Конфигурация залов</h2>
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
          <div className={s.hall_edit_content}>
            <div className={s.places}>
              <p className={s.wrapper_text}>Укажите количество рядов и кресел:</p>
              <div className={s.conf_step_legend}>
                <div className={s.conf_step_legend_label}>
                  <label>Рядов, шт</label>
                  <input 
                    className={s.conf_step_legend_input} 
                    type="number" 
                    value={rows} 
                    onChange={(e) => handleSizeChange(e.target.value, cols)}
                  />
                </div>
                <p className={s.conf_step_legend_x}>x</p>
                <div className={s.conf_step_legend_label}>
                  <label>Мест, шт</label>
                  <input 
                    className={s.conf_step_legend_input} 
                    type="number" 
                    value={cols} 
                    onChange={(e) => handleSizeChange(rows, e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className={s.types_chairs}>
              <p className={s.wrapper_text}>Теперь вы можете указать типы кресел на схеме зала:</p>
              <div className={s.chairs_info}>
                <div className={s.chair_container}><span className={`${s.chair} ${s.std_chair}`}></span><p>— обычные</p></div>
                <div className={s.chair_container}><span className={`${s.chair} ${s.vip_chair}`}></span><p>— VIP</p></div>
                <div className={s.chair_container}><span className={s.chair}></span><p>— заблокированные</p></div>
              </div>

              <div className={s.conf_step_hall}>
                <div className={s.conf_step_hall_wrapper}>
                  {grid && grid.map((row, rIdx) => (
                    <div key={rIdx} className={s.conf_step_row}>
                      {row && row.map((type, cIdx) => (
                        <span 
                          key={`${rIdx}-${cIdx}`} 
                          className={`${s.chair} ${type === 'standart' ? s.std_chair : type === 'vip' ? s.vip_chair : ''}`} 
                          onClick={() => toggleChair(rIdx, cIdx)}
                        ></span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ИСПРАВЛЕННЫЙ БЛОК: кнопки по центру с оригинальными цветами */}
            <div className={s.fieldset} style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '30px' }}>
              <button 
                className={s.fieldset_button} 
                onClick={() => setSelectedHall(halls[0])}
              >
                Отмена
              </button>
              <input 
                type="submit" 
                className={s.fieldset_input} 
                value="Сохранить" 
                onClick={handleSave}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}