import Header from "@/components/pages/Header";
import SideNavbar from "@/components/pages/SideNavbar";
import React from "react";

const LoginedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text">
        <Header/>
    <div className="text flex ">
      <div className="text w-1/5">
        <SideNavbar />
      </div>
      <div className="text w-4/5 px-7 mt-16">{children}</div>
    </div>
    </div>
  );
};

export default LoginedLayout;
