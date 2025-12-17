const categories = [
  "Fiction",
  "Science & Tech",
  "Romance",
  "History",
  "Self-Help",
  "Fantasy",
];

export default function CategoryTabs() {
  return (
    <section className="mt-14">
      <h2 className="text-xl font-semibold mb-4">Browse by Category</h2>

      <div className="flex gap-3 flex-wrap">
        {categories.map((cat) => (
          <a
            key={cat}
            href={`/category/${cat.toLowerCase().replace(/ /g, "-")}`}
            className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-gray-200"
          >
            {cat}
          </a>
        ))}
      </div>
    </section>
  );
}
