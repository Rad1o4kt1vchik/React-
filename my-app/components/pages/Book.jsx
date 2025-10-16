import React, { useState, useEffect, useCallback } from "react";
import Bookcard from "../Bookcard";

const Book = () => {
    const [books, setBooks] = useState(() => {
        const saved = localStorage.getItem("books");
        return saved ? JSON.parse(saved) : [];
    });

    const [search, setSearch] = useState("");
    const [genre, setGenre] = useState("All");

useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
}   , [books]);

const handleDelete = useCallback(
    id => setBooks(prev => prev.filter(b => b.id !== id)),
    []
)

const filtered = books.filter(b => {
    const matchesSearch = b.title.toLowerCase().includes(search.toLowerCase());
    const matchesGenre = genre === "All" || b.genre === genre;
    return matchesSearch && matchesGenre;
}); 

return (
    <div>
        <h2>Book List</h2>
        <input
            placeholder="Search by title"
            value = {search}
            onChange = {e => setSearch(e.target.value)}
        />
        <select value = {genre} onChange={e => setGenre(e.target.value)}>
            <option value="all">All</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Tech">Tech</option>
        </select>
        <div>
            {filtered.map(book => (
                <Bookcard key={book.id} book={book} onDelete={handleDelete} />
            ))}
        </div>
    </div>
    );
};

export default Book;