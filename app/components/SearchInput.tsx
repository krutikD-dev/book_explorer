"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchInput() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push(`/search?q=${searchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full bg-white border rounded-full px-5 py-3 shadow-sm focus:outline-none"
        placeholder="Design Systems..."
      />
      <Search className="absolute right-4 top-3 text-gray-400" />
    </form>
  );
}
