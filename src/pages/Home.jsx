import { useEffect, useState } from "react";
import BookCard from "./components/BookCard";
import { getBooks, saveBooks } from "../utils/storage";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(getBooks());
  }, []);

  useEffect(() => {
    saveBooks(books);
  }, [books]);

  const toggleRead = (id) => {
    setBooks((prev) =>
      prev.map((book) =>
        book.id === id ? { ...book, read: !book.read } : book
      )
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">📚 My Reading List</h2>
      {books.length === 0 ? (
        <p>No books added yet.</p>
      ) : (
        <>
          {books.every((book) => book.read) && (
            <p className="text-green-700 mb-4 font-medium">
              You’ve read all your books!
            </p>
          )}
          {books.map((book) => (
            <BookCard key={book.id} book={book} onToggle={toggleRead} />
          ))}
        </>
      )}
    </div>
  );
};

export default Home;