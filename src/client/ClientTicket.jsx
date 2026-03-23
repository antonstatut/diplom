import { useLocation, Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import s from './styles_client_ticket.module.css';

export default function ClientTicket() {
  const location = useLocation();
  const qrCanvasRef = useRef(null);
  
  // Данные билетов из state
  const tickets = location.state?.tickets || [];

  useEffect(() => {
    const QR = window.QRCreator;

    // Проверка наличия библиотеки, данных и контейнера
    if (!QR || tickets.length === 0 || !qrCanvasRef.current) {
      return;
    }

    const ticket = tickets[0]; 
    if (!ticket || !ticket.ticket_filmname) return;

    const placesString = tickets.map(t => `${t.ticket_row}/${t.ticket_place}`).join(', ');
    const qrText = `Фильм: ${ticket.ticket_filmname}, Зал: ${ticket.ticket_hallname}, Ряд/Место: ${placesString}, Начало: ${ticket.ticket_time}`;

    // Очищаем контейнер перед вставкой
    qrCanvasRef.current.innerHTML = '';

    try {
      const result = QR(qrText, {
        image: 'html',
        modsize: 4,
        margin: 0
      }, (err, canvas) => {
        // Вариант А: Работа через callback
        if (!err && canvas) {
          canvas.style.display = 'block';
          canvas.style.margin = '0 auto';
          canvas.style.width = '100%';
          canvas.style.height = '100%';
          canvas.style.maxHeight = '100%'; // Ограничение по высоте
          canvas.style.objectFit = 'contain'; // Вписывание без искажений
          qrCanvasRef.current.appendChild(canvas);
        }
      });

      // Вариант Б: Работа через прямой возврат объекта
      const element = result?.result || (result instanceof HTMLElement ? result : null);
      if (element && qrCanvasRef.current.innerHTML === '') {
        element.style.display = 'block';
        element.style.margin = '0 auto';
        element.style.width = '100%';
        element.style.height = '100%';
        element.style.maxHeight = '100%'; // Ограничение по высоте
        element.style.objectFit = 'contain';
        qrCanvasRef.current.appendChild(element);
      }
    } catch (err) {
      console.error("Ошибка при генерации QR-кода:", err);
    }
  }, [tickets]);

  if (tickets.length === 0) {
    return (
      <div className={s.body_container}>
        <p style={{color: '#fff', textAlign: 'center', paddingTop: '50px'}}>
          Билет не найден. <Link to="/" style={{color: '#16A6AF'}}>Вернуться на главную</Link>
        </p>
      </div>
    );
  }

  const ticket = tickets[0];
  const placesString = tickets.map(t => `${t.ticket_row}/${t.ticket_place}`).join(', ');

  return (
    <div className={s.body_container}>
      <main>
        <div className={s.Header}>
          <Link to="/">
            <p className={s.header_text}>Идём<span className={s.header_text_v}>в</span>кино</p>
          </Link>
        </div>
        <div className={s.Main}>
          <div className={s.ticket_header}>
            <p className={s.ticket_header_text}>Электронный билет</p>
          </div>
          <div className={s.ticket_main}>
            <p className={s.ticket_info}>На фильм: <span className={s.ticket_info_span}>{ticket.ticket_filmname}</span></p>
            <p className={s.ticket_info}>Места: <span className={s.ticket_info_span}>{placesString}</span></p>
            <p className={s.ticket_info}>В зале: <span className={s.ticket_info_span}>{ticket.ticket_hallname}</span></p>
            <p className={s.ticket_info}>Начало сеанса: <span className={s.ticket_info_span}>{ticket.ticket_time}</span></p>
            
            <div className={s.qrcode}>
              {/* Контейнер для QR-кода */}
              <div ref={qrCanvasRef} className={s.img_qrcode}></div>
            </div>
            
            <p className={s.ticket_hint}>Покажите QR-код нашему контроллеру для подтверждения бронирования.</p>
            <p className={s.ticket_hint}>Приятного просмотра!</p>
          </div>
        </div>
      </main>
    </div>
  );
}