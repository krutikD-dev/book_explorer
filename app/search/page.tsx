"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { searchBooks } from "@/app/lib/searchBooks";
import SearchInput from "@/app/components/SearchInput";
import SortDropDown from "@/app/components/SortDropDown";
import BookCard from "@/app/components/BookCard";
import LoadMore from "@/app/components/LoadMore";
import CardSkeleton from "@/app/components/CardSkeleton";

export default function SearchPage() {
  const params = useSearchParams();
  // console.log(params)
  const query = params.get("q") || "";

  const [results, setResults] = useState<object[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [initialLoading, setInitialLoading] = useState<boolean>(false);
  const [startIndex, setStartIndex] = useState<number>(0);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setInitialLoading(true);
      const { items, total } = await searchBooks(query);

      setResults(items);
      setTotal(total);
      setStartIndex(12);
      setInitialLoading(false)
    };

    fetchData();
  }, [query]);

  const loadMore = async () => {
    setLoading(true);
    const more = await searchBooks(query, startIndex);
    setResults((prev) => [...prev, ...more?.items]);
    setStartIndex(startIndex + 12);
    setLoading(false)
  };

  return (
    <div className="max-w-6xl min-h-screen mx-auto px-6 py-10">
      <SearchInput initialValue={query} />

      <div className="flex justify-end items-center mt-6">
        <SortDropDown />
      </div>

      <p className="mt-4 text-gray-600">
        Showing {results?.length} results for
        <span className="font-semibold text-black"> "{query}" </span>
      </p>

      {initialLoading && (
        <div className="justify-center mt-10">
          <CardSkeleton />
          <CardSkeleton />
        </div>
      )}

      {!initialLoading && (
        <div className="grid sm:grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center mt-6">
          {results?.map((book: any, index) => (
            <BookCard key={book.id + "-" + index} book={book} />
          ))}
        </div>
      )}
      {results.length < total && !loading && (
        <div className="flex justify-center mt-10">
          <LoadMore onClick={loadMore} />
        </div>
      )}
      {loading && (
        <div className="justify-center my-8">
          <CardSkeleton />
        </div>
      )}
    </div>
  );
}
