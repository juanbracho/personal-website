// src/pages/Books.js
import React, { useState } from 'react';
import BookCard from '../components/BookCard';
import { books } from '../components/booksData';
import './Books.css';

const Books = () => {
  const [sortBy, setSortBy] = useState('rating'); // 'rating', 'year', 'title'

  // Sort books based on selected criteria
  const sortedBooks = [...books].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'year':
        return b.yearRead - a.yearRead;
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
        <p className="mono">My reading list from 2025 with honest reviews and ratings</p>
      </div>

      <div className="content-wrapper">
        <div className="books-controls">
          <span className="sort-label mono">Sort By:</span>
          <div className="sort-buttons">
            <button
              className={`brutal-button ${sortBy === 'rating' ? 'active' : ''}`}
              onClick={() => setSortBy('rating')}
            >
              Rating
            </button>
            <button
              className={`brutal-button ${sortBy === 'year' ? 'active' : ''}`}
              onClick={() => setSortBy('year')}
            >
              Year
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
