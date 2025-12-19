"use client";

import { useState,useEffect } from "react";
import SectionHeading from "./SectionHeading";
import BookCard from "./BookCard";
import LoadMoreButton from "./LoadMore";
import { getRecommendedBooks } from "../lib/getRecommendedBooks";
import CardSkeleton from "@/app/components/CardSkeleton";

export default function RecommendationSection() {
  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false)
  const [initialLoading, setInitialLoading] = useState<boolean>(false)
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    async function loadInitial() {
      setInitialLoading(true)
      const data = await getRecommendedBooks(startIndex);
      setBooks(data);
      setStartIndex(12);
      setInitialLoading(false)
    }
    loadInitial();
  }, []);

  const loadMore = async () => {
    setLoading(true)
    const more = await getRecommendedBooks(startIndex);
    setBooks((prev) => [...prev, ...more]);
    setStartIndex(startIndex + 12);
    setLoading(false)
  };

  return (
    <section className="mt-14">
      <SectionHeading title="Recommended Reads" />
      
      {initialLoading && <div className=" justify-center mt-10"><CardSkeleton/></div>}

      {!initialLoading && <div className="grid sm:grid-cols-1 justify-center md:grid-cols-3 md:ml-3 lg:grid-cols-4 gap-6 mt-5">
        {books.map((book: any,index) => (
          <BookCard key={book.id + "-" + index} book={book} />
        ))}
      </div>}

     {!loading && <div className="flex justify-center my-8">
        <LoadMoreButton onClick={loadMore} />
      </div>}
      {loading && <div className="justify-center my-8">
        <CardSkeleton/>
      </div>}
    </section>
  );
}
