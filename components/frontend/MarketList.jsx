import React from "react";
import MarketCarousel from "./MarketCarousel";

export default function MarketList() {
  return (
    <div className="text-white py-16">
      {/* marketslider */}
      <div className="bg-slate-50 dark:bg-lime-900 rounded-lg p-4">
        <h2 className="py-2 text-center text-slate-900 text-2xl dark:text-slate-50 mb-4">
          Shop By Market
        </h2>
        <MarketCarousel />
      </div>
    </div>
  );
}
