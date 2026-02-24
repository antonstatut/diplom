import './styles_admin_index.css'

export default function AdminIndex() {
  return (
    <div className="main_admin_index">
      <div className="main_container">
        <div className="admin_header">
          <h2 className="header_text">Идём<span className="header_text_v">в</span>кино</h2>
          <p className="header_text_admin">Администраторррская</p>
        </div>
        <div className="admin_main">
          <section className="admin_main_section">
            <div className="section_header">
              <h2 className="section_header_text">Управление залами</h2>
            </div>
            <div className="section_main">
              <div className="hall_management_gap">
                <p className="wrapper_text">Доступные залы:</p>
                <ul className="hall_list">
                  <li className="item_hall">- Зал 1 <button className="item_hall_button"></button></li>
                  <li className="item_hall">- Зал 2 <button className="item_hall_button"></button></li>
                </ul>
                <button className="wrapper_button">Создать зал</button>
              </div>
            </div>
          </section>
          <section className="admin_main_section">
            <div className="section_header">
              <h2 className="section_header_text">Конфигурация залов</h2>
            </div>
            <div className="section_main">
              <div className="hall_configuration">
                <div className="configure">
                  <p className="wrapper_text">Выберите зал для конфигурации:</p>
                  <ul className="configure_list">
                    <li className="configure_item"><span className="configure_item_text active_config_item">Зал 1</span></li>
                    <li className="configure_item"><span className="configure_item_text">Зал 2</span></li>
                  </ul>
                </div>
              </div>
              <div className="places">
                <p className="wrapper_text">Укажите количество рядов и максимальное количество кресел в ряду:</p>
                <div className="conf_step_legend">
                  <div className="conf_step_legend_label">
                    <label htmlFor="">Рядов, шт</label>
                    <input className="conf_step_legend_input" type="number" placeholder="10"></input>
                  </div>
                  <p className="conf_step_legend_x">x</p>
                  <div className="conf_step_legend_label">
                    <label htmlFor="">Мест, шт</label>
                    <input className="conf_step_legend_input" type="number" placeholder="8"></input>
                  </div>
                </div>
              </div>
              <div className="types_chairs">
                <p className="wrapper_text">Теперь вы можете указать типы кресел на схеме зала:</p>
                <div className="chairs_info">
                  <div className="chair_container">
                    <span className="chair std_chair"></span>
                    <p>— обычные кресла</p>
                  </div>
                  <div className="chair_container">
                    <span className="chair vip_chair"></span>
                    <p>— VIP кресла</p>
                  </div>
                  <div className="chair_container">
                    <span className="chair"></span>
                    <p>— заблокированные (нет кресла)</p>
                  </div>
                </div>
                <p className="conf_step_hall_title">Чтобы изменить вид кресла, нажмите по нему левой кнопкой мыши</p>
                <div className="conf_step_hall">
                  <div className="conf_step_hall_wrapper">
                    <div className="conf-step_row">
                      <span className="chair"></span>
                      <span className="chair"></span>
                      <span className="chair"></span>
                      <span className="chair std_chair"></span>
                      <span className="chair std_chair"></span>
                      <span className="chair"></span>
                      <span className="chair"></span>
                      <span className="chair"></span>
                    </div>
                    <div className="conf-step_row">
                      <span className="chair"></span>
                      <span className="chair"></span>
                      <span className="chair std_chair"></span>
                      <span className="chair std_chair"></span>
                      <span className="chair std_chair"></span>
                      <span className="chair std_chair"></span>
                      <span className="chair"></span>
                      <span className="chair"></span>
                    </div>
                    <div className="conf-step_row">
                      <span className="chair"></span>
                      <span className="chair std_chair"></span>
                      <span className="chair std_chair"></span>
                      <span className="chair std_chair"></span>
                      <span className="chair std_chair"></span>
                      <span className="chair std_chair"></span>
                      <span className="chair std_chair"></span>
                      <span className="chair"></span>
                    </div>
                    <div className="conf-step_row">
                      <span className="chair std_chair"></span>
                      <span className="chair std_chair"></span>
                      <span className="chair std_chair"></span>
                      <span className="chair vip_chair"></span>
                      <span className="chair vip_chair"></span>
                      <span className="chair std_chair"></span>
                      <span className="chair std_chair"></span>
                      <span className="chair"></span>
                    </div>
                    <div className="conf-step_row">
                      <span className="chair std_chair"></span>
                      <span className="chair std_chair"></span>
                      <span className="chair vip_chair"></span>
                      <span className="chair vip_chair"></span>
                      <span className="chair vip_chair"></span>
                      <span className="chair vip_chair"></span>
                      <span className="chair std_chair"></span>
                      <span className="chair"></span>
                    </div>
                    <div className="conf-step_row">
                      <span className="chair std_chair"></span>
                      <span className="chair std_chair"></span>
                      <span className="chair vip_chair"></span>
                      <span className="chair vip_chair"></span>
                      <span className="chair vip_chair"></span>
                      <span className="chair vip_chair"></span>
                      <span className="chair std_chair"></span>
                      <span className="chair"></span>
                    </div>
                    <div className="conf-step_row">
                      <span className="chair std_chair"></span>
                      <span className="chair std_chair"></span>
                      <span className="chair vip_chair"></span>
                      <span className="chair vip_chair"></span>
                      <span className="chair vip_chair"></span>
                      <span className="chair vip_chair"></span>
                      <span className="chair std_chair"></span>
                      <span className="chair"></span>
                    </div>
                    <div className="conf-step_row">
                      <span className="chair std_chair"></span>
                      <span className="chair std_chair"></span>
                      <span className="chair std_chair"></span>
                      <span className="chair std_chair"></span>
                      <span className="chair std_chair"></span>
                      <span className="chair std_chair"></span>
                      <span className="chair std_chair"></span>
                      <span className="chair"></span>
                    </div>
                    <div className="conf-step_row">
                      <span className="chair std_chair"></span>
                      <span className="chair std_chair"></span>
                      <span className="chair std_chair"></span>
                      <span className="chair std_chair"></span>
                      <span className="chair std_chair"></span>
                      <span className="chair std_chair"></span>
                      <span className="chair std_chair"></span>
                      <span className="chair std_chair"></span>
                    </div>
                    <div className="conf-step_row">
                      <span className="chair std_chair"></span>
                      <span className="chair std_chair"></span>
                      <span className="chair std_chair"></span>
                      <span className="chair std_chair"></span>
                      <span className="chair std_chair"></span>
                      <span className="chair std_chair"></span>
                      <span className="chair std_chair"></span>
                      <span className="chair std_chair"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fieldset">
                <button className="fieldset_button">Отмена</button>
                <input className="fieldset_input" type="submit" value="Сохранить"></input>
              </div>
            </div>
          </section>
          <section className="admin_main_section">
            <div className="section_header">
              <h2 className="section_header_text">Конфигурация цен</h2>
            </div>
            <div className="section_main">
              <div className="hall_configuration">
                <div className="configure">
                  <p className="wrapper_text">Выберите зал для конфигурации:</p>
                  <ul className="configure_list">
                    <li className="configure_item"><span className="configure_item_text active_config_item">Зал 1</span></li>
                    <li className="configure_item"><span className="configure_item_text">Зал 2</span></li>
                  </ul>
                </div>
              </div>
              <div className="price_configuration_gap">
                <div className="conf_step_paragraph">
                  <p className="wrapper_text">Установите цены для типов кресел:</p>
                </div>
                <div className="price_type_chairs">
                  <div className="price_type_chairs_container">
                    <label htmlFor="price_chair_id" className="price_chairs_label">Цена, рублей</label>
                    <input type="number" className="price_chairs_input" id="price_chair_id" placeholder="0"></input>
                  </div>
                  <div className="side_content">
                    <p>за</p>
                    <span className="chair std_chair"></span>
                    <p>обычные кресла</p>
                  </div>
                </div>
                <div className="price_type_chairs">
                  <div className="price_type_chairs_container">
                    <label htmlFor="price_chair_id" className="price_chairs_label">Цена, рублей</label>
                    <input type="number" className="price_chairs_input_vip" id="price_chair_id" value="350" readOnly></input>
                  </div>
                  <div className="side_content">
                    <p>за</p>
                    <span className="chair vip_chair"></span>
                    <p>VIP кресла</p>
                  </div>
                </div>
                <div className="fieldset">
                  <button className="fieldset_button">Отмена</button>
                  <input className="fieldset_input" type="submit" value="Сохранить"></input>
                </div>
              </div>
            </div>
          </section>
          <section className="admin_main_section">
            <div className="section_header">
              <h2 className="section_header_text">Сетка сеансов</h2>
            </div>
            <div className="section_main">
              <div className="add_movie_button">
                <button className="add_movie">Добавить фильм</button>
              </div>
              <div className="movie_list">
                <div className="movie_info back_color_one">
                  <img src={`${import.meta.env.BASE_URL}movie_img.png`} className="movie_info_img" alt="movie"></img>
                    <div className="movie_info_gap">
                      <p className="movie_info_text">Звёздные войны XXIII: Атака клонированных клонов</p>
                      <p className="movie_info_time" >130 минут</p>
                    </div>
                    <div className="movie_delete">
                      <button className="item_hall_button"></button>
                    </div>
                </div>
                <div className="movie_info back_color_two">
                  <img src={`${import.meta.env.BASE_URL}movie_img.png`} className="movie_info_img" alt="movie"></img>
                    <div className="movie_info_gap">
                      <p className="movie_info_text">Миссия выполнима</p>
                      <p className="movie_info_time" >120 минут</p>
                    </div>
                    <div className="movie_delete">
                      <button className="item_hall_button"></button>
                    </div>
                </div>
                <div className="movie_info back_color_three">
                  <img src={`${import.meta.env.BASE_URL}movie_img.png`} className="movie_info_img" alt="movie"></img>
                    <div className="movie_info_gap">
                      <p className="movie_info_text">Серая пантера</p>
                      <p className="movie_info_time" >90 минут</p>
                    </div>
                    <div className="movie_delete">
                      <button className="item_hall_button"></button>
                    </div>
                </div>
                <div className="movie_info back_color_four">
                  <img src={`${import.meta.env.BASE_URL}movie_img.png`} className="movie_info_img" alt="movie"></img>
                    <div className="movie_info_gap">
                      <p className="movie_info_text">Движение вбок</p>
                      <p className="movie_info_time" >95 минут</p>
                    </div>
                    <div className="movie_delete">
                      <button className="item_hall_button"></button>
                    </div>
                </div>
                <div className="movie_info back_color_five">
                  <img src={`${import.meta.env.BASE_URL}movie_img.png`} className="movie_info_img" alt="movie"></img>
                    <div className="movie_info_gap">
                      <p className="movie_info_text">Кот Да Винчи</p>
                      <p className="movie_info_time" >100 минут</p>
                    </div>
                    <div className="movie_delete">
                      <button className="item_hall_button"></button>
                    </div>
                </div>
              </div>
              <div className="hall_movie_list">
                <div className="hall_movies">
                  <h3 className="hall_movies_heading">Зал 1</h3>
                  <div className="seances_timeline">
                    <div className="session" style={{start: "1", label: '00:00', bg: "#85FF89"}}>Миссия выполнима</div>
                    <div className="session" style={{start: "810", label: '12:00', bg: "#85FF89"}}>Миссия выполнима</div>
                    <div className="session" style={{start: "811", label: '14:00', bg: "#CAFF85"}}>Звёздные войны</div>
                  </div>
                </div>
                <div className="hall_movies">
                  <h3 className="hall_movies_heading">Зал 2</h3>
                  <div className="seances_timeline">
                    <div className="session" style={{start: 1439, label: '19:50', bg: "#85FF89"}}>Миссия выполнима</div>
                    <div className="session" style={{start: 1440, label: '22:00', bg: "#CAFF85"}}>Звёздные войны</div>
                  </div>
                </div>
              </div>
              <div className="fieldset">
                <button className="fieldset_button">Отмена</button>
                <input className="fieldset_input" type="submit" value="Сохранить"></input>
              </div>
            </div>
          </section>
          <section className="admin_main_section">
            <div className="section_header">
              <h2 className="section_header_text last_before">Открыть продажи</h2>
            </div>
            <div className="section_main">
              <div className="open_sale_gap">
                <p className="wrapper_text">Выбирите залл для открытия/закрытия продаж:</p>
                <ul className="configure_list">
                  <li className="configure_item"><span className="configure_item_text">Зал 1</span></li>
                  <li className="configure_item"><span className="configure_item_text active_config_item">Зал 2</span></li>
                </ul>
                <div className="open_sale_ready_container">
                  <p className="wrapper_text">Всё готово к открытию</p>
                </div>
                <div className="open_sale_button_container">
                  <button className="open_sale">Открыть продажу билетов</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}