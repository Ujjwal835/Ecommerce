import React from "react";
import { X } from "lucide-react";
export default function FormHeader({ title }) {
  return (
    <div className="flex items-center justify-between px-12 py-6 bg-white text-slate-800 dark:bg-slate-700 dark:text-slate-50 rounded-lg shadow-md dark:shadow-sm dark:shadow-cyan-400">
      <h2 className="text-xl font-semibold">{title}</h2>
      <button className="">
        <X />
      </button>
    </div>
  );
}
