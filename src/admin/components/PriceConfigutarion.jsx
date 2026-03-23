import s from '../styles_admin_index.module.css'

export default function PriceConfiguration() {

    return (
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
    )
}