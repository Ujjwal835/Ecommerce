"use client";
import Navbar from "@/components/backoffice/Navbar";
import Sidebar from "@/components/backoffice/Sidebar";
import React, { useState } from "react";

export default function Layout({ children }) {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className="flex">
      {/* sidebar */}
      <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      {/* <div className="w-full"> */}
      <div className="lg:ml-64 ml-0 flex-grow bg-slate-100 min-h-screen">
        {/* header */}
        <Navbar setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
        {/* main */}
        {/* <main className="p-8 ml-60 bg-slate-100 dark:bg-slate-900 text-slate-50 min-h-screen mt-16"> */}
        <main className="p-8 bg-slate-100 dark:bg-slate-900 text-slate-50 mt-16">
          {children}
        </main>
      </div>
    </div>
  );
}
