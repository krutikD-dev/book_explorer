export async function getBooksByCategory(category: string) {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&maxResults=20&key=${process.env.GOOGLE_BOOKS_API_KEY}`
  );

  if (!res.ok) throw new Error("Failed to fetch books");

  const json = await res.json();

  return json.items
}
