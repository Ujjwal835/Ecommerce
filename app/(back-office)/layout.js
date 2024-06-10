import Navbar from "@/components/backoffice/Navbar";
import Sidebar from "@/components/backoffice/Sidebar";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="flex">
      {/* sidebar */}
      <Sidebar />
      <div className="w-full">
        {/* header */}
        <Navbar />
        {/* main */}
        <main className="p-8 ml-60 bg-slate-900 text-slate-50 min-h-screen mt-16">
          {children}
        </main>
      </div>
    </div>
  );
}
