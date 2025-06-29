import BookForm from "./components/BookForm";
import { getBooks, saveBooks } from "../utils/storage";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const navigate = useNavigate();

  const handleAdd = (newBook) => {
    const books = getBooks();
    newBook.id = Date.now(); // simple unique ID
    saveBooks([...books, newBook]);
    navigate("/");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">➕ Add a New Book</h2>
      <BookForm onAdd={handleAdd} />
    </div>
  );
};

export default AddBook;