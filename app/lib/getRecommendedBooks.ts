


export async function getRecommendedBooks(startIndex = 0) {

  const query = "top rated books";
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=12&startIndex=${startIndex}&key=${process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY}`
  );
  const data = await res.json();
  // console.log(data)
  return data.items || [];
}
