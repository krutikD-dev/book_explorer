export default function BookDetail({ book }: { book: any }) {

    
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
     
      <div>
        <img
          src={book.imageLinks.thumbnail || book.imageLinks.small}
          alt={book.title}
          className="rounded-2xl w-full object-cover shadow-md"
        />
      </div>

      
      <div className="md:col-span-2">
        <p className="text-gray-500 text-md uppercase tracking-wide">
          Books / {book.categories?.[0] || "Category"} / {book.title}
        </p>

        <h1 className="text-5xl mt-5 font-extrabold">{book.title}</h1>

        <span className="text-lg text-blue-600 font-medium mt-6 ml-2">
            by {book.authors}
        </span>

        
        <div className="grid grid-cols-3 gap-6 mt-9">
          <div>
            <p className="text-gray-500 text-sm">Pages</p>
            <p className="text-lg font-semibold">{book.pageCount}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Published</p>
            <p className="text-lg font-semibold">{book.publishedDate}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Publisher</p>
            <p className="text-lg font-semibold">{book.publisher}</p>
          </div>
        </div>

        
        <div className="mt-10">
          <h3 className="text-2xl font-bold ">About the Book</h3>
          <p className="text-xl text-gray-700 mt-3 leading-relaxed whitespace-pre-line" dangerouslySetInnerHTML={{ __html: book.description }}>
            {/* {book.description} */}
          </p>
        </div>

        
        {book.categories?.length > 0 && (
          <div className="mt-10">
            <h3 className="text-lg text-gray-500 uppercase tracking-wide">
              Categories
            </h3>

            <div className="flex flex-wrap gap-3 mt-3">
              {book.categories.map((cat: string) => (
                <span
                  key={cat}
                  className="px-4 py-1 bg-gray-100 rounded-full text-md text-gray-700"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
