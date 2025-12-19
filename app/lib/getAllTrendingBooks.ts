

export async function getAllTrendingBooks() {
  try {
    const query = "best seller books";
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=35&key=${process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY}`);

    if (!res.ok) throw new Error("Failed to fetch trending books");

    const json = await res.json();

    return json.items;
  } catch (error) {
    console.error("Error loading trending books:", error);
    return [];
  }
}
