import s from './styles_admin_index.module.css'
import HallManagement from './components/HallManagemet';
import HallConfiguration from './components/HallConfiguration';
import PriceConfiguration from './components/PriceConfigutarion';
import SessionGRid from './components/SessionGrid';
import OpenSales from './components/OpenSales';

export default function AdminIndex() {

  return (
      <div className={s.body_container}>
        <div className={s.main_container}>
          <div className={s.admin_header}>
            <h2 className={s.header_text}>Идём<span className={s.header_text_v}>в</span>кино</h2>
            <p className={s.header_text_admin}>Администраторррская</p>
          </div>
          <div className={s.admin_main}>
            <HallManagement />
            <HallConfiguration />
            <PriceConfiguration />
            <SessionGRid />
            <OpenSales />
          </div>
        </div>
      </div>
  );
}
