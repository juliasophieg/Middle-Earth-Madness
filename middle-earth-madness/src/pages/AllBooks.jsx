import React, { useState, useEffect } from "react";
import DataFetch from "../components/DataFetch";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await DataFetch();
        if (data.docs && data.docs.length > 0) {
          setBooks(data.docs);
        } else {
          console.log("No books found.");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1>Book List</h1>
        {books.map((book) => (
          <h2 key={book._id}>{book.name}</h2>
        ))}
      </div>
    </>
  );
}

export default Books;
