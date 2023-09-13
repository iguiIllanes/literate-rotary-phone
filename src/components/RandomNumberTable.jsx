import useStore from "./../store/Store";

const RandomNumberTable = () => {
  const method = useStore((state) => state.selectedMethod);
  const table = useStore((state) => state.table);
  const cabecera = useStore((state) => state.cabecera);

  // Check if the table exists before transposing it
  const transposedTable =
    table.length > 0 ? table[0].map((_, i) => table.map((row) => row[i])) : [];

  return (
    <div className="mt-4 p-4 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg">
      <h3 className="text-center text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
        {transposedTable.length > 0 ? method : null}
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead className="bg-blue-600 dark:bg-blue-400 text-white dark:text-gray-800">
            <tr>
              {transposedTable.length > 0 ? (
                <th className="border border-gray-600 p-2">i</th>
              ) : null}
              {cabecera.length > 0 &&
                cabecera.map((item, index) => (
                  <th
                    key={index}
                    className="border border-gray-600 p-2"
                  >
                    {item}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-white">
            {transposedTable.length > 0 &&
              transposedTable.map((row, i) => (
                <tr key={i}>
                  <td key={0} className="border border-gray-600 p-2">
                    {i + 1}
                  </td>
                  {row.map((cell, j) => (
                    <td
                      key={j + 1}
                      className="border border-gray-600 p-2"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RandomNumberTable;
