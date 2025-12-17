import SectionHeading from "./SectionHeading";
import BookCard from "./BookCard";
import { getTrendingBooks } from "../lib/getTrendingBooks";

export default async function TrendingSection() {

  const trendingBooksData = await getTrendingBooks()
  const trendingBooks =trendingBooksData.map((item: any) => ({
      id: item.id,
      title: item.volumeInfo.title,
      author: item.volumeInfo.authors?.[0] || "Unknown",
      image:
        item.volumeInfo.imageLinks?.thumbnail ||
        "",
      rating: item.volumeInfo.averageRating || null,
    })) || [];

  return (
    <section className="mt-14">
      <SectionHeading
        title="Trending Books"
        linkText="View All"
        link="/trending"
      />

      <div className="flex gap-6 overflow-x-auto pb-3 no-scrollbar">
        {trendingBooks.map((book: any) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}
