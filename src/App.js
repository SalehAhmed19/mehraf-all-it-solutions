import "./App.css";
import Navbar from "./Shared/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Shared/Footer/Footer";
import Login from "./Pages/Home/Login/Login.jsx";
import { FloatingWhatsApp } from "react-floating-whatsapp";

function App() {
  return (
    <div className="App">
      <FloatingWhatsApp
        phoneNumber="+8801758971667"
        accountName="Saleh Ahmed Mahin"
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
