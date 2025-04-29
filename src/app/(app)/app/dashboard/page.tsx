import React from "react";
import ExpensesForm from "@/components/ExpensesForm";
import ExpensesList from "@/components/ExpensesList";
import { prisma } from "@/lib/db";
const page = async () => {
  const expenses = await prisma.expense.findMany();

  return (
    <div className="mt-5">
      <h1 className="text-3xl font-bold  text-center">Dashboard</h1>

      <div className="w-full max-w-[600px] mx-auto">
        <ExpensesList expenses={expenses} />

        <ExpensesForm />
      </div>
    </div>
  );
};

export default page;
