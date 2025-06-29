import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BookCard = ({ book, onToggle }) => {
  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <h3 className="text-xl font-bold">{book.title}</h3>
        <p className="text-sm text-gray-600">by {book.author}</p>
        <p className="mt-2">
          Status:{" "}
          <span className={book.read ? "text-green-600" : "text-red-600"}>
            {book.read ? "Read" : "Unread"}
          </span>
        </p>
        <Button
          onClick={() => onToggle(book.id)}
          className="mt-2"
          variant="outline"
        >
          Mark as {book.read ? "Unread" : "Read"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default BookCard;