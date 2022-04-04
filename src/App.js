import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Navigations from "./components/Shared-pages/Navigations";
function App() {
  return (
    <BrowserRouter>
      <Navigations></Navigations>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
