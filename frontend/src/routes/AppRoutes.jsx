import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "../containers/Home";
import Login from "../containers/Login";
import Register from "../containers/Register";
import { getEmpleados } from "../redux/action/empleados";

const AppRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmpleados());
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
