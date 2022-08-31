import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-screen h-screen flex justify-center items-center">
      <form className="bg-white w-80 py-12 px-10 rounded-xl flex flex-col">
        <h1 className="text-3xl text-center font-sans font-bold text-gray-800">
          REGISTER
        </h1>
        <input
          className="w-100 mt-5 mb-5 outline-none border-b-4 border-b-gray-400 focus:border-b-blue-400"
          type="text"
          placeholder="Nombres"
          required
        />
        <input
          className="w-100 mt-5 mb-5 outline-none border-b-4 border-b-gray-400 focus:border-b-blue-400"
          type="text"
          placeholder="Apellidos"
          required
        />
        <input
          className="w-100 mt-5 mb-5 outline-none border-b-4 border-b-gray-400 focus:border-b-blue-400"
          type="email"
          placeholder="Email"
          required
        />
        <input
          className="w-100 mt-5 mb-14 outline-none border-b-4 border-b-gray-400 focus:border-b-blue-400"
          type="password"
          placeholder="Contraseña"
          required
        />

        <button className="bg-gradient-to-r from-cyan-500 to-blue-500 w-max mx-auto py-3 px-14 text-xl font-semibold rounded-tl-full rounded-br-full text-gray-900">
          Registrate
        </button>
        <p className="mt-3">
          ¿Ya tienes cuenta?{" "}
          <Link to="/login" className="text-blue-600">
            Inicia Sesion
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
