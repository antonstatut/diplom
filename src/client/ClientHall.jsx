import s from './styles_client_hall.module.css';
import { Routes, Route, Link } from "react-router-dom"

export default function ClientHall() {

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
            <h2 className={s.ticket_info}>Звёздные войны XXIII: Атака клонированных клонов</h2>
            <p className={s.session_time}>Начало сеанса: 18:30</p>
            <p className={s.ticket_info}>Зал 1</p>
          </div>
          <div className={s.buying_scheme}>
            <div className={s.buying_scheme_wrapper}>
              <div className={s.buying_scheme_container}>
                <div className={s.buying_scheme_row}>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                </div>
                <div className={s.buying_scheme_row}>
                  <span className={s.buying_scheme_space}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                </div>
                <div className={s.buying_scheme_row}>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                </div>
                <div className={s.buying_scheme_row}>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.vip}></span>
                  <span className={s.buying_scheme_space + ' ' + s.vip}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                </div>
                <div className={s.buying_scheme_row}>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.vip}></span>
                  <span className={s.buying_scheme_space + ' ' + s.vip}></span>
                  <span className={s.buying_scheme_space + ' ' + s.vip}></span>
                  <span className={s.buying_scheme_space + ' ' + s.vip}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                </div>
                <div className={s.buying_scheme_row}>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.vip}></span>
                  <span className={s.buying_scheme_space}></span>
                  <span className={s.buying_scheme_space}></span>
                  <span className={s.buying_scheme_space}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                </div>
                <div className={s.buying_scheme_row}>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.vip}></span>
                  <span className={s.buying_scheme_space}></span>
                  <span className={s.buying_scheme_space}></span>
                  <span className={s.buying_scheme_space + ' ' + s.vip}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                </div>
                <div className={s.buying_scheme_row}>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.selected}></span>
                  <span className={s.buying_scheme_space + ' ' + s.selected}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                </div>
                <div className={s.buying_scheme_row}>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                </div>
                <div className={s.buying_scheme_row}>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space}></span>
                  <span className={s.buying_scheme_space}></span>
                  <span className={s.buying_scheme_space}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                </div>
              </div>
            </div>
            <div className={s.buying_scheme_legend}>
              <div className={s.free_space}>
                <div className={s.space_info}>
                  <span className={s.buying_scheme_space + ' ' + s.free}></span>
                  <p className={s.text_price}>Свободно (250руб)</p>
                </div>
                <div className={s.space_info}>
                  <span className={s.buying_scheme_space + ' ' + s.vip}></span>
                  <p className={s.text_price}>Свободно VIP(350руб)</p>
                </div>
              </div>
              <div className={s.busy_space}>
                <div className={s.space_info}>
                  <span className={s.buying_scheme_space}></span>
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
            <button className={s.reserved_button}><Link to="/client/payment">Забронировать</Link></button>
          </div>
        </div>
      </main>
    </div>
  )
}
