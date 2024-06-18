import CategoryList from "@/components/frontend/CategoryList";
import Hero from "@/components/frontend/Hero";
import MarketList from "@/components/frontend/MarketList";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <MarketList />
      <div className="py-16 space-y-8">
        <CategoryList />
        <CategoryList />
        <CategoryList />
      </div>
    </div>
  );
}
