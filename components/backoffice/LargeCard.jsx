import { Layers } from "lucide-react";
import React from "react";

export default function LargeCard({ data }) {
  return (
    <div
      className={`rounded-lg text-white  shadow-md p-8 flex flex-col items-center gap-2 ${data.color}`}
    >
      <Layers />
      <h4 className="text-center">{data.period}</h4>
      <h2 className="text-2xl lg:text-3xl">USD.{data.sales}</h2>
    </div>
  );
}
