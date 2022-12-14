import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postEmpleado } from "../redux/action/empleados";

export const Register = ({ viewR, setViewR }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      edad: "",
      cargo: "",
      telefono: "",
    },
    onSubmit: (data) => {
      dispatch(postEmpleado(data, navigate));
      setViewR(false);
    },
  });
  return (
    viewR && (
      <div className="absolute top-0 bg-gradient-to-r from-cyan-500 to-blue-500 w-screen h-screen flex justify-center items-center">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white w-80 py-12 px-10 rounded-xl flex flex-col"
        >
          <h1 className="text-3xl text-center font-sans font-bold text-gray-800">
            AGREGAR
          </h1>
          <input
            className="w-100 mt-1 outline-none border-0 border-b-4 border-b-gray-400 focus:border-b-blue-400"
            type="text"
            placeholder="Nombres"
            name="nombre"
            onChange={formik.handleChange}
            // required
          />
          <input
            className="w-100 mt-1 outline-none border-0 border-b-4 border-b-gray-400 focus:border-b-blue-400"
            type="text"
            placeholder="Apellidos"
            name="apellido"
            onChange={formik.handleChange}
            // required
          />
          <input
            className="w-100 mt-1 outline-none border-0 border-b-4 border-b-gray-400 focus:border-b-blue-400"
            type="email"
            placeholder="Email"
            name="email"
            onChange={formik.handleChange}
            // required
          />
          <input
            className="w-100 mt-1 outline-none border-0 border-b-4 border-b-gray-400 focus:border-b-blue-400"
            type="tel"
            placeholder="Telefono"
            name="telefono"
            onChange={formik.handleChange}
            // required
          />
          <input
            className="w-100 mt-1 outline-none border-0 border-b-4 border-b-gray-400 focus:border-b-blue-400"
            type="number"
            placeholder="Edad"
            name="edad"
            onChange={formik.handleChange}
            // required
          />
          <input
            className="w-100 mt-1 mb-10 outline-none border-0 border-b-4 border-b-gray-400 focus:border-b-blue-400"
            type="text"
            placeholder="Cargo"
            onChange={formik.handleChange}
            name="cargo"
            // required
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 w-max mx-auto py-3 px-14 text-xl font-semibold rounded-tl-full rounded-br-full text-gray-900"
          >
            AGREGAR
          </button>
        </form>
      </div>
    )
  );
};

export default Register;
