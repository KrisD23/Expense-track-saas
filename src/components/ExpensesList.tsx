"use client";
import { deleteExpense } from "@/actions/actions";
import React from "react";

type ExpensesListProps = {
  expenses: {
    id: number;
    description: string;
    amount: number;
  }[];
};

const ExpensesList = ({ expenses }: ExpensesListProps) => {
  return (
    <ul className="h-[300px] bg-white rounded mt-4 shadow-md px-2">
      {expenses.map((expense) => (
        <li
          key={expense.id}
          className="flex justify-between py-2 px-4 border-b border-gray-200 hover:bg-gray-100"
        >
          <p>{expense.description}</p>
          <div className="flex gap-2">
            <p className="font-bold ">{expense.amount}</p>
            <button
              onClick={async () => {
                await deleteExpense(expense.id);
              }}
              className="text-red-500 border border-red-500 px-2"
            >
              delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ExpensesList;
