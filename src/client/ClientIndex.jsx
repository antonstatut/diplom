import AdminLogin from '../admin/AdminLogin';
import './styles_client_index.css';
import { Routes, Route, Link } from "react-router-dom"

export default function ClientIndex() {

  return (
    <main>
      <div className="Header">
        <p className="header_text">Идём<span className="header_text_v">в</span>кино</p>
        <Link to="/admin/login"><button className="header_button">Войти</button></Link>
      </div>
      <div className="Nav">
        <div className="nav_list">
          <a href="" className="nav_list_item"><span className="today">Пн,</span><span>31</span></a>
          <a href="" className="nav_list_item"><span>Вт,</span><span>1</span></a>
          <a href="" className="nav_list_item nav_list_item_active"><span>Ср,</span><span>2</span></a>
          <a href="" className="nav_list_item"><span>Чт,</span><span>3</span></a>
          <a href="" className="nav_list_item"><span>Пт,</span><span>4</span></a>
          <a href="" className="nav_list_item day_off"><span>Сб,</span><span>5</span></a>
          <a href="" className="nav_list_item_change">{'>'}</a>
        </div>
      </div>
      <div className="Main">
        <section className="Movie">
          <div className="movie_info">
            <span className="movie_poster">
              <img src="../../public/poster1.jpg" alt="" className="poster"></img>
            </span>
            <div className="movie_description">
              <h2 className="movie_heading">Звёздные войны XXIII: Атака клонированных клонов</h2>
              <p className="movie__synopsis">Две сотни лет назад малороссийские хутора разоряла шайка нехристей-ляхов во главе с могущественным колдуном.</p>
              <span className="movie_data">
                <p>130 минут</p>
                <p>США</p>
              </span>
            </div>
          </div>
          <div className="movie_seances_hall">
            <h3 className="movie_seances_heading">Зал 1</h3>
            <ul className="movie_time_list">
              <Link to="/client/hall"><li className="movie_time_item">10:20</li></Link>
              <Link to="/client/hall"><li className="movie_time_item">14:10</li></Link>
              <Link to="/client/hall"><li className="movie_time_item">18:40</li></Link>
              <Link to="/client/hall"><li className="movie_time_item">22:00</li></Link>
            </ul>
          </div>
          <div className="movie_seances_hall">
            <h3 className="movie_seances_heading">Зал 2</h3>
            <ul className="movie_time_list">
              <Link to="/client/hall"><li className="movie_time_item">11:15</li></Link>
              <Link to="/client/hall"><li className="movie_time_item">14:40</li></Link>
              <Link to="/client/hall"><li className="movie_time_item">16:00</li></Link>
              <Link to="/client/hall"><li className="movie_time_item">18:30</li></Link>
              <Link to="/client/hall"><li className="movie_time_item">21:00</li></Link>
              <Link to="/client/hall"><li className="movie_time_item">23:30</li></Link>
            </ul>
          </div>
        </section>
        <section className="Movie">
          <div className="movie_info">
            <span className="movie_poster">
              <img src="../../public/poster2.jpg" alt="" className="poster"></img>
            </span>
            <div className="movie_description">
              <h2 className="movie_heading">Альфа</h2>
              <p className="movie__synopsis">20 тысяч лет назад Земля была холодным и неуютным местом, в котором смерть подстерегала человека на каждом шагу.</p>
              <span className="movie_data">
                <p>96 минут</p>
                <p>Франция</p>
              </span>
            </div>
          </div>
          <div className="movie_seances_hall">
            <h3 className="movie_seances_heading">Зал 1</h3>
            <ul className="movie_time_list">
              <Link to="/client/hall"><li className="movie_time_item">10:20</li></Link>
              <Link to="/client/hall"><li className="movie_time_item">14:10</li></Link>
              <Link to="/client/hall"><li className="movie_time_item">18:40</li></Link>
              <Link to="/client/hall"><li className="movie_time_item">22:00</li></Link>
            </ul>
          </div>
          <div className="movie_seances_hall">
            <h3 className="movie_seances_heading">Зал 2</h3>
            <ul className="movie_time_list">
              <Link to="/client/hall"><li className="movie_time_item">11:15</li></Link>
              <Link to="/client/hall"><li className="movie_time_item">14:40</li></Link>
              <Link to="/client/hall"><li className="movie_time_item">16:00</li></Link>
              <Link to="/client/hall"><li className="movie_time_item">18:30</li></Link>
              <Link to="/client/hall"><li className="movie_time_item">21:00</li></Link>
              <Link to="/client/hall"><li className="movie_time_item">23:30</li></Link>
            </ul>
          </div>
        </section>
        <section className="Movie">
          <div className="movie_info">
            <span className="movie_poster">
              <img src="../../public/poster2.jpg" alt="" className="poster"></img>
            </span>
            <div className="movie_description">
              <h2 className="movie_heading">Хищник</h2>
              <p className="movie__synopsis">Самые опасные хищники Вселенной, прибыв из глубин космоса, высаживаются на улицах маленького городка, чтобы начать свою кровавую охоту. Генетически модернизировав себя с помощью ДНК других видов, охотники стали ещё сильнее, умнее и беспощаднее.</p>
              <span className="movie_data">
                <p>101 минута</p>
                <p>Канада,США</p>
              </span>
            </div>
          </div>
          <div className="movie_seances_hall">
            <h3 className="movie_seances_heading">Зал 1</h3>
            <ul className="movie_time_list">
              <Link to="/client/hall"><li className="movie_time_item">09:00</li></Link>
              <Link to="/client/hall"><li className="movie_time_item">10:10</li></Link>
              <Link to="/client/hall"><li className="movie_time_item">12:55</li></Link>
              <Link to="/client/hall"><li className="movie_time_item">14:15</li></Link>
              <Link to="/client/hall"><li className="movie_time_item">14:50</li></Link>
              <Link to="/client/hall"><li className="movie_time_item">16:30</li></Link>
              <Link to="/client/hall"><li className="movie_time_item">18:00</li></Link>
              <Link to="/client/hall"><li className="movie_time_item">18:50</li></Link>
              <Link to="/client/hall"><li className="movie_time_item">19:50</li></Link>
              <Link to="/client/hall"><li className="movie_time_item">20:55</li></Link>
              <Link to="/client/hall"><li className="movie_time_item">22:00</li></Link>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}