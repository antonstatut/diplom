import './styles_client_ticket.css';
import { Routes, Route, Link } from "react-router-dom"

export default function ClientTicket() {

  return (
    <main>
      <div className="Header">
        <Link to="/">
        <p className="header_text">Идём<span className="header_text_v">в</span>кино</p>
        </Link>
      </div>
      <div className="Main">
        <div className="ticket_header">
          <p className="ticket_header_text">Электронный билет</p>
        </div>
        <div className="ticket_main">
          <p className="ticket_info">На фильм: <span className="ticket_info_span">Звёздные войны XXIII: Атака клонированных клонов</span></p>
          <p className="ticket_info">Места: <span className="ticket_info_span">6, 7</span></p>
          <p className="ticket_info">В зале: <span className="ticket_info_span">1</span></p>
          <p className="ticket_info">Начало сеанса: <span className="ticket_info_span">18:30</span></p>
          <div className="qrcode">
            <img src={`${import.meta.env.BASE_URL}qrcode.png`} className="img_qrcode" alt="qr code not found!"></img>
          </div>
          <p className="ticket_hint">Покажите QR-код нашему контроллеру для подтверждения бронирования.</p>
          <p className="ticket_hint">Приятного просмотра!</p>
        </div>
      </div>
    </main>
  );
}