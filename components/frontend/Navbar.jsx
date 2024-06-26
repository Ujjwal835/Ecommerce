import React from "react";
import SearchForm from "./SearchForm";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/Jindal_logo_6.png";
import { HelpCircle, ShoppingCart, User, X } from "lucide-react";
import ThemeSwitcherBtn from "../ui/ThemeSwitcherBtn";
import HelpModal from "./HelpModal";
import CartCount from "./CartCount";
export default function Navbar() {
  return (
    <div className="bg-white dark:bg-slate-700 shadow-lg dark:shadow-blue-400 mb-4">
      <div className="flex items-center justify-between py-3 max-w-6xl mx-auto px-8 gap-8">
        {/* Logo */}
        <Link className="" href="/">
          <Image src={logo} alt="Jindal Shop logo" className="w-24" />
        </Link>
        {/* Search Bar and Search button */}
        <div className="flex-grow">
          <SearchForm />
        </div>
        {/* # Icons */}
        <div className="flex gap-8">
          {/* login */}
          <Link
            href="/login"
            className="flex items-center space-x-1 text-green-950 dark:text-slate-100"
          >
            <User />
            <span>Login</span>
          </Link>
          {/* help */}
          <HelpModal />
          {/* cart */}
          <CartCount />
        </div>
        <ThemeSwitcherBtn />
      </div>
    </div>
  );
}
