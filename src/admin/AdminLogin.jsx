import './styles_admin_login.css'
import { Routes, Route, Link } from "react-router-dom"

export default function AdminLogin() {
  return (
    <div className="admin_login_main">
      <div className="main_container">
        <div className="admin_header">
          <h2 className="header_text">Идём<span className="header_text_v">в</span>кино</h2>
          <p className="header_text_admin">Администраторррская</p>
        </div>
        <div className="admin_section">
          <div className="section_header">
            <p className="section_header_auth">Авторизация</p>
          </div>
          <div className="admin_form">
            <div className="admin_form_input">
              <label htmlFor="input_email">E-mail</label>
              <input id="input_email" type="email" className="input-base" placeholder="example@domain.xyz"></input>
            </div>
            <div className="admin_form_input">
              <label htmlFor="input_password">Пароль</label>
              <input id="input_password" type="password" className="input-base"></input>
            </div>
            <div className="form_input">
              <Link to="/admin/index"><input type="submit" className="form_buttom" value="авторизоваться"></input></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}