import { useState, useEffect } from 'react';
import { api } from '../api'; // проверьте путь до api.js
import s from './styles_admin_index.module.css'
import HallManagement from './components/HallManagemet';
import HallConfiguration from './components/HallConfiguration';
import PriceConfiguration from './components/PriceConfigutarion';
import SessionGRid from './components/SessionGrid';
import OpenSales from './components/OpenSales';

export default function AdminIndex() {
  const [halls, setHalls] = useState([]); // Храним залы здесь
  const [loading, setLoading] = useState(true);

  // Функция для загрузки данных, которую мы раздадим всем компонентам
  const refreshData = async () => {
    try {
      const data = await api.getInitialData();
      setHalls(data.halls);
      setLoading(false);
    } catch (err) {
      console.error("Ошибка загрузки данных:", err);
    }
  };

  // Загружаем при первом входе
  useEffect(() => {
    refreshData();
  }, []);

  if (loading) return <div>Загрузка админки...</div>;

  return (
      <div className={s.body_container}>
        <div className={s.main_container}>
          <div className={s.admin_header}>
            <h2 className={s.header_text}>Идём<span className={s.header_text_v}>в</span>кино</h2>
            <p className={s.header_text_admin}>Администраторррская</p>
          </div>
          <div className={s.admin_main}>
            {/* Передаем список и функцию обновления во все блоки */}
            <HallManagement halls={halls} onUpdate={refreshData} />
            
            <HallConfiguration halls={halls} onUpdate={refreshData} />
            
            <PriceConfiguration halls={halls} onUpdate={refreshData} />
            
            <SessionGRid halls={halls} onUpdate={refreshData} />
            
            <OpenSales halls={halls} onUpdate={refreshData} />
          </div>
        </div>
      </div>
  );
}