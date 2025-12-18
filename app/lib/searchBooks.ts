

export async function searchBooks(query: string, startIndex: number = 0) {
  try {
    const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=12&startIndex=${startIndex}&key=AIzaSyCUvqrtAJoLQX4fpGCmSC9yH4d34OHVR-o`
    );

    if (!res.ok) throw new Error("Failed to fetch search results");

    const data = await res.json();

    return {
      items: data.items || [],
      total: data.totalItems || 0,
    };
  } catch (error) {
    console.error(error);
  }
}
