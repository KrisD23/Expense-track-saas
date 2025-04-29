import { prisma } from "@/lib/db";
import React from "react";

const ExpensesList = async () => {
  const expenses = await prisma.expense.findMany();

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
            <button className="text-red-500 border border-red-500 px-2">
              delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ExpensesList;
