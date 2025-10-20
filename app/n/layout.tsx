import Header from "@/components/pages/Header";
import SideNavbar from "@/components/pages/SideNavbar";
import React from "react";

const LoginedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text">
      <div className="text sticky top-0 z-50">
        <Header />
      </div>
      <div className="text flex ">
        <div className="text fixed bg-white w-1/5">
          <SideNavbar />
        </div>
        <div className="text w-4/5 px-7 my-10 ml-[20%]">{children}</div>
      </div>
    </div>
  );
};

export default LoginedLayout;
