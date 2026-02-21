// src/pages/Books.js
import React, { useState } from 'react';
import BookCard from '../components/BookCard';
import { books } from '../components/booksData';
import './Books.css';

const Books = () => {
  const [sortBy, setSortBy] = useState('readingOrder'); // 'readingOrder', 'rating', 'author', 'title'
  const [selectedYear, setSelectedYear] = useState(2026);

  // Filter books by selected year
  const filteredBooks = books.filter(book => book.yearRead === selectedYear);

  // Sort books based on selected criteria
  const sortedBooks = [...filteredBooks].sort((a, b) => {
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
        <p className="mono">My reading list from {selectedYear} with honest reviews and ratings. You will find here a small comment of my thoughts on the book, followed by a more professional and boring paragraph of the book's summary.</p>
      </div>

      <div className="content-wrapper">
        <div className="books-controls">
          <div className="year-toggle">
            <span className="sort-label mono">Year:</span>
            <div className="sort-buttons">
              <button
                className={`brutal-button ${selectedYear === 2025 ? 'active' : ''}`}
                onClick={() => { setSelectedYear(2025); setSortBy('readingOrder'); }}
              >
                2025
              </button>
              <button
                className={`brutal-button ${selectedYear === 2026 ? 'active' : ''}`}
                onClick={() => { setSelectedYear(2026); setSortBy('readingOrder'); }}
              >
                2026
              </button>
            </div>
          </div>
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

        {filteredBooks.length === 0 && (
          <div className="books-empty">
            <p className="mono">No books logged for {selectedYear} yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Books;
