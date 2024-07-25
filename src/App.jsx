import {BrowserRouter, Routes, Route} from "react-router-dom"
import Otp from "./pages/OTP-Form/Otp"
import DNDCards from "./pages/Course-List/DNDCards"
import Batches from "./pages/Batches/Batches"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Otp />} />
        <Route path="/course-list" element={<DNDCards />} />
        <Route path="/batches" element={<Batches />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App