import s from '../styles_admin_index.module.css'



export default function HallManagement() {

  return (
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
  )
}