import { Book } from "../types/Books";

type SearchResult = {
  items: Book[];
  total: number;
};


export async function searchBooks(
  query: string,
  startIndex: number = 0
): Promise<SearchResult> {
  // console.log(query)
  try {
    const url=`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=12&startIndex=${startIndex}&key=${process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY}`
    console.log(url)
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=12&startIndex=${startIndex}&key=${process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY}`
    );

    if (!res.ok) {
      return { items: [], total: 0 }; 
    }

    const data = await res.json();
    console.log(data)

    return {
      items: (data.items ?? []) as Book[],
      total: data.totalItems ?? 0,
    };
  } catch (error) {
    console.error("Search error:", error);


    return { items: [], total: 0 };
  }
}

