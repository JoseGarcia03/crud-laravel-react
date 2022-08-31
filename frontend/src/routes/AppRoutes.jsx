import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../containers/Login";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas Publicas */}
        <Route path="/login" element={<Login />} />

        {/* Rutas Privadas */}

        {/* Redireccionamiento */}
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
