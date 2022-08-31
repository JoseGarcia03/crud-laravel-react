import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-screen h-screen flex justify-center items-center">
      <form className="bg-white w-80 py-12 px-10 rounded-xl flex flex-col">
        <h1 className="text-3xl text-center font-sans font-bold text-gray-800">
          LOGIN
        </h1>
        <input
          className="w-100 mt-5 mb-5 outline-none border-b-4 border-b-gray-400 focus:border-b-blue-400"
          type="email"
          placeholder="Correo Electronico"
          required
        />
        <input
          className="w-100 mt-5 mb-14 outline-none border-b-4 border-b-gray-400 focus:border-b-blue-400"
          type="password"
          placeholder="Contraseña"
          required
        />
        <button className="bg-gradient-to-r from-cyan-500 to-blue-500 w-max mx-auto py-3 px-14 text-xl font-semibold rounded-tl-full rounded-br-full text-gray-900">
          Iniciar Sesion
        </button>
        <p className="mt-3">
          ¿Aun no tienes cuenta?{" "}
          <Link to="/register" className="text-blue-600">
            Registrate
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
