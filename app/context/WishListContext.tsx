"use client";

import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { Book } from "../types/Books";

export const WishlistContext = createContext<any>([]);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlist, setWishlist] = useState<any[]>([]);

   const notifySuccess = ()=>{
    toast.success('Book Added Successfully..')
    console.log('Success-->')
  }

  function notifyRemoved(){
    toast.warn('Book removed Successfully..')
  }

  const addToWishlist = (book: Book ) => {
    setWishlist((prev) => {
      if (prev.find((b) => b.id === book.id)){
       return prev;
      }
      return [...prev, book];
    })
    notifySuccess()
  };

  const removeFromWishlist = (id: string) => {
    setWishlist((prev) => prev.filter((b) => b.id !== id));
    notifyRemoved()
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
