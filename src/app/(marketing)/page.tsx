import React from "react";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Home = async () => {
  const { isAuthenticated } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();

  return (
    <div>
      <div className="justify-center items-center flex h-screen flex-col">
        <h1 className="font-bold text-4xl">Manage all your expenses</h1>

        <div className="mt-5">
          {!isLoggedIn ? (
            <>
              <LoginLink className="m-3 rounded px-3 py-2 bg-blue-300 text-white font-bold hover:bg-blue-400 active:bg-blue-500">
                Sign in
              </LoginLink>

              <RegisterLink className="m-3 rounded px-3 py-2 bg-blue-300 text-white font-bold hover:bg-blue-400 active:bg-blue-500">
                Sign up
              </RegisterLink>
            </>
          ) : (
            <button className="m-3 rounded px-3 py-2 bg-blue-300 text-white font-bold hover:bg-blue-400 active:bg-blue-500">
              Pay
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
