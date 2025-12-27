// src/pages/Books.js
import React, { useState } from 'react';
import BookCard from '../components/BookCard';
import { books } from '../components/booksData';
import './Books.css';

const Books = () => {
  const [sortBy, setSortBy] = useState('readingOrder'); // 'readingOrder', 'rating', 'author', 'title'

  // Sort books based on selected criteria
  const sortedBooks = [...books].sort((a, b) => {
    switch (sortBy) {
      case 'readingOrder':
        // Books with order property come first, sorted by order
        // Books without order property come last, sorted by id
        const aHasOrder = a.order !== undefined;
        const bHasOrder = b.order !== undefined;

        if (aHasOrder && bHasOrder) {
          return a.order - b.order;
        } else if (aHasOrder) {
          return -1; // a comes first
        } else if (bHasOrder) {
          return 1; // b comes first
        } else {
          return a.id.localeCompare(b.id); // Both without order, sort by id
        }
      case 'rating':
        return b.rating - a.rating;
      case 'author':
        return a.author.localeCompare(b.author);
      case 'title':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  return (
    <div className="books-page">
      <div className="books-header">
        <h1>Book Recommendations</h1>
        <p className="mono">My reading list from 2025 with honest reviews and ratings. You will find here a paragraph of my thoughts on the book, followed by a more professional and boring paragraph of the book's summary.</p>
      </div>

      <div className="content-wrapper">
        <div className="books-controls">
          <span className="sort-label mono">Sort By:</span>
          <div className="sort-buttons">
            <button
              className={`brutal-button ${sortBy === 'readingOrder' ? 'active' : ''}`}
              onClick={() => setSortBy('readingOrder')}
            >
              Reading Order
            </button>
            <button
              className={`brutal-button ${sortBy === 'rating' ? 'active' : ''}`}
              onClick={() => setSortBy('rating')}
            >
              Rating
            </button>
            <button
              className={`brutal-button ${sortBy === 'author' ? 'active' : ''}`}
              onClick={() => setSortBy('author')}
            >
              Author
            </button>
            <button
              className={`brutal-button ${sortBy === 'title' ? 'active' : ''}`}
              onClick={() => setSortBy('title')}
            >
              Title
            </button>
          </div>
        </div>

        <div className="books-list">
          {sortedBooks.map((book, index) => (
            <BookCard key={book.id} book={book} index={index} />
          ))}
        </div>

        {books.length === 0 && (
          <div className="books-empty">
            <p className="mono">No books yet. Add some to booksData.js!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Books;
