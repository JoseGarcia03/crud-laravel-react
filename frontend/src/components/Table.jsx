const Table = () => {
  return (
    <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              ID
            </th>
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
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              1
            </th>
            <td className="py-4 px-6">Jose</td>
            <td className="py-4 px-6">Garcia</td>
            <td className="py-4 px-6">FrontEnd</td>
            <td className="py-4 px-6">3228137408</td>
            <td className="py-4 px-6">jose@gmail.com</td>
            <td className="py-4 px-6">22</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
