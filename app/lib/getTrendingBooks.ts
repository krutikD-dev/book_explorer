// lib/getTrending.ts

export async function getTrendingBooks() {
  try {
    const query = "best seller books";

    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=12&key=${process.env.GOOGLE_BOOKS_API_KEY}`,
      { next: { revalidate: 3600 } } 
    );

    if (!res.ok) throw new Error("Failed to fetch trending books");

    const json = await res.json();

    return json.items;
  } catch (error) {
    console.error("Error loading trending books:", error);
    return [];
  }
}
