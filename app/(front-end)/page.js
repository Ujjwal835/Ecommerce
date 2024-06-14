import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen">
      <h2 className="text-4xl">Welcome to Jindal Shop</h2>
      <Link href="/register-farmer" className="my-5 underline">
        Become a Farmer/ Vendor / Supplier
      </Link>
    </div>
  );
}
