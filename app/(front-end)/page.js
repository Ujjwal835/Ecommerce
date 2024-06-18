import Hero from "@/components/frontend/Hero";
import MarketList from "@/components/frontend/MarketList";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <MarketList />
    </div>
  );
}
