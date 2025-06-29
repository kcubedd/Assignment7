import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";

function App() {
  return (
    <div className="p-4">
      <nav className="mb-6 space-x-4 border-b pb-2">
        <Link to="/" className="text-blue-500">Home</Link>
        <Link to="/add" className="text-blue-500">Add Book</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddBook />} />
      </Routes>
    </div>
  );
}

export default App;