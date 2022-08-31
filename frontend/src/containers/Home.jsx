import { useEffect, useState } from "react";
import Aside from "../components/Aside";
import Edit from "../components/Edit";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import Register from "./Register";

const Home = () => {
  const [view, setView] = useState(false);
  const [viewR, setViewR] = useState(false);
  const [empleado, setEmpleado] = useState({});

  useEffect(() => {}, [empleado]);

  return (
    <>
      <Navbar />
      <main className="flex">
        <Aside />
        <div>
          <h1 className="text-4xl my-10">Dashboard</h1>
          <Table setView={setView} setEmpleado={setEmpleado} />
        </div>
      </main>
      <div
        onClick={() => setViewR(true)}
        className="absolute text-3xl cursor-pointer right-14 bottom-8 inline-flex flex-shrink-0 justify-center items-center w-14 h-14 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200"
      >
        +
      </div>
      <Register viewR={viewR} setViewR={setViewR} />
      <Edit view={view} setView={setView} empleado={empleado} />
    </>
  );
};

export default Home;
