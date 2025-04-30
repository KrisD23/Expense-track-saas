import { prisma } from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const Account = async () => {
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

  return (
    <div className=" flex flex-col items-center">
      <h1 className="text-3xl font-bold">Account</h1>
      <p className="mt-4">Logged in as: {user?.email}</p>
    </div>
  );
};

export default Account;
