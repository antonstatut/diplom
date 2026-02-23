import './styles_client_payment.css';
import { Routes, Route, Link } from "react-router-dom"

export default function ClientPayment() {

  return (
    <main>
      <div className="Header">
        <Link to="/client">
        <p className="header_text">Идём<span className="header_text_v">в</span>кино</p>
        </Link>
      </div>
      <div className="Main">
        <div className="ticket_header">
          <p className="ticket_header_text">Вы выбрали билеты:</p>
        </div>
        <div className="ticket_main">
          <p className="ticket_info">На фильм: <span className="ticket_info_span">Звёздные войны XXIII: Атака клонированных клонов</span></p>
          <p className="ticket_info">Места: <span className="ticket_info_span">6, 7</span></p>
          <p className="ticket_info">В зале: <span className="ticket_info_span">1</span></p>
          <p className="ticket_info">Начало сеанса: <span className="ticket_info_span">18:30</span></p>
          <p className="ticket_info">Стоимость: <span className="ticket_info_span">600 рублей</span></p>
          
          <button className="booking_code"><Link to="/client/ticket">Получить код бронирования</Link></button>
          
          <p className="ticket_hint">После оплаты билет будет доступен в этом окне, а также придёт вам на почту. Покажите QR-код нашему контроллёру у входа в зал.</p>
          <p className="ticket_hint">Приятного просмотра!</p>
        </div>
      </div>
    </main>
  );
}