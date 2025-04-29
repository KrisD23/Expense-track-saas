"use client";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const routes = [
  {
    label: "Dashboard",
    path: "/app/dashboard",
  },
  {
    label: "Account",
    path: "/app/account",
  },
];

const AppHeader = () => {
  const currentPath = usePathname();

  console.log(currentPath);

  return (
    <header className="flex justify-between items-center py-4 px-5">
      {/* Logo */}
      <Link href={"/app/dashboard"}>
        <div className="text-3xl font-bold">
          E<span className="text-indigo-500">XT</span>
        </div>
      </Link>

      {/* links */}
      <nav>
        <ul className="flex gap-4">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                href={route.path}
                className={`hover:underline
                hover:font-bold
                hover:scale-100 transform duration-200
                ${
                  currentPath === route.path
                    ? "bg-indigo-500 text-white font-bold py-2 px-4 rounded"
                    : ""
                }
                `}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <LogoutLink>Logout</LogoutLink>
    </header>
  );
};

export default AppHeader;
