import s from './styles_admin_index.module.css'

export default function AdminIndex() {

  return (
      <div className={s.body_container}>
        <div className={s.main_container}>
          <div className={s.admin_header}>
            <h2 className={s.header_text}>Идём<span className={s.header_text_v}>в</span>кино</h2>
            <p className={s.header_text_admin}>Администраторррская</p>
          </div>
          <div className={s.admin_main}>
            <section className={s.admin_main_section}>
              <div className={s.section_header}>
                <h2 className={s.section_header_text}>Управление залами</h2>
              </div>
              <div className={s.section_main}>
                <div className={s.hall_management_gap}>
                  <p className={s.wrapper_text}>Доступные залы:</p>
                  <ul className={s.hall_list}>
                    <li className={s.item_hall}>- Зал 1 <button className={s.item_hall_button}></button></li>
                    <li className={s.item_hall}>- Зал 2 <button className={s.item_hall_button}></button></li>
                  </ul>
                  <button className={s.wrapper_button}>Создать зал</button>
                </div>
              </div>
            </section>
            <section className={s.admin_main_section}>
              <div className={s.section_header}>
                <h2 className={s.section_header_text}>Конфигурация залов</h2>
              </div>
              <div className={s.section_main}>
                <div className={s.hall_configuration}>
                  <div className={s.configure}>
                    <p className={s.wrapper_text}>Выберите зал для конфигурации:</p>
                    <ul className={s.configure_list}>
                      <li className={s.configure_item}><span className={s.configure_item_text + ' ' + s.active_config_item}>Зал 1</span></li>
                      <li className={s.configure_item}><span className={s.configure_item_text}>Зал 2</span></li>
                    </ul>
                  </div>
                </div>
                <div className={s.places}>
                  <p className={s.wrapper_text}>Укажите количество рядов и максимальное количество кресел в ряду:</p>
                  <div className={s.conf_step_legend}>
                    <div className={s.conf_step_legend_label}>
                      <label htmlFor="">Рядов, шт</label>
                      <input className={s.conf_step_legend_input} type="number" placeholder="10"></input>
                    </div>
                    <p className={s.conf_step_legend_x}>x</p>
                    <div className={s.conf_step_legend_label}>
                      <label htmlFor="">Мест, шт</label>
                      <input className={s.conf_step_legend_input} type="number" placeholder="8"></input>
                    </div>
                  </div>
                </div>
                <div className={s.types_chairs}>
                  <p className={s.wrapper_text}>Теперь вы можете указать типы кресел на схеме зала:</p>
                  <div className={s.chairs_info}>
                    <div className={s.chair_container}>
                      <span className={s.chair + ' ' + s.std_chair}></span>
                      <p>— обычные кресла</p>
                    </div>
                    <div className={s.chair_container}>
                      <span className={s.chair + ' ' + s.vip_chair}></span>
                      <p>— VIP кресла</p>
                    </div>
                    <div className={s.chair_container}>
                      <span className={s.chair}></span>
                      <p>— заблокированные (нет кресла)</p>
                    </div>
                  </div>
                  <p className={s.conf_step_hall_title}>Чтобы изменить вид кресла, нажмите по нему левой кнопкой мыши</p>
                  <div className={s.conf_step_hall}>
                    <div className={s.conf_step_hall_wrapper}>
                      <div className={s.conf_step_row}>
                        <span className={s.chair}></span>
                        <span className={s.chair}></span>
                        <span className={s.chair}></span>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair}></span>
                        <span className={s.chair}></span>
                        <span className={s.chair}></span>
                      </div>
                      <div className={s.conf_step_row}>
                        <span className={s.chair}></span>
                        <span className={s.chair}></span>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair}></span>
                        <span className={s.chair}></span>
                      </div>
                      <div className={s.conf_step_row}>
                        <span className={s.chair}></span>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair}></span>
                      </div>
                      <div className={s.conf_step_row}>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair + ' ' + s.vip_chair}></span>
                        <span className={s.chair + ' ' + s.vip_chair}></span>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair}></span>
                      </div>
                      <div className={s.conf_step_row}>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair + ' ' + s.vip_chair}></span>
                        <span className={s.chair + ' ' + s.vip_chair}></span>
                        <span className={s.chair + ' ' + s.vip_chair}></span>
                        <span className={s.chair + ' ' + s.vip_chair}></span>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair}></span>
                      </div>
                      <div className={s.conf_step_row}>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair + ' ' + s.vip_chair}></span>
                        <span className={s.chair + ' ' + s.vip_chair}></span>
                        <span className={s.chair + ' ' + s.vip_chair}></span>
                        <span className={s.chair + ' ' + s.vip_chair}></span>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair}></span>
                      </div>
                      <div className={s.conf_step_row}>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair + ' ' + s.vip_chair}></span>
                        <span className={s.chair + ' ' + s.vip_chair}></span>
                        <span className={s.chair + ' ' + s.vip_chair}></span>
                        <span className={s.chair + ' ' + s.vip_chair}></span>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair}></span>
                      </div>
                      <div className={s.conf_step_row}>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair}></span>
                      </div>
                      <div className={s.conf_step_row}>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                      </div>
                      <div className={s.conf_step_row}>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                        <span className={s.chair + ' ' + s.std_chair}></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={s.fieldset}>
                  <button className={s.fieldset_button}>Отмена</button>
                  <input className={s.fieldset_input} type="submit" value="Сохранить"></input>
                </div>
              </div>
            </section>
            <section className={s.admin_main_section}>
              <div className={s.section_header}>
                <h2 className={s.section_header_text}>Конфигурация цен</h2>
              </div>
              <div className={s.section_main}>
                <div className={s.hall_configuration}>
                  <div className={s.configure}>
                    <p className={s.wrapper_text}>Выберите зал для конфигурации:</p>
                    <ul className={s.configure_list}>
                      <li className={s.configure_item}><span className={s.configure_item_text + ' ' + s.active_config_item}>Зал 1</span></li>
                      <li className={s.configure_item}><span className={s.configure_item_text}>Зал 2</span></li>
                    </ul>
                  </div>
                </div>
                <div className={s.price_configuration_gap}>
                  <div className={s.conf_step_paragraph}>
                    <p className={s.wrapper_text}>Установите цены для типов кресел:</p>
                  </div>
                  <div className={s.price_type_chairs}>
                    <div className={s.price_type_chairs_container}>
                      <label htmlFor="price_chair_id" className={s.price_chairs_label}>Цена, рублей</label>
                      <input type="number" className={s.price_chairs_input} id="price_chair_id" placeholder="0"></input>
                    </div>
                    <div className={s.side_content}>
                      <p>за</p>
                      <span className={s.chair + ' ' + s.std_chair}></span>
                      <p>обычные кресла</p>
                    </div>
                  </div>
                  <div className={s.price_type_chairs}>
                    <div className={s.price_type_chairs_container}>
                      <label htmlFor="price_chair_id" className={s.price_chairs_label}>Цена, рублей</label>
                      <input type="number" className={s.price_chairs_input_vip} id="price_chair_id" value="350" readOnly></input>
                    </div>
                    <div className={s.side_content}>
                      <p>за</p>
                      <span className={s.chair + ' ' + s.vip_chair}></span>
                      <p>VIP кресла</p>
                    </div>
                  </div>
                  <div className={s.fieldset}>
                    <button className={s.fieldset_button}>Отмена</button>
                    <input className={s.fieldset_input} type="submit" value="Сохранить"></input>
                  </div>
                </div>
              </div>
            </section>
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
            <section className={s.admin_main_section}>
              <div className={s.section_header}>
                <h2 className={s.section_header_text + ' ' + s.last_before}>Открыть продажи</h2>
              </div>
              <div className={s.section_main}>
                <div className={s.open_sale_gap}>
                  <p className={s.wrapper_text}>Выбирите залл для открытия/закрытия продаж:</p>
                  <ul className={s.configure_list}>
                    <li className={s.configure_item}><span className={s.configure_item_text}>Зал 1</span></li>
                    <li className={s.configure_item}><span className={s.configure_item_text + ' ' + s.active_config_item}>Зал 2</span></li>
                  </ul>
                  <div className={s.open_sale_ready_container}>
                    <p className={s.wrapper_text}>Всё готово к открытию</p>
                  </div>
                  <div className={s.open_sale_button_container}>
                    <button className={s.open_sale}>Открыть продажу билетов</button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
  );
}
