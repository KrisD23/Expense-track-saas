"use server";

import { prisma } from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addExpense(formData: FormData) {
  const { isAuthenticated, getUser } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    return redirect("/");
  }

  const user = await getUser();

  if (!user) {
    return redirect("/");
  }

  await prisma.expense.create({
    data: {
      amount: Number(formData.get("amount")),
      description: String(formData.get("description")),
      creatorId: user.id,
    },
  });
  revalidatePath("/app/dashboard");
}

export async function deleteExpense(id: number) {
  const { isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    return redirect("/");
  }
  await prisma.expense.delete({
    where: {
      id: id,
    },
  });
  revalidatePath("/app/dashboard");
}
