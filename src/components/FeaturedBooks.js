import React from 'react';
import { Link } from 'react-router-dom';
import { books } from './booksData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import './FeaturedBooks.css';

const FeaturedBooks = () => {
  const featuredBooks = books
    .filter(book => book.order !== undefined)
    .sort((a, b) => b.order - a.order)
    .slice(0, 4);

  const renderStars = (rating) => {
    const starRating = rating / 2;
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (starRating >= i) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} className="star filled" />);
      } else if (starRating >= i - 0.5) {
        stars.push(<FontAwesomeIcon key={i} icon={faStarHalfAlt} className="star half" />);
      } else {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} className="star empty" />);
      }
    }
    return stars;
  };

  return (
    <section className="featured-books">
      <div className="featured-books-header">
        <h2>Recent Reading</h2>
        <Link to="/books" className="brutal-button">View All Books →</Link>
      </div>

      <div className="featured-books-grid">
        {featuredBooks.map((book) => (
          <div key={book.id} className="featured-book-card brutal-card">
            <div className="featured-book-header">
              <h3 className="featured-book-title">{book.title}</h3>
              <div className="featured-book-rating">
                <div className="stars">
                  {renderStars(book.rating)}
                </div>
              </div>
            </div>

            <p className="featured-book-author mono">{book.author}</p>

            {book.tags && book.tags.length > 0 && (
              <div className="featured-book-tags">
                {book.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="featured-book-tag mono">{tag}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBooks;
