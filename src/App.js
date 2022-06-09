import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Appointment from "./components/Appointment/Appointment/Appointment";
import Home from "./components/Home/Home/Home";
import TopMenu from "./components/Shared-pages/TopMenu/TopMenu";
function App() {
  return (
    <BrowserRouter>
      <TopMenu />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
