import s from './styles_client_index.module.css';
import { Routes, Route, Link } from "react-router-dom"

export default function ClientIndex() {

  return (
    <div className={s.body_container}>
      <main>
        <div className={s.Header}>
          <p className={s.header_text}>Идём<span className={s.header_text_v}>в</span>кино</p>
          <Link to="/admin/login"><button className={s.header_button}>Войти</button></Link>
        </div>
        <div className={s.Nav}>
          <div className={s.nav_list}>
            <a href="" className={s.nav_list_item}><span className={s.today}>Пн,</span><span>31</span></a>
            <a href="" className={s.nav_list_item}><span>Вт,</span><span>1</span></a>
            <a href="" className={s.nav_list_item + ' ' + s.nav_list_item_active}><span>Ср,</span><span>2</span></a>
            <a href="" className={s.nav_list_item}><span>Чт,</span><span>3</span></a>
            <a href="" className={s.nav_list_item}><span>Пт,</span><span>4</span></a>
            <a href="" className={s.nav_list_item + ' ' + s.day_off}><span>Сб,</span><span>5</span></a>
            <a href="" className={s.nav_list_item_change}>{'>'}</a>
          </div>
        </div>
        <div className={s.Main}>
          <section className={s.Movie}>
            <div className={s.movie_info}>
              <span className={s.movie_poster}>
                <img src={`${import.meta.env.BASE_URL}poster1.jpg`} alt="" className={s.poster}></img>
              </span>
              <div className={s.movie_description}>
                <h2 className={s.movie_heading}>Звёздные войны XXIII: Атака клонированных клонов</h2>
                <p className={s.movie__synopsis}>Две сотни лет назад малороссийские хутора разоряла шайба нехристей-ляхов во главе с могущественным колдуном.</p>
                <span className={s.movie_data}>
                  <p>130 минут</p>
                  <p>США</p>
                </span>
              </div>
            </div>
            <div className={s.movie_seances_hall}>
              <h3 className={s.movie_seances_heading}>Зал 1</h3>
              <ul className={s.movie_time_list}>
                <Link to="/client/hall"><li className={s.movie_time_item}>10:20</li></Link>
                <Link to="/client/hall"><li className={s.movie_time_item}>14:10</li></Link>
                <Link to="/client/hall"><li className={s.movie_time_item}>18:40</li></Link>
                <Link to="/client/hall"><li className={s.movie_time_item}>22:00</li></Link>
              </ul>
            </div>
            <div className={s.movie_seances_hall}>
              <h3 className={s.movie_seances_heading}>Зал 2</h3>
              <ul className={s.movie_time_list}>
                <Link to="/client/hall"><li className={s.movie_time_item}>11:15</li></Link>
                <Link to="/client/hall"><li className={s.movie_time_item}>14:40</li></Link>
                <Link to="/client/hall"><li className={s.movie_time_item}>16:00</li></Link>
                <Link to="/client/hall"><li className={s.movie_time_item}>18:30</li></Link>
                <Link to="/client/hall"><li className={s.movie_time_item}>21:00</li></Link>
                <Link to="/client/hall"><li className={s.movie_time_item}>23:30</li></Link>
              </ul>
            </div>
          </section>
          <section className={s.Movie}>
            <div className={s.movie_info}>
              <span className={s.movie_poster}>
                <img src={`${import.meta.env.BASE_URL}poster2.jpg`} alt="" className={s.poster}></img>
              </span>
              <div className={s.movie_description}>
                <h2 className={s.movie_heading}>Альфа</h2>
                <p className={s.movie__synopsis}>20 тысяч лет назад Земля была холодным и неуютным местом, в котором смерть подстерегала человека на каждом шагу.</p>
                <span className={s.movie_data}>
                  <p>96 минут</p>
                  <p>Франция</p>
                </span>
              </div>
            </div>
            <div className={s.movie_seances_hall}>
              <h3 className={s.movie_seances_heading}>Зал 1</h3>
              <ul className={s.movie_time_list}>
                <Link to="/client/hall"><li className={s.movie_time_item}>10:20</li></Link>
                <Link to="/client/hall"><li className={s.movie_time_item}>14:10</li></Link>
                <Link to="/client/hall"><li className={s.movie_time_item}>18:40</li></Link>
                <Link to="/client/hall"><li className={s.movie_time_item}>22:00</li></Link>
              </ul>
            </div>
            <div className={s.movie_seances_hall}>
              <h3 className={s.movie_seances_heading}>Зал 2</h3>
              <ul className={s.movie_time_list}>
                <Link to="/client/hall"><li className={s.movie_time_item}>11:15</li></Link>
                <Link to="/client/hall"><li className={s.movie_time_item}>14:40</li></Link>
                <Link to="/client/hall"><li className={s.movie_time_item}>16:00</li></Link>
                <Link to="/client/hall"><li className={s.movie_time_item}>18:30</li></Link>
                <Link to="/client/hall"><li className={s.movie_time_item}>21:00</li></Link>
                <Link to="/client/hall"><li className={s.movie_time_item}>23:30</li></Link>
              </ul>
            </div>
          </section>
          <section className={s.Movie}>
            <div className={s.movie_info}>
              <span className={s.movie_poster}>
                <img src={`${import.meta.env.BASE_URL}poster2.jpg`} alt="" className={s.poster}></img>
              </span>
              <div className={s.movie_description}>
                <h2 className={s.movie_heading}>Хищник</h2>
                <p className={s.movie__synopsis}>Самые опасные хищники Вселенной, прибыв из глубин космоса, высаживаются на улицах маленького городка, чтобы начать свою кровавую охоту. Генетически модернизировав себя с помощью ДНК других видов, охотники стали ещё сильнее, умнее и беспощаднее.</p>
                <span className={s.movie_data}>
                  <p>101 минута</p>
                  <p>Канада,США</p>
                </span>
              </div>
            </div>
            <div className={s.movie_seances_hall}>
              <h3 className={s.movie_seances_heading}>Зал 1</h3>
              <ul className={s.movie_time_list}>
                <Link to="/client/hall"><li className={s.movie_time_item}>09:00</li></Link>
                <Link to="/client/hall"><li className={s.movie_time_item}>10:10</li></Link>
                <Link to="/client/hall"><li className={s.movie_time_item}>12:55</li></Link>
                <Link to="/client/hall"><li className={s.movie_time_item}>14:15</li></Link>
                <Link to="/client/hall"><li className={s.movie_time_item}>14:50</li></Link>
                <Link to="/client/hall"><li className={s.movie_time_item}>16:30</li></Link>
                <Link to="/client/hall"><li className={s.movie_time_item}>18:00</li></Link>
                <Link to="/client/hall"><li className={s.movie_time_item}>18:50</li></Link>
                <Link to="/client/hall"><li className={s.movie_time_item}>19:50</li></Link>
                <Link to="/client/hall"><li className={s.movie_time_item}>20:55</li></Link>
                <Link to="/client/hall"><li className={s.movie_time_item}>22:00</li></Link>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
