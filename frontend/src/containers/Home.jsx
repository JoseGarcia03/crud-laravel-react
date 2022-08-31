import Aside from "../components/Aside";
import Navbar from "../components/Navbar";
import Table from "../components/Table";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="flex">
        <Aside />
        <div>
          <h1 className="text-4xl my-10">Dashboard</h1>
          <Table />
        </div>
      </main>
    </>
  );
};

export default Home;
