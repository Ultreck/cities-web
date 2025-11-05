"use client";

import BottomNav from "@/components/pages/BottomNav";
import Header from "@/components/pages/Header";
import SideNavbar from "@/components/pages/SideNavbar";
import { PaymentProvider } from "@/components/wallets/PaymentContext";
import React from "react";

const LoginedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text">
      <PaymentProvider>
        <div className="text sticky top-0 z-50">
          <Header />
        </div>
        <div className="text flex ">
          <div className="text fixed bg-white lg:w-1/5">
            <SideNavbar />
          </div>
          <div className="text w-full lg:w-4/5 px-5 lg:px-7 lg:my-10 lg:ml-[20%]">
            {children}
          </div>
        </div>
        <div className="text sticky top-0 z-50">
          <BottomNav />
        </div>
      </PaymentProvider>
    </div>
  );
};

export default LoginedLayout;
