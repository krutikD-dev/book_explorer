"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { WishlistContext } from "../context/WishListContext";
import { useContext } from "react";
import React from "react";


const Navbar = () => {
  const router = useRouter();
  const {wishlist} = useContext(WishlistContext)
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-gray-200 bg-white/60 backdrop-blur-md px-6 py-3 lg:px-20 ">
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <div className="size-8 text-red-500">
          <svg
            fill="currentColor"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44H42.4379Z" />
          </svg>
        </div>

        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 ">
          Books Explorer
        </h2>
      </div>


      <div className="flex items-center gap-8">
        <button
          onClick={() => router.push("/wishList")}
          title="WishList"
          className="relative border border-gray-300 rounded-4xl p-2"
        >
          <Heart className="text-gray-400 hover:text-red-500 hover:fill-red-500 transition-colors duration-300" />
          <span className="absolute -top-2 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {wishlist.length}
          </span>
        </button>

        {/* <button className="hidden md:flex h-10 min-w-[84px] cursor-pointer items-center justify-center rounded-full px-5 bg-red-500 text-white text-sm font-bold shadow-sm hover:bg-red-600 transition-colors">
          Sign in
        </button> */}
        <SignedOut>
          <SignInButton />
          <SignUpButton>
            <button className="bg-red-500 text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <div className="flex border border-gray-200 justify-center items-center p-2 rounded-full">
            <UserButton/>
          </div>
        </SignedIn>
      </div>
    </header>
  );
};

export default React.memo(Navbar);
