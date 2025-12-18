"use client";

import { createContext, useEffect, useState } from "react";

export const WishlistContext = createContext<any>(null);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlist, setWishlist] = useState<any[]>([]);


  const addToWishlist = (book: any) => {
    setWishlist((prev) => {
      if (prev.some((b) => b.id === book.id)) return prev;
      return [...prev, book];
    });
  };

  const removeFromWishlist = (id: string) => {
    setWishlist((prev) => prev.filter((b) => b.id !== id));
  };

  const isInWishlist = (id: string) => {
    return wishlist.some((b) => b.id === id);
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
