import s from './styles_client_ticket.module.css';
import { Routes, Route, Link } from "react-router-dom"

export default function ClientTicket() {

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
            <p className={s.ticket_header_text}>Электронный билет</p>
          </div>
          <div className={s.ticket_main}>
            <p className={s.ticket_info}>На фильм: <span className={s.ticket_info_span}>Звёздные войны XXIII: Атака клонированных клонов</span></p>
            <p className={s.ticket_info}>Места: <span className={s.ticket_info_span}>6, 7</span></p>
            <p className={s.ticket_info}>В зале: <span className={s.ticket_info_span}>1</span></p>
            <p className={s.ticket_info}>Начало сеанса: <span className={s.ticket_info_span}>18:30</span></p>
            <div className={s.qrcode}>
              <img src={`${import.meta.env.BASE_URL}qrcode.png`} className={s.img_qrcode} alt="qr code not found!"></img>
            </div>
            <p className={s.ticket_hint}>Покажите QR-код нашему контроллеру для подтверждения бронирования.</p>
            <p className={s.ticket_hint}>Приятного просмотра!</p>
          </div>
        </div>
      </main>
    </div>
  );
}
