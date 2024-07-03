import CategoryList from "@/components/frontend/CategoryList";
import CommunityTrainings from "@/components/frontend/CommunityTrainings";
import Hero from "@/components/frontend/Hero";
import MarketList from "@/components/frontend/MarketList";
import { authOptions } from "@/lib/authOptions";
import { getData } from "@/lib/getData";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Home() {
  const categoriesData = await getData("categories");
  const categories = categoriesData.filter((category) => {
    return category.products.length > 3;
  });
  const session = await getServerSession(authOptions);
  console.log(session?.user);
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
