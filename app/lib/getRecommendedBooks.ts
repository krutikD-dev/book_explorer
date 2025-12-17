// lib/getRecommended.ts

export async function getRecommendedBooks() {
  try {
    const query = "top rated books";

    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=12&key=${process.env.GOOGLE_BOOKS_API_KEY}`,
      { next: { revalidate: 3600 } } 
    );

    if (!res.ok) throw new Error("Failed to fetch recommended books");

    const json = await res.json();

    return json.items
  } catch (error) {
    console.error("Error loading recommended books:", error);
    return [];
  }
}
