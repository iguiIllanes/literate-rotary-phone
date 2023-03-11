import useStore from "./../store/Store";

const RandomNumberTable = () => {
  const method = useStore((state) => state.selectedMethod);
  const table = useStore((state) => state.table);

  // Check if the table exists before transposing it
  const transposedTable =
    table.length > 0 ? table[0].map((_, i) => table.map((row) => row[i])) : [];

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>
        {transposedTable.length > 0 ? method : null}
      </h3>
      <table>
        <thead>
          <tr>
            {transposedTable.length > 0 ? <td>i</td> : null}
            {transposedTable.length > 0 &&
              transposedTable[0].map((_, i) => <th key={i}>Numero {i + 1}</th>)}
          </tr>
        </thead>
        <tbody>
          {transposedTable.length > 0 &&
            transposedTable.map((row, i) => (
              <tr key={i}>
                <td key={0} style={{ border: "1px solid black" }}>
                  {i + 1}
                </td>
                {row.map((cell, j) => (
                  <td
                    key={j + 1}
                    style={{
                      border: "1px solid black",
                      backgroundColor:
                        row.filter((c, index) => c === cell && index !== j)
                          .length > 0
                          ? "red"
                          : "white",
                    }}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default RandomNumberTable;
