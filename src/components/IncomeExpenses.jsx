import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((transaction) => {
    return transaction.amount;
  });

  const income = amount
    .filter((value) => value > 0)
    .reduce((acc, cv) => acc + cv, 0)
    .toFixed(2);

  const expense = amount
    .filter((value) => value < 0)
    .reduce((acc, cv) => acc + cv, 0)
    .toFixed(2);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">$ {income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">$ {expense}</p>
      </div>
    </div>
  );
};
