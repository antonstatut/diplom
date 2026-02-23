import { Routes, Route, Link } from "react-router-dom"
import ClientIndex  from "./client/ClientIndex"
import ClientPayment from "./client/ClientPayment"
import ClientHall from "./client/ClientHall"
import ClientTicket from "./client/ClientTicket"
import AdminLogin from "./admin/AdminLogin"
import AdminIndex from "./admin/AdminIndex"


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<ClientIndex />}> </Route>
      <Route path="/client/payment" element={<ClientPayment />}></Route>
      <Route path="/client/hall" element={<ClientHall />}></Route>
      <Route path="/client/ticket" element={<ClientTicket />}></Route>
      <Route path="/admin/login" element={<AdminLogin />}></Route>
      <Route path="/admin/index" element={<AdminIndex />}></Route>
    </Routes>
    </>
  )
}

export default App
