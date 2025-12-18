


export async function getRecommendedBooks(startIndex = 0) {

  const query = "top rated books";
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=12&startIndex=${startIndex}&key=AIzaSyCUvqrtAJoLQX4fpGCmSC9yH4d34OHVR-o`
  );
  const data = await res.json();
  // console.log(data)
  return data.items || [];
}
