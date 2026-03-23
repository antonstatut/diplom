import { Routes, Route } from "react-router-dom"
import ClientIndex from "./client/ClientIndex"
import ClientPayment from "./client/ClientPayment"
import ClientHall from "./client/ClientHall"
import ClientTicket from "./client/ClientTicket"
import AdminLogin from "./admin/AdminLogin"
import AdminIndex from "./admin/AdminIndex"
import './app.css'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<ClientIndex />} />
      <Route path="/client/payment" element={<ClientPayment />} />
      
      {/* ИСПРАВЛЕННАЯ СТРОКА: добавляем :seanceId */}
      <Route path="/client/hall/:seanceId" element={<ClientHall />} />
      
      <Route path="/client/ticket" element={<ClientTicket />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/index" element={<AdminIndex />} />
    </Routes>
    </>
  )
}

export default App;
