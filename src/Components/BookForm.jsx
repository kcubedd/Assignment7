import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const BookForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) {
      setError("Both fields are required.");
      return;
    }

    onAdd({ title, author, read: false });
    setTitle("");
    setAuthor("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <p className="text-red-600">{error}</p>}
      <Input
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        placeholder="Author Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <Button type="submit">Add Book</Button>
    </form>
  );
};

export default BookForm;