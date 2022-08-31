import { types } from "../types/empleadosTypes";

export const empleados = (state = [], action) => {
  switch (action.type) {
    case types.leer:
      return action.payload;
    case types.agregar:
      return [...state, action.payload];
    case types.eliminar:
      return state.filter((emple) => emple.id != action.payload);
    case types.editar:
      return action.payload;
    default:
      return state;
  }
};
