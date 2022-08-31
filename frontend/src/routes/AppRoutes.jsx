import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../containers/Home";

import Login from "../containers/Login";
import Register from "../containers/Register";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas Publicas */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rutas Privadas */}
        <Route path="/" element={<Home />} />

        {/* Redireccionamiento */}
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
