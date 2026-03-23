import { useLocation, useNavigate, Link } from "react-router-dom";
import { api } from "../api"; // Проверьте путь
import s from './styles_client_payment.module.css';

export default function ClientPayment() {
  const location = useLocation();
  const navigate = useNavigate();

  // Достаем переданные данные из state
  const { selectedPlaces, seanceInfo, date } = location.state || {};

  // Если данных нет (например, обновили страницу), возвращаемся на главную
  if (!selectedPlaces || !seanceInfo) {
    return (
      <div className={s.body_container}>
        <p>Ошибка: данные заказа не найдены. <Link to="/">Вернуться на главную</Link></p>
      </div>
    );
  }

  // Считаем общую стоимость
  const totalCost = selectedPlaces.reduce((sum, p) => sum + p.coast, 0);

  // Формируем строку мест (например: Ряд 1 Место 5, Ряд 1 Место 6)
  const placesString = selectedPlaces.map(p => `${p.row}/${p.place}`).join(', ');

  const handleGetTicket = async () => {
    try {
      const orderData = {
        seanceId: seanceInfo.seance.id,
        ticketDate: date,
        tickets: selectedPlaces
      };

      // Отправляем запрос на покупку билета
      const tickets = await api.buyTicket(orderData);
      
      // Переходим на финальную страницу билета с полученными данными
      navigate('/client/ticket', { state: { tickets } });
    } catch (err) {
      alert("Ошибка при бронировании: " + err.message);
    }
  };

  return (
    <div className={s.body_container}>
      <main>
        <div className={s.Header}>
          <Link to="/">
            <p className={s.header_text}>Идём<span className={s.header_text_v}>в</span>кино</p>
          </Link>
        </div>
        <div className={s.Main}>
          <div className={s.ticket_header}>
            <p className={s.ticket_header_text}>Вы выбрали билеты:</p>
          </div>
          <div className={s.ticket_main}>
            <p className={s.ticket_info}>На фильм: <span className={s.ticket_info_span}>{seanceInfo.film?.film_name}</span></p>
            <p className={s.ticket_info}>Места (Ряд/Место): <span className={s.ticket_info_span}>{placesString}</span></p>
            <p className={s.ticket_info}>В зале: <span className={s.ticket_info_span}>{seanceInfo.hall?.hall_name}</span></p>
            <p className={s.ticket_info}>Начало сеанса: <span className={s.ticket_info_span}>{seanceInfo.seance?.seance_time}</span></p>
            <p className={s.ticket_info}>Стоимость: <span className={s.ticket_info_span}>{totalCost} рублей</span></p>

            <button className={s.booking_code} onClick={handleGetTicket}>
              Получить код бронирования
            </button>

            <p className={s.ticket_hint}>После оплаты билет будет доступен в этом окне, а также придёт вам на почту. Покажите QR-код нашему контроллёру у входа в зал.</p>
            <p className={s.ticket_hint}>Приятного просмотра!</p>
          </div>
        </div>
      </main>
    </div>
  );
}