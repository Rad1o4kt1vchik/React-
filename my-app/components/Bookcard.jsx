import React from 'react';

const Bookcard = React.memo(({ book, onDelete}) => {
    <div className = 'card'>
        <h3>{book.title}</h3>
        <p>Author: {book.author}</p>
        <p>Genre: {book.genre}</p>
        <p>Rating: {book.rating}</p>
        <button onClick={() => onDelete(book.id)}>Delete</button>
    </div>
});

export default Bookcard;