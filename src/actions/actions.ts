"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function addExpense(formData: FormData) {
  await prisma.expense.create({
    data: {
      amount: Number(formData.get("amount")),
      description: String(formData.get("description")),
    },
  });
  revalidatePath("/app/dashboard");
}
