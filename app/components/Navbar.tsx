"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter()
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-gray-200 bg-white/90 backdrop-blur-md px-6 py-3 lg:px-20 ">
      <div className="flex items-center gap-3">
        <div className="size-8 text-red-500">
          <svg
            fill="currentColor"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44H42.4379Z" />
          </svg>
        </div>

        <h2 className="text-xl font-bold tracking-tight text-gray-900 ">
          Books Explorer
        </h2>
      </div>

      {/* <nav className="hidden md:flex flex-1 justify-center gap-8">
        <Link className="text-sm font-semibold text-red-500" href="/">
          Home
        </Link>

        <Link
          className="text-sm font-medium text-gray-700 hover:text-red-800 dark:text-gray-300 dark:hover:text-red-400 transition-colors"
          href="#"
        >
          My Library
        </Link>

        <Link
          className="text-sm font-medium text-gray-700 hover:text-red-500 dark:text-gray-300 dark:hover:text-red-400 transition-colors"
          href="#"
        >
          WishList
        </Link>
      </nav> */}

      <div className="flex items-center gap-4">
        <button onClick={()=>router.push('/wishList')}>
          <Heart className="text-gray-400 hover:text-red-500 hover:fill-red-500 transition-colors duration-300" />
        </button>
        <button className="hidden md:flex h-10 min-w-[84px] cursor-pointer items-center justify-center rounded-full px-5 bg-red-500 text-white text-sm font-bold shadow-sm hover:bg-red-600 transition-colors">
          Log In
        </button>
      </div>
    </header>
  );
};

export default Navbar;
