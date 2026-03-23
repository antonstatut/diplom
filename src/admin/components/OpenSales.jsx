import s from '../styles_admin_index.module.css'

export default function OpenSales() {

    return (
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
    )
}