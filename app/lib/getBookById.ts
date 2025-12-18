export async function getBookById(id: string) {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes/${id}?key=${process.env.GOOGLE_BOOKS_API_KEY}`
  );

  if (!res.ok) throw new Error("Failed to fetch book details");

  const json = await res.json();

  return json

  
}
