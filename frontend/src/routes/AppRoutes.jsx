import { useEffect } from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import axios from "axios";

import Home from "../containers/Home";
import Login from "../containers/Login";
import Register from "../containers/Register";

const AppRoutes = () => {
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/empleados")
      .then((resp) => console.log(resp.data));
  }, []);

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
