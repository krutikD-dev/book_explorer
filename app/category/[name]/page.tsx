import { getBooksByCategory } from "@/app/lib/getBookByCategory";
import BookCard from "@/app/components/BookCard";

export default async function CategoryPage({ params }: { params: { name: string } }) {
  const category = await params;

  const formattedCategory = category.name.replaceAll("-", " ");
  const books = await getBooksByCategory(formattedCategory);
//   console.log(books)

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      <h1 className="text-3xl font-bold mb-6 capitalize">
        {formattedCategory} Books
      </h1>

      {books.length === 0 ? (
        <p className="text-gray-500">No books found in this category.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}
