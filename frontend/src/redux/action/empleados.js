import { types } from "../types/empleadosTypes";

import axios from "axios";

const baseUrl = "https://calm-ravine-03693.herokuapp.com/api";

// Obtener los empleados
export const getEmpleados = () => {
  return async (dispatch) => {
    const { data } = await axios.get(`${baseUrl}/empleados`);
    dispatch(SyncGetEmpleados(data));
  };
};

const SyncGetEmpleados = (empleados) => ({
  type: types.leer,
  payload: empleados,
});

// Registrar empleado

export const postEmpleado = (empleado, navigate) => {
  return async (dispatch) => {
    await axios.post(`${baseUrl}/empleado`, empleado);
    window.location.href = "/";
    dispatch(syncPostEmpleado(empleado));
  };
};

const syncPostEmpleado = (empleado) => ({
  type: types.agregar,
  payload: empleado,
});

// Editar empleado

export const putEmpleado = (empleado, id) => {
  return async (dispatch) => {
    await axios.put(`${baseUrl}/empleado/${id}`, empleado);
    const { data } = await axios.get(`${baseUrl}/empleados`);
    dispatch(syncPutEmpleado(data));
  };
};

const syncPutEmpleado = (empleados) => ({
  type: types.editar,
  payload: empleados,
});

// Eliminar empleado

export const deleteEmpleado = (id) => {
  return async (dispatch) => {
    await axios.delete(`${baseUrl}/empleado/${id}`);
    dispatch(syncDeleteEmpleado(id));
  };
};

const syncDeleteEmpleado = (id) => ({
  type: types.eliminar,
  payload: id,
});
