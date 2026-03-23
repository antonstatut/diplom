import s from '../styles_admin_index.module.css'

export default function SessionGRid () {

return (
    <section className={s.admin_main_section}>
                  <div className={s.section_header}>
                    <h2 className={s.section_header_text}>Сетка сеансов</h2>
                  </div>
                  <div className={s.section_main}>
                    <div className={s.add_movie_button}>
                      <button className={s.add_movie}>Добавить фильм</button>
                    </div>
                    <div className={s.movie_list}>
                      <div className={s.movie_info + ' ' + s.back_color_one}>
                        <img src={`${import.meta.env.BASE_URL}movie_img.png`} className={s.movie_info_img} alt="movie"></img>
                        <div className={s.movie_info_gap}>
                          <p className={s.movie_info_text}>Звёздные войны XXIII: Атака клонированных клонов</p>
                          <p className={s.movie_info_time} >130 минут</p>
                        </div>
                        <div className={s.movie_delete}>
                          <button className={s.item_hall_button}></button>
                        </div>
                      </div>
                      <div className={s.movie_info + ' ' + s.back_color_two}>
                        <img src={`${import.meta.env.BASE_URL}movie_img.png`} className={s.movie_info_img} alt="movie"></img>
                        <div className={s.movie_info_gap}>
                          <p className={s.movie_info_text}>Миссия выполнима</p>
                          <p className={s.movie_info_time} >120 минут</p>
                        </div>
                        <div className={s.movie_delete}>
                          <button className={s.item_hall_button}></button>
                        </div>
                      </div>
                      <div className={s.movie_info + ' ' + s.back_color_three}>
                        <img src={`${import.meta.env.BASE_URL}movie_img.png`} className={s.movie_info_img} alt="movie"></img>
                        <div className={s.movie_info_gap}>
                          <p className={s.movie_info_text}>Серая пантера</p>
                          <p className={s.movie_info_time} >90 минут</p>
                        </div>
                        <div className={s.movie_delete}>
                          <button className={s.item_hall_button}></button>
                        </div>
                      </div>
                      <div className={s.movie_info + ' ' + s.back_color_four}>
                        <img src={`${import.meta.env.BASE_URL}movie_img.png`} className={s.movie_info_img} alt="movie"></img>
                        <div className={s.movie_info_gap}>
                          <p className={s.movie_info_text}>Движение вбок</p>
                          <p className={s.movie_info_time} >95 минут</p>
                        </div>
                        <div className={s.movie_delete}>
                          <button className={s.item_hall_button}></button>
                        </div>
                      </div>
                      <div className={s.movie_info + ' ' + s.back_color_five}>
                        <img src={`${import.meta.env.BASE_URL}movie_img.png`} className={s.movie_info_img} alt="movie"></img>
                        <div className={s.movie_info_gap}>
                          <p className={s.movie_info_text}>Кот Да Винчи</p>
                          <p className={s.movie_info_time} >100 минут</p>
                        </div>
                        <div className={s.movie_delete}>
                          <button className={s.item_hall_button}></button>
                        </div>
                      </div>
                    </div>
                    <div className={s.hall_movie_list}>
                      <div className={s.hall_movies}>
                        <h3 className={s.hall_movies_heading}>Зал 1</h3>
                        <div className={s.seances_timeline}>
                          <div className={s.session} style={{ "--start": "1", "--label": '00:00', "--bg": "#85FF89" }}>Миссия выполнима</div>
                          <div className={s.session} style={{ "--start": "810", "--label": '12:00', "--bg": "#85FF89" }}>Миссия выполнима</div>
                          <div className={s.session} style={{ "--start": "811", "--label": '14:00', "--bg": "#CAFF85" }}>Звёздные войны</div>
                        </div>
                      </div>
                      <div className={s.hall_movies}>
                        <h3 className={s.hall_movies_heading}>Зал 2</h3>
                        <div className={s.seances_timeline}>
                          <div className={s.session} style={{ "--start": 1439, "--label": '19:50', "--bg": "#85FF89" }}>Миссия выполнима</div>
                          <div className={s.session} style={{ "--start": 1440, "--label": '22:00', "--bg": "#CAFF85" }}>Звёздные войны</div>
                        </div>
                      </div>
                    </div>
                    <div className={s.fieldset}>
                      <button className={s.fieldset_button}>Отмена</button>
                      <input className={s.fieldset_input} type="submit" value="Сохранить"></input>
                    </div>
                  </div>
                </section>
)
}