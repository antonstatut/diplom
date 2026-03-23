import s from '../styles_admin_index.module.css'



export default function HallConfiguration() {

return (
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
            )
        }