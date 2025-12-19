import BookCard from "../components/BookCard"
import { getAllTrendingBooks } from "../lib/getAllTrendingBooks"
import { Book } from "../types/Books"

const page = async() => {
    const trendingBooksData = await getAllTrendingBooks()
  return (
    <div className="p-8">
        <h2 className="text-left text-4xl font-bold">Trending Books </h2>
      <div className="min-h-screen flex flex-col items-center ">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-5">
          {trendingBooksData.map((book:Book)=>{
          return <BookCard key={book.id} book={book}/>
        })}
        </div>
    </div>

    </div>

  )
}

export default page