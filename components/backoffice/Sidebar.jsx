"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../public/Jindal_logo_6.png";
import {
  Boxes,
  Building2,
  ChevronDown,
  ChevronRight,
  CircleDollarSign,
  ExternalLinkIcon,
  HeartHandshake,
  LayoutGrid,
  LayoutList,
  LogOut,
  NotepadText,
  ScanSearch,
  Settings,
  TicketSlash,
  Tractor,
  Truck,
  User,
  Users2,
  Warehouse,
} from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import Loading from "@/app/loading";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
// import handleLogout from "@/lib/handleLogout";

export default function Sidebar({ showSideBar, setShowSideBar }) {
  const { data: session, status } = useSession();
  if (status === "loading") {
    <Loading />;
  }
  const role = session?.user?.role;
  const pathname = usePathname();
  let sidebarLinks = [
    {
      title: "Customers",
      icon: Users2,
      href: "/dashboard/customers",
    },
    {
      title: "Markets",
      icon: Warehouse,
      href: "/dashboard/markets",
    },
    {
      title: "Farmers",
      icon: Tractor,
      href: "/dashboard/farmers",
    },
    {
      title: "Orders",
      icon: Truck,
      href: "/dashboard/orders",
    },
    {
      title: "Sales",
      icon: Truck,
      href: "/dashboard/sales",
    },
    {
      title: "Our Staff",
      icon: Users2,
      href: "/dashboard/staffs",
    },
    {
      title: "Jindal Community",
      icon: Building2,
      href: "/dashboard/community",
    },
    {
      title: "Wallet",
      icon: CircleDollarSign,
      href: "/dashboard/wallet",
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
    },
    {
      title: "Online Store",
      icon: ExternalLinkIcon,
      href: "/",
    },
  ];
  let catalogueLinks = [
    {
      title: "Products",
      icon: Boxes,
      href: "/dashboard/products",
    },
    {
      title: "Categories",
      icon: LayoutList,
      href: "/dashboard/categories",
    },
    {
      title: "Coupons",
      icon: ScanSearch,
      href: "/dashboard/coupons",
    },
    {
      title: "Store Banners",
      icon: TicketSlash,
      href: "/dashboard/banners",
    },
  ];

  const [openMenu, setOpenMenu] = useState(false);

  if (role === "FARMER") {
    sidebarLinks = [
      {
        title: "Customers",
        icon: Users2,
        href: "/dashboard/customers",
      },
      {
        title: "Markets",
        icon: Warehouse,
        href: "/dashboard/markets",
      },
      {
        title: "Orders",
        icon: Truck,
        href: "/dashboard/orders",
      },
      {
        title: "Sales",
        icon: Truck,
        href: "/dashboard/sales",
      },
      {
        title: "Jindal Community",
        icon: Building2,
        href: "/dashboard/community",
      },
      {
        title: "Wallet",
        icon: CircleDollarSign,
        href: "/dashboard/wallet",
      },
      {
        title: "Farmer Support",
        icon: HeartHandshake,
        href: "/dashboard/farmer-support",
      },
      {
        title: "Settings",
        icon: Settings,
        href: "/dashboard/settings",
      },
      {
        title: "Online Store",
        icon: ExternalLinkIcon,
        href: "/",
      },
    ];
  }
  if (role === "USER") {
    sidebarLinks = [
      {
        title: "My Orders",
        icon: Truck,
        href: "/dashboard/orders",
      },
      {
        title: "Profile",
        icon: User,
        href: "/dashboard/profile",
      },
      {
        title: "Online Store",
        icon: ExternalLinkIcon,
        href: "/",
      },
    ];
    catalogueLinks = [];
  }
  const router = useRouter();
  async function handleLogout() {
    await signOut();
    router.push("/");
  }
  return (
    <div
      className={`${
        showSideBar ? "sm:block" : "hidden sm:block"
      } mt-20 sm:mt-0 dark:bg-slate-800 bg-white space-y-6 w-64 h-screen dark:text-slate-300 text-slate-800 fixed left-0 top-0 shadow-md overflow-y-scroll`}
    >
      <Link
        href="/dashboard"
        onClick={() => setShowSideBar(false)}
        className="px-6 py-4 hidden md:block lg:block"
      >
        <Image src={logo} alt="logo" className="w-36" />
      </Link>
      <div className="space-y-3 flex flex-col ">
        <Link
          onClick={() => setShowSideBar(false)}
          href="/dashboard"
          className={
            pathname === "/dashboard"
              ? "flex items-center space-x-3 px-6 py-2 border-l-8 border-lime-500 text-lime-500"
              : "flex items-center space-x-3 px-6 py-2"
          }
        >
          <LayoutGrid />
          <span>Dashboard</span>
        </Link>
        {catalogueLinks.length > 0 && (
          <Collapsible className="px-6 py-2">
            <CollapsibleTrigger
              className=""
              onClick={() => setOpenMenu(!openMenu)}
            >
              <button className="flex items-center space-x-3 py-2">
                <div className="flex items-center space-x-3">
                  <NotepadText />
                  <span>Catalogue</span>
                  {openMenu ? <ChevronDown /> : <ChevronRight />}
                </div>
              </button>
            </CollapsibleTrigger>
            <CollapsibleContent className="rounded px-3 py-3 pl-6 bg-white dark:bg-slate-800 dark:text-slate-300">
              {catalogueLinks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={index}
                    onClick={() => setShowSideBar(false)}
                    href={item.href}
                    className={
                      pathname === item.href
                        ? "flex items-center space-x-3 text-lime-500 py-1 "
                        : "flex items-center space-x-3 py-1 text-sm"
                    }
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </Link>
                );
              })}
            </CollapsibleContent>
          </Collapsible>
        )}

        {sidebarLinks.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              onClick={() => setShowSideBar(false)}
              key={index}
              href={item.href}
              className={
                item.href === pathname
                  ? "flex items-center space-x-3 px-6 py-2 border-l-8 border-lime-500 text-lime-500"
                  : "flex items-center space-x-3 px-6 py-2"
              }
            >
              <Icon />
              <span>{item.title}</span>
            </Link>
          );
        })}
        <div className="px-6 py-2">
          <button
            onClick={handleLogout}
            className="bg-lime-600 rounded-md flex items-center space-x-3 px-6 py-3"
          >
            <LogOut />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
