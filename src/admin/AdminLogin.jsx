import s from './styles_admin_login.module.css'
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

export default function AdminLogin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate(); // Хук для навигации

  const handleLogin = (e) => {
    e.preventDefault();

    const VALID_EMAIL = 'shfe-diplom@netology.ru';
    const VALID_PASSWORD = 'shfe-diplom';

    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      // Если данные верны, переходим на нужный роут
      navigate('/admin/index');
    } else {
      setError('Неверный логин или пароль');
    }
  };

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
          <form className={s.admin_form} onSubmit={handleLogin}>
            <div className={s.admin_form_input}>
              <label htmlFor="input_email">E-mail</label>
              <input id="input_email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={s.input_base} placeholder="example@domain.xyz"></input>
            </div>
            <div className={s.admin_form_input}>
              <label htmlFor="input_password">Пароль</label>
              <input id="input_password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={s.input_base}></input>
            </div>
            <div className={s.form_input}>
              <input type="submit" className={s.form_buttom} value="авторизоваться"></input>
            </div>
            {error && <p style={{color: 'red'}}>{error}</p>}
          </form>
        </div>
      </div>
    </div>
  )
}
