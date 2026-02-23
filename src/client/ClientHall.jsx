import './styles_client_hall.css';
import { Routes, Route, Link } from "react-router-dom"

export default function ClientHall() {

  return (
    <main>
      <div className="Header">
        <Link to="/">
        <p className="header_text">Идём<span className="header_text_v">в</span>кино</p>
        </Link>
      </div>
      <div className="Main">
        <div className="session_info">
          <h2 className="ticket_info">Звёздные войны XXIII: Атака клонированных клонов</h2>
          <p className="session_time">Начало сеанса: 18:30</p>
          <p className="ticket_info">Зал 1</p>
        </div>
        <div className="buying_scheme">
          <div className="buying_scheme_wrapper">
            <div className="buying_scheme_container">
              <div className="buying_scheme_row">
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space free"></span>
              </div>
              <div className="buying_scheme_row">
                <span className="buying_scheme_space"></span>
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space free"></span>
              </div>
              <div className="buying_scheme_row">
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space free"></span>
              </div>
              <div className="buying_scheme_row">
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space vip"></span>
                <span className="buying_scheme_space vip"></span>
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space free"></span>
              </div>
              <div className="buying_scheme_row">
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space vip"></span>
                <span className="buying_scheme_space vip"></span>
                <span className="buying_scheme_space vip"></span>
                <span className="buying_scheme_space vip"></span>
                <span className="buying_scheme_space free"></span>
              </div>
              <div className="buying_scheme_row">
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space vip"></span>
                <span className="buying_scheme_space"></span>
                <span className="buying_scheme_space"></span>
                <span className="buying_scheme_space"></span>
                <span className="buying_scheme_space free"></span>
              </div>
              <div className="buying_scheme_row">
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space vip"></span>
                <span className="buying_scheme_space"></span>
                <span className="buying_scheme_space"></span>
                <span className="buying_scheme_space vip"></span>
                <span className="buying_scheme_space free"></span>
              </div>
              <div className="buying_scheme_row">
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space selected"></span>
                <span className="buying_scheme_space selected"></span>
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space free"></span>
              </div>
              <div className="buying_scheme_row">
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space"></span>
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space"></span>
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space"></span>
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space free"></span>
              </div>
              <div className="buying_scheme_row">
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space"></span>
                <span className="buying_scheme_space"></span>
                <span className="buying_scheme_space"></span>
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space free"></span>
                <span className="buying_scheme_space free"></span>
              </div>
            </div>
          </div>
          <div className="buying_scheme_legend">
            <div className="free_space">
              <div className="space_info">
                <span className="buying_scheme_space free"></span>
                <p className="text_price">Свободно (250руб)</p>
              </div>
              <div className="space_info">
                <span className="buying_scheme_space vip"></span>
                <p className="text_price">Свободно VIP(350руб)</p>
              </div>
            </div>
            <div className="busy_space">
              <div className="space_info">
                <span className="buying_scheme_space"></span>
                <p className="text_price">Занято</p>
              </div>
              <div className="space_info">
                <span className="buying_scheme_space selected"></span>
                <p className="text_price">Выбрано</p>
              </div>
            </div>
          </div>
        </div>
        <div className="client_hall_button">
          <button className="reserved_button"><Link to="/client/payment">Забронировать</Link></button>
        </div>
      </div>
    </main>
  )
}