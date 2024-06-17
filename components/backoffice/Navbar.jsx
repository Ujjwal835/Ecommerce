"use client";
import {
  AlignJustify,
  Bell,
  LayoutDashboard,
  LogOut,
  Settings,
  X,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeSwitcherBtn from "../ui/ThemeSwitcherBtn";
import Link from "next/link";
import logo from "../../public/Jindal_logo_6.png";

export default function Navbar({ setShowSideBar, showSideBar }) {
  return (
    <div className="flex items-center justify-between dark:bg-slate-800 text-slate-50 bg-white h-20 px-8 py-8 fixed top-0 w-full z-50 lg:justify-end lg:pr-[20rem]">
      {/* Icon */}
      <button
        onClick={() => setShowSideBar(!showSideBar)}
        className="text-lime-700 dark:text-lime-400 lg:hidden"
      >
        <AlignJustify />
      </button>
      <Link
        href="/dashboard"
        onClick={() => setShowSideBar(false)}
        className="px-6 py-4 lg:hidden"
      >
        <Image src={logo} alt="logo" className="w-36" />
      </Link>

      {/* 3 Icons */}
      <div className="flex space-x-3">
        {/* Dark Mode */}
        <ThemeSwitcherBtn />

        {/* Bell */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <button
              type="button"
              className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg "
            >
              <Bell className="text-green-700 dark:text-lime-500" />
              <span className="sr-only">Notifications</span>
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 rounded-full -top-0 end-6 dark:border-gray-900">
                20
              </div>
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="px-4 py-2 pr-8">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <Image
                  src="/profile.png"
                  alt="User Profile"
                  width={200}
                  height={200}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col space-y-1">
                  <p>Yellow Sweet Corn Stock Out</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-3 py-.5 bg-red-700 text-white rounded-full text-sm ">
                      Stock Out
                    </p>
                    <p>June 12 2024 - 12:40 PM</p>
                  </div>
                </div>
                <button>
                  <X />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <Image
                  src="/profile.png"
                  alt="User Profile"
                  width={200}
                  height={200}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col space-y-1">
                  <p>Yellow Sweet Corn Stock Out</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-3 py-.5 bg-red-700 text-white rounded-full text-sm ">
                      Stock Out
                    </p>
                    <p>June 12 2024 - 12:40 PM</p>
                  </div>
                </div>
                <button>
                  <X />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <Image
                  src="/profile.png"
                  alt="User Profile"
                  width={200}
                  height={200}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col space-y-1">
                  <p>Yellow Sweet Corn Stock Out</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-3 py-.5 bg-red-700 text-white rounded-full text-sm ">
                      Stock Out
                    </p>
                    <p>June 12 2024 - 12:40 PM</p>
                  </div>
                </div>
                <button>
                  <X />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Account  */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image
              src="/profile.png"
              alt="User Profile"
              width={200}
              height={200}
              className="w-8 h-8 rounded-full"
            />
          </DropdownMenuTrigger>

          <DropdownMenuContent className="px-4 py-2 pr-8">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <button className="flex items-center space-x-2">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button className="flex items-center space-x-2">
                <Settings className="mr-2 h-4 w-4" />
                <span>Edit Profile</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button className="flex items-center space-x-2">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
