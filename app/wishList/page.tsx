"use client";

import { useContext } from "react";
import { WishlistContext } from "../context/WishListContext";
import Link from "next/link";
import BookCard from "../components/BookCard";
import { Book } from "../types/Books";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  // console.log(wishlist)
  if (!wishlist || wishlist.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-gray-500">Your wishlist is empty</p>
        <Link href="/" className="mt-4 text-red-500">
          Browse books
        </Link>
      </div>
    );
  }

  return (
    <div className="w-[80%] min-h-screen  mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>

      <div className="grid sm:grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center mt-6">
        {wishlist.map((book:Book, index:number) => (
          <BookCard key={book.id+'-'+index} book={book}/>
        ))}
      </div>
    </div>
  );
}
