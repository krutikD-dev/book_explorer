export default function BookCard({ book }:any) {
  return (
    <a
      href={`/book/${book.id}`}
      className="bg-white shadow-sm rounded-xl p-3 w-[165px] flex-shrink-0 hover:shadow-md"
    >
      <img
        src={book.image || book.volumeInfo?.imageLinks?.smallThumbnail || book.volumeInfo?.imageLinks?.thumbnail}
        className="w-full h-48 object-cover rounded-md"
      />

      <h3 className="mt-2 font-semibold text-sm line-clamp-2">{book.title || book.volumeInfo.title}</h3>
      <p className="text-xs text-gray-500">{book.author || book?.volumeInfo?.authors}</p>

      {book.rating && <p className="text-sm mt-1 text-yellow-500">{book.rating ? `⭐ ${book.rating}` : ''}</p>}
    </a>
  );
}
