import React from "react";
import ExpensesForm from "@/components/ExpensesForm";
import ExpensesList from "@/components/ExpensesList";
import { prisma } from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const page = async () => {
  // auth
  const { isAuthenticated, getUser } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    return redirect("/");
  }
  const user = await getUser();

  // authorization code
  const membership = await prisma.memebership.findFirst({
    where: {
      userId: user?.id,
    },
  });

  if (!membership || membership.status !== "ACTIVE") {
    return redirect("/");
  }

  const expenses = await prisma.expense.findMany({
    where: {
      creatorId: user?.id,
    },
  });

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
