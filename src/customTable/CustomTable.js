import Table from "react-bootstrap/Table";

export const CustomTable = ({ trans }) => {
  const total = trans.reduce(
    (acc, { type, amount }) =>
      type === "income" ? acc + +amount : acc - +amount,
    0
  );
  return (
    <Table striped bordered hover className="mt-5">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Income</th>
          <th>Expenses</th>
        </tr>
      </thead>
      <tbody>
        {trans.map((item, i) => (
          <tr key={i} className="fw-bolder">
            <td>{i + 1}</td>
            <td>{item.name}</td>
            {item.type === "income" ? (
              <>
                {" "}
                <td className="text-success">{item.amount}</td> <td></td>
              </>
            ) : (
              <>
                <td></td> <td className="text-danger">-{item.amount}</td>{" "}
              </>
            )}
          </tr>
        ))}

        <tr className="fw-bolder">
          <td colSpan={3}>Total Balance</td>
          <td>{total}</td>
        </tr>
      </tbody>
    </Table>
  );
};
