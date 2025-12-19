"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search } from "lucide-react";
import React from "react";
import { FormEvent } from "react";


function SearchInput({initialValue}:{initialValue:string}) {
  console.log(initialValue)
  const [searchTerm, setSearchTerm] = useState<string>(initialValue)
  const router = useRouter()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?q=${searchTerm}`)
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full bg-white border rounded-full px-5 py-3 shadow-sm focus:outline-none"
        placeholder="Harry Potter..."
      />
      <Search className="absolute right-4 top-3 text-gray-400" />
    </form>
  );
}
export default React.memo(SearchInput)