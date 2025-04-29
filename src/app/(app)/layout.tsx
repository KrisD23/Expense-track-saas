import React from "react";
import AppHeader from "@/components/AppHeader";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppHeader />
      <div className="absolute left-0 top-0 bg-blue-300 w-full h-[300px] -z-10"></div>
      {children}
    </>
  );
};

export default layout;
