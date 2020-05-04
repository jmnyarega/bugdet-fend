import React from "react";

const ExpenseTable = props => {
  const { expenses } = props;
  return (
    <div className="display">
      <table className="table" border="10">
        <tbody>
          <tr>
            <th>#</th>
            <th>Expense</th>
            <th>Category</th>
            <th>Price</th>
            <th>Reason</th>
            <th>Date</th>
          </tr>
          { expenses && expenses.map(expense => {
            const date = new Date(expense.date);
            const expenseDate = `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`;
            return (
              <tr key={expense.id}>
                <td>{expense.id}</td>
                <td>{expense.name}</td>
                <td>{}</td>
                <td>{expense.amount}</td>
                <td>{expense.description}</td>
                <td>{expenseDate}</td>
              </tr>
            )})}
        </tbody>
      </table>
    </div>
  )
};

export default ExpenseTable;
