import { Suspense } from "react";
import SearchClient from "@/app/components/SearchClient";

export default function SearchPage() {
  return (
    <Suspense fallback={<SearchLoading />}>
      <SearchClient />
    </Suspense>
  );
}

function SearchLoading() {
  return <div className="p-10">Loading search…</div>;
}
