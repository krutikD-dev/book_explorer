"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Searchbar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    router.push(`/search?q=${query}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="bg-white rounded-full flex overflow-hidden shadow-md"
    >
      <input
        className="flex-1 px-4 py-3 text-gray-700 outline-none"
        placeholder="Search for books, authors, or categories..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button
        type="submit"
        className="bg-red-500 text-white px-6 font-semibold hover:bg-red-600"
      >
        Search
      </button>
    </form>
  );
}
