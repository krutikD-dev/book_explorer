"use client";

import { BookCheck, BookOpenCheck, CalendarCheck, Heart } from "lucide-react";
import React from 'react'
import { useContext } from "react";
import { WishlistContext } from "../context/WishListContext";
import { Book } from "../types/Books";

function BookDetail({ book }:{book:Book}) {
  
  const { addToWishlist, removeFromWishlist, isInWishlist } =
    useContext(WishlistContext);
  const inWishlist = isInWishlist(book.id);

  const toggleWishlist = () => {
    inWishlist ? removeFromWishlist(book.id) : addToWishlist(book);
  };

  return (
    <>
      <p className="text-gray-500 text-sm uppercase tracking-wide mb-8">
        Books / {book.volumeInfo.categories?.[0] || "Category"} / {book.volumeInfo.title}
      </p>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-40">
        <div>
          <img
            src={book.volumeInfo.imageLinks?.thumbnail || book.volumeInfo.imageLinks?.small}
            alt={book.volumeInfo.title}
            className="rounded-2xl w-full object-cover shadow-md"
          />
          <button className="bg-red-500 text-white flex border-none rounded-lg px-4 py-3 gap-2 font-bold w-full justify-center mt-4" onClick={toggleWishlist}>
            <Heart
              className={`transition ${
                inWishlist ? "fill-red-500 text-red-500" : "fill-white"
              }`}
            />
            Add To WishList
          </button>
        </div>

        <div className="md:col-span-2">
          <h1 className="text-5xl mt-5 font-extrabold">{book.volumeInfo?.title}</h1>

          <span className="text-lg text-red-500 font-medium mt-6 ml-2">
            by {book.volumeInfo?.authors || "unknown"}
          </span>

          <div className="grid grid-cols-3 gap-6 mt-9">
            <div className="bg-white px-3 py-4 rounded-xl overflow-hidden">
              <p className="text-gray-500 text-sm flex gap-2 items-center flex-wrap">
                <span className="p-2 bg-gray-100 rounded-lg">
                  <BookOpenCheck className="text-red-500" />
                </span>
                Pages
              </p>
              <p className="text-md font-semibold mt-3  ml-2">
                {book.volumeInfo.pageCount}
              </p>
            </div>

            <div className="bg-white px-3 py-4 rounded-xl overflow-hidden">
              <p className="text-gray-500 text-sm flex gap-2 items-center flex-wrap">
                <span className="p-2 bg-gray-100 rounded-lg">
                  {" "}
                  <CalendarCheck className="text-red-500" />
                </span>{" "}
                Published
              </p>
              <p className="text-md font-semibold mt-3 ml-2">
                {book.volumeInfo.publishedDate}
              </p>
            </div>

            <div className="bg-white px-3 py-4 rounded-xl overflow-hidden">
              <p className="text-gray-500 text-sm flex gap-2 items-center flex-wrap">
                <span className="p-2 bg-gray-100 rounded-lg">
                  <BookCheck className="text-red-500" />
                </span>{" "}
                Publisher
              </p>
              <p className="text-md font-semibold mt-3 ml-2">
                {book.volumeInfo.publisher}
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-bold ">About the Book</h3>
            <p
              className="text-xl text-gray-700 mt-3 leading-relaxed whitespace-pre-line"
              dangerouslySetInnerHTML={{
                __html:
                  book?.volumeInfo.description ||
                  "No description available for this book.",
              }}
            >
              {/* {book.description} */}
            </p>
          </div>

          {book.volumeInfo?.categories?.length && (
            <div className="mt-10">
              <h3 className="text-lg text-gray-500 uppercase tracking-wide">
                Tag
              </h3>

              <div className="flex flex-wrap gap-3 mt-3">
                {book.volumeInfo?.categories && book.volumeInfo?.categories.map((cat: string) => (
                  <span
                    key={cat}
                    className="px-4 py-1 bg-gray-100 rounded-full text-md text-gray-700"
                  >
                    {cat}
                  </span>
                )) || "No Data Found"}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default React.memo(BookDetail)
