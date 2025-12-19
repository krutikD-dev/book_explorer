import Link from "next/link";
import React from "react";

const categories = [
  "Fiction",
  "Science",
  "Romance",
  "History",
  "Self Help",
  "Fantasy",
];

function CategoryTabs() {
  return (
    <section className="mt-14">
      <h2 className="text-3xl font-semibold mb-4">Browse by Category</h2>

      <div className="flex gap-3 flex-wrap">
        {categories.map((cat) => (
          <Link
            key={cat}
            href={`/category/${cat.toLowerCase().replaceAll(' ', "-")}`}
            className="px-4 py-2 bg-gray-100 rounded-full text-lg hover:bg-gray-200"
          >
            {cat}
          </Link>
        ))}
      </div>
    </section>
  );
}
export default React.memo(CategoryTabs)
