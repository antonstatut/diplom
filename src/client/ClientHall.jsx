import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { api } from '../api';
import s from './styles_client_hall.module.css';

export default function ClientHall() {
  const { seanceId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const date = queryParams.get('date');

  const [seanceInfo, setSeanceInfo] = useState(null);
  const [hallConfig, setHallConfig] = useState([]);
  const [selectedPlaces, setSelectedPlaces] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const allData = await api.getInitialData();
        const seance = allData.seances.find(sItem => String(sItem.id) === String(seanceId));
        const film = allData.films.find(f => f.id === seance?.seance_filmid);
        const hall = allData.halls.find(h => h.id === seance?.seance_hallid);
        setSeanceInfo({ seance, film, hall });
        const config = await api.getSeanceHallConfig(seanceId, date);
        setHallConfig(config);
      } catch (e) { console.error(e); }
    }
    loadData();
  }, [seanceId, date]);

  const togglePlace = (rowIdx, colIdx, type) => {
    if (type === 'taken' || type === 'disabled') return;
    const isSelected = selectedPlaces.find(p => p.row === rowIdx && p.place === colIdx);
    if (isSelected) {
      setSelectedPlaces(selectedPlaces.filter(p => !(p.row === rowIdx && p.place === colIdx)));
    } else {
      const price = type === 'vip' ? seanceInfo.hall.hall_price_vip : seanceInfo.hall.hall_price_standart;
      setSelectedPlaces([...selectedPlaces, { row: rowIdx, place: colIdx, coast: Number(price) }]);
    }
  };

  if (!seanceInfo || !hallConfig.length) return null;

  return (
    <div className={s.body_container}>
      <main>
        <div className={s.Header}>
          <Link to="/">
            <p className={s.header_text}>Идём<span className={s.header_text_v}>в</span>кино</p>
          </Link>
        </div>
        <div className={s.Main}>
          <div className={s.session_info}>
            <h2 className={s.ticket_info}>{seanceInfo.film?.film_name}</h2>
            <p className={s.session_time}>Начало сеанса: {seanceInfo.seance?.seance_time}</p>
            <p className={s.ticket_info}>{seanceInfo.hall?.hall_name}</p>
          </div>
          
          <div className={s.buying_scheme}>
            <div className={s.buying_scheme_wrapper}>
              <div className={s.buying_scheme_container}>
                {hallConfig.map((row, rIdx) => (
                  <div key={rIdx} className={s.buying_scheme_row}>
                    {row.map((type, cIdx) => {
                      let statusClass = '';
                      if (selectedPlaces.find(p => p.row === rIdx && p.place === cIdx)) statusClass = s.selected;
                      else if (type === 'standart') statusClass = s.free;
                      else if (type === 'vip') statusClass = s.vip;
                      else if (type === 'taken') statusClass = s.taken;
                      return (
                        <span 
                          key={cIdx} 
                          className={s.buying_scheme_space + (statusClass ? ' ' + statusClass : '')}
                          onClick={() => togglePlace(rIdx, cIdx, type)}
                        ></span>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            <div className={s.buying_scheme_legend}>
              <div className={s.free_space}>
                <div className={s.space_info}>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <p className={s.text_price}>Свободно ({seanceInfo.hall.hall_price_standart}руб)</p>
                </div>
                <div className={s.space_info}>
                  <span className={s.buying_scheme_space + ' ' + s.vip}></span>
                  <p className={s.text_price}>Свободно VIP ({seanceInfo.hall.hall_price_vip}руб)</p>
                </div>
              </div>
              <div className={s.busy_space}>
                <div className={s.space_info}>
                  <span className={s.buying_scheme_space + ' ' + s.taken}></span>
                  <p className={s.text_price}>Занято</p>
                </div>
                <div className={s.space_info}>
                  <span className={s.buying_scheme_space + ' ' + s.selected}></span>
                  <p className={s.text_price}>Выбрано</p>
                </div>
              </div>
            </div>
          </div>

          <div className={s.client_hall_button}>
            <button 
              className={s.reserved_button} 
              disabled={selectedPlaces.length === 0}
              onClick={() => navigate('/client/payment', { 
                state: { 
                  selectedPlaces: selectedPlaces.map(p => ({...p, row: p.row + 1, place: p.place + 1})), 
                  seanceInfo, 
                  date 
                } 
              })}
            >
              Забронировать
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}