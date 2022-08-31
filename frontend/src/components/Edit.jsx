import { useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { putEmpleado } from "../redux/action/empleados";

const Edit = ({ view, setView, empleado }) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      nombre: empleado?.nombre,
      apellido: empleado?.apellido,
      email: empleado?.email,
      edad: empleado?.edad,
      cargo: empleado?.cargo,
      telefono: empleado?.telefono,
    },
    enableReinitialize: true,
    onSubmit: (data) => {
      dispatch(putEmpleado(data, empleado?.id));
      setView(false);
      //   dispatch(postEmpleado(data, navigate));
    },
  });

  //

  return (
    view && (
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-cyan-500 to-blue-500 w-screen h-screen flex justify-center items-center">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white w-80 py-12 px-10 rounded-xl flex flex-col"
        >
          <h1 className="text-3xl text-center font-sans font-bold text-gray-800">
            EDITAR
          </h1>
          <input
            className="w-100 mt-1 outline-none border-0 border-b-4 border-b-gray-400 focus:border-b-blue-400"
            type="text"
            placeholder="Nombres"
            name="nombre"
            onChange={formik.handleChange}
            value={formik.values?.nombre}
            // required
          />
          <input
            className="w-100 mt-1 outline-none border-0 border-b-4 border-b-gray-400 focus:border-b-blue-400"
            type="text"
            placeholder="Apellidos"
            name="apellido"
            onChange={formik.handleChange}
            value={formik.values?.apellido}
            // required
          />
          <input
            className="w-100 mt-1 outline-none border-0 border-b-4 border-b-gray-400 focus:border-b-blue-400"
            type="email"
            placeholder="Email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values?.email}
            // required
          />
          <input
            className="w-100 mt-1 outline-none border-0 border-b-4 border-b-gray-400 focus:border-b-blue-400"
            type="tel"
            placeholder="Telefono"
            name="telefono"
            onChange={formik.handleChange}
            value={formik.values?.telefono}
            // required
          />
          <input
            className="w-100 mt-1 outline-none border-0 border-b-4 border-b-gray-400 focus:border-b-blue-400"
            type="number"
            placeholder="Edad"
            name="edad"
            onChange={formik.handleChange}
            value={formik.values?.edad}
            // required
          />
          <input
            className="w-100 mt-1 mb-10 outline-none border-0 border-b-4 border-b-gray-400 focus:border-b-blue-400"
            type="text"
            placeholder="Cargo"
            onChange={formik.handleChange}
            value={formik.values?.cargo}
            name="cargo"
            // required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 w-max mx-auto py-3 px-14 text-xl font-semibold rounded-xl text-gray-900"
          >
            EDITAR
          </button>
        </form>
      </div>
    )
  );
};

export default Edit;
