import Link from "next/link";
import React from "react";

 function BookCard({ book }:{book:any}) {
  return (
    <Link
      href={`/book/${book.id}`}
      className="bg-white shadow-sm rounded-xl p-3 w-[250px] md:w-[190px] flex-shrink-0 hover:shadow-md"
    >
      <img
        src={book.volumeInfo?.imageLinks?.smallThumbnail || book.volumeInfo?.imageLinks?.thumbnail}
        className="w-full h-48 object-contain rounded-md"
      />

      <h3 title={book.volumeInfo?.title} className="mt-2 font-semibold text-xl line-clamp-1">{ book.volumeInfo?.title}</h3>
      <p className="text-md text-gray-500 line-clamp-1">{ book?.volumeInfo?.authors|| 'unknown'}</p>

      {book.volumeInfo?.averageRating && <p className="text-md font-extrabold mt-0">{book.volumeInfo?.averageRating ? `⭐ ${book.volumeInfo.ratingsCount}` : ''}</p>}
    </Link>
  );
}
export default React.memo(BookCard)