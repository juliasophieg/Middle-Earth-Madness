function DataFetch() {
  async function fetchBooks() {
    try {
      let url = "https://the-one-api.dev/v2/book";

      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch {
      console.log("error");
    }
  }

  return fetchBooks();
}

export default DataFetch;
