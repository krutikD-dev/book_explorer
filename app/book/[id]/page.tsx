import { getBookById } from "@/app/lib/getBookById";
import BookDetail from "@/app/components/BookDetail";

export default async function BookPage({ params }:{params:{id:string}}) {
    const p = await params
    const book = await getBookById(p.id);
//     console.log(book)
  return (
    <div className="w-[80%] sm:px-0 mx-auto lg:px-6 py-12">
      <BookDetail book={book} />
    </div>
  );
}
