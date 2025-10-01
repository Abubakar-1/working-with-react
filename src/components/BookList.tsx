const books = ["React Basics", "Learning TypeScript", "Advanced JavaScript"];

function BookList() {
  return (
    <ol>
      {books.map((book, index) => (
        <li key={index}>{book}</li>
      ))}
    </ol>
  );
}

export default BookList;
