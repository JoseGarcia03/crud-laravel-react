import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div classNameName="bg-gradient-to-r from-cyan-500 to-blue-500 w-screen h-screen flex justify-center items-center">
      <form classNameName="bg-white w-80 py-12 px-10 rounded-xl flex flex-col">
        <h1 classNameName="text-3xl text-center font-sans font-bold text-gray-800">
          LOGIN
        </h1>
        <input
          classNameName="w-100 mt-5 mb-5 outline-none border-b-4 border-b-gray-400 focus:border-b-blue-400"
          type="email"
          placeholder="Email"
          required
        />
        <input
          classNameName="w-100 mt-5 mb-14 outline-none border-b-4 border-b-gray-400 focus:border-b-blue-400"
          type="password"
          placeholder="Contraseña"
          required
        />
        <button classNameName="bg-gradient-to-r from-cyan-500 to-blue-500 w-max mx-auto py-3 px-14 text-xl font-semibold rounded-tl-full rounded-br-full text-gray-900">
          Iniciar Sesion
        </button>
        <p classNameName="mt-3">
          ¿Aun no tienes cuenta?{" "}
          <Link to="/register" classNameName="text-blue-600">
            Registrate
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
