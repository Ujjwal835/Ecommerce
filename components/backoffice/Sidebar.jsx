"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../public/Jindal_logo_6.png";
import {
  Boxes,
  ChevronDown,
  ChevronRight,
  ExternalLinkIcon,
  LayoutGrid,
  LayoutList,
  LogOut,
  MonitorPlay,
  NotepadText,
  ScanSearch,
  SendToBack,
  Settings,
  Tractor,
  Truck,
  Users2,
  Warehouse,
} from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { usePathname } from "next/navigation";

export default function Sidebar({ showSideBar, setShowSideBar }) {
  const pathname = usePathname();
  const sidebarLinks = [
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
      title: "Staff",
      icon: Users2,
      href: "/dashboard/staff",
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
  const catalogueLinks = [
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
      title: "Attributes",
      icon: SendToBack,
      href: "/dashboard/attributes",
    },
    {
      title: "Coupons",
      icon: ScanSearch,
      href: "/dashboard/coupons",
    },
    {
      title: "Store Sliders",
      icon: MonitorPlay,
      href: "/dashboard/sliders",
    },
  ];

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div
      className={`${
        showSideBar ? "sm:block" : "hidden sm:block"
      } mt-20 sm:mt-0 dark:bg-slate-700 bg-white space-y-6 w-64 h-screen dark:text-slate-50 text-slate-800 fixed left-0 top-0 shadow-md`}
    >
      <Link
        href="/dashboard"
        onClick={() => setShowSideBar(false)}
        className="px-6 py-4"
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
          <CollapsibleContent className="rounded px-3 py-3 pl-6 bg-slate-800">
            {catalogueLinks.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
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
          <button className="bg-lime-600 rounded-md flex items-center space-x-3 px-6 py-3">
            <LogOut />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
