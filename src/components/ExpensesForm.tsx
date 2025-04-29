import React from "react";

const ExpensesForm = () => {
  return (
    <form className="flex flex-col mt-8 rounded w-full bg-white ">
      <input
        type="text"
        placeholder="description"
        name="description"
        className="p-2 outline-none"
      />
      <input
        type="number"
        placeholder="amount"
        name="amount"
        className="p-2 outline-none"
      />
      <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded">
        Add Expense
      </button>
    </form>
  );
};

export default ExpensesForm;
