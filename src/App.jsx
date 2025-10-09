import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from "aos";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home";
import CalendarioPage from "./pages/Calendario/CalendarioPage";
import "aos/dist/aos.css";
import DirectorioPage from "./pages/Directorio/DirectorioPage";
import RhPage from "./pages/RH/RhPage";
import CapacitacionPage from "./pages/Capacitacion/CapacitacionPage";
import { PerfilPage } from "./pages/Perfil/PerfilPage";
import Calidad from "./pages/Calidad/Calidad";
import Manufactura from "./pages/Manufactura/Manufactura";
import Seguridad from "./pages/Seguridad/Seguridad";
import Register from "./components/Auth/Register";
import { AuthProvider } from "./context/AuthContext";
import { Login } from "./components/Auth/Login";
import { DetalleNoticia } from "./components/DetalleNoticia/DetalleNoticia";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100
    });
  });

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="calendario" element={<CalendarioPage />} />
            <Route path="directorio" element={<DirectorioPage />} />
            <Route path="rh" element={<RhPage />} />
            <Route path="capacitacion" element={<CapacitacionPage />} />
            <Route path="calidad" element={<Calidad />} />
            <Route path="manufactura" element={<Manufactura />} />
            <Route path="EH&S" element={<Seguridad />} />
            <Route path="perfil" element={<PerfilPage />} />

            <Route path="/noticia/:id" element={<DetalleNoticia />} />
            <Route path="/register" element={<Register />} />

            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
