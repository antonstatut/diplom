import s from './styles_popup_desktop.module.css'

export default function PopupDesktop() {

  return (
    <div className={s.body_container}>
      <div className={s.popup_content}>
        <div className={s.popup_header}>
          <h2 className={s.heading}>Добавление фильма</h2>
          <button className={s.close_btn}>
            <img className={s.popup_close} src={`${import.meta.env.BASE_URL}popup_close.png`} alt="Закрыть"/>
          </button>
        </div>
        <div className={s.popup_form}>
          <div className={s.film_form}>
            <label>Название фильма</label>
            <input type="text" className={s.input_base} placeholder="Например, «Гражданин Кейн»"/>
          </div>
          <div className={s.film_form}>
            <label>Продолжительность фильма (мин.)</label>
            <input type="text" className={s.input_base} name="film-duration"/>
          </div>
          <div className={s.film_form}>
            <label>Описание фильма</label>
            <textarea className={s.input-base + ' ' + s.description} name="film-description"></textarea>
          </div>
          <div className={s.film_form}>
            <label>Страна</label>
            <input type="text" className={s.input-base} name="film-country"/>
          </div>
        </div>
        <div className={s.popup_buttons}>
          <input type="submit" className={s.popup_buttons_style} value="добавить фильм"/>
            <input type="submit" className={s.popup_buttons_style} value="загрузить постер"/>
              <button className={s.popup_buttons_style + ' ' + s.cancell}>Отменить</button>
            </div>
        </div>
    </div>
  )
}
