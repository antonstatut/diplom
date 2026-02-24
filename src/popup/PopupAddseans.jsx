import s from './styles_popup_addseans.module.css'

export default function PopupAddseans() {

  return (
    <div className={s.body_container}>
      <div className={s.popup_content}>
        <div className={s.popup_header}>
          <h2 className={s.heading}>Добавление сеанса</h2>
          <button className={s['close-btn']}>
            <img className={s.popup_close} src={`${import.meta.env.BASE_URL}popup_close.png`} alt="Закрыть"/>
          </button>
        </div>
        <div className={s.popup_form}>
          <div className={s.select_container}>
            <label htmlFor="select_hall">Название зала</label>
            <select id="select_hall" name="select_hall" className={s['input-base']}>
              <option value="hall">Название зала</option>
              <option value="hall">Название зала</option>
              <option value="hall">Название зала</option>
            </select>
          </div>
          <div className={s.select_container}>
            <label htmlFor="select_film">Название фильма</label>
            <select id="select_film" name="select_film" className={s['input-base']}>
              <option value="film">Название фильма</option>
              <option value="film">Название фильма</option>
              <option value="film">Название фильма</option>
            </select>
          </div>
          <div className={s.select_container}>
            <label htmlFor="select_time">Время начала</label>
            <input id="select_time" type="time" className={s['input-base']}/>
          </div>
        </div>
        <div className={s.popup_buttons}>
          <input type="submit" className={s.popup_buttons_style} value="добавить фильм"/>
            <button className={s.popup_buttons_style + ' ' + s.cancell}>Отменить</button>
        </div>
      </div>
    </div>
  )
}
