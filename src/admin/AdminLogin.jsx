import s from './styles_admin_login.module.css'
import { Routes, Route, Link } from "react-router-dom"

export default function AdminLogin() {
  return (
    <div className={s.body_container}>
      <div className={s.main_container}>
        <div className={s.admin_header}>
          <h2 className={s.header_text}>Идём<span className={s.header_text_v}>в</span>кино</h2>
          <p className={s.header_text_admin}>Администраторррская</p>
        </div>
        <div className={s.admin_section}>
          <div className={s.section_header}>
            <p className={s.section_header_auth}>Авторизация</p>
          </div>
          <div className={s.admin_form}>
            <div className={s.admin_form_input}>
              <label htmlFor="input_email">E-mail</label>
              <input id="input_email" type="email" className={s.input_base} placeholder="example@domain.xyz"></input>
            </div>
            <div className={s.admin_form_input}>
              <label htmlFor="input_password">Пароль</label>
              <input id="input_password" type="password" className={s.input_base}></input>
            </div>
            <div className={s.form_input}>
              <Link to="/admin/index"><input type="submit" className={s.form_buttom} value="авторизоваться"></input></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
