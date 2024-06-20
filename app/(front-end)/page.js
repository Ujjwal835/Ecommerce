import CategoryList from "@/components/frontend/CategoryList";
import CommunityTrainings from "@/components/frontend/CommunityTrainings";
import Hero from "@/components/frontend/Hero";
import MarketList from "@/components/frontend/MarketList";
import { getData } from "@/lib/getData";
import Link from "next/link";

export default async function Home() {
  const categories = await getData("categories");
  return (
    <div className="min-h-screen">
      <Hero />
      <MarketList />
      {categories.map((category, index) => {
        return (
          <div className="py-16 space-y-8" key={index}>
            <CategoryList category={category} />
          </div>
        );
      })}
      <CommunityTrainings />
    </div>
  );
}
