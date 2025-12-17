import recommended from "@/app/data/recommended.json";
import SectionHeading from "./SectionHeading";
import BookCard from "./BookCard";
import { getRecommendedBooks } from "../lib/getRecommendedBooks";



export default async function RecommendationSection() {

  const recommendedBookData = await getRecommendedBooks()
  const recommendedBook = recommendedBookData.map((item: any) => ({
      id: item.id,
      title: item.volumeInfo.title,
      author: item.volumeInfo.authors?.[0] || "Unknown",
      image:
        item.volumeInfo.imageLinks?.thumbnail ||
        "/placeholder-book.jpg",
      rating: item.volumeInfo.averageRating || null,
    })) ?? [];
  
  return (
    <section className="mt-14">
      <SectionHeading title="Recommended Reads" linkText={undefined} link={undefined} />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
        {recommendedBook.map((book:any) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="px-6 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
          Load More Books
        </button>
      </div>
    </section>
  );
}
