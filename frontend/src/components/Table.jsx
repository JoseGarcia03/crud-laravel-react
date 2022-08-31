import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import { deleteEmpleado } from "../redux/action/empleados";

const Table = ({ setView, setEmpleado }) => {
  const { empleados } = useSelector((state) => state);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleDelete = ({ target }) => {
    dispatch(deleteEmpleado(target.id));
  };

  const handleEdit = (empleado) => {
    setView(true);
    setEmpleado(empleado);
  };

  useEffect(() => {}, [empleados]);

  return (
    <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              NOMBRE
            </th>
            <th scope="col" className="py-3 px-6">
              APELLIDO
            </th>
            <th scope="col" className="py-3 px-6">
              CARGO
            </th>
            <th scope="col" className="py-3 px-6">
              TELEFONO
            </th>
            <th scope="col" className="py-3 px-6">
              EMAIL
            </th>
            <th scope="col" className="py-3 px-6">
              EDAD
            </th>
            <th scope="col" className="py-3 px-6">
              ACCIONES
            </th>
          </tr>
        </thead>
        <tbody>
          {empleados.map((empleado, idx) => (
            <tr
              key={idx}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="py-4 px-6">{empleado?.nombre}</td>
              <td className="py-4 px-6">{empleado?.apellido}</td>
              <td className="py-4 px-6">{empleado?.cargo}</td>
              <td className="py-4 px-6">{empleado?.telefono}</td>
              <td className="py-4 px-6">{empleado?.email}</td>
              <td className="py-4 px-6">{empleado?.edad}</td>
              <td className="py-4 px-6">
                <button onClick={() => handleEdit(empleado)} className="mr-4">
                  Editar
                </button>
                <button id={empleado.id} onClick={handleDelete}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
