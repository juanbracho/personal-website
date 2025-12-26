import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import './BookCard.css';

const BookCard = ({ book, index }) => {
  const [expanded, setExpanded] = useState(false);
  const [animatedRating, setAnimatedRating] = useState(0);

  // Convert 10-point rating to 5-star rating
  const starRating = book.rating / 2;

  // Animate stars on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      let current = 0;
      const interval = setInterval(() => {
        current += 0.5;
        setAnimatedRating(current);
        if (current >= starRating) {
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }, index * 50); // Stagger animation based on index

    return () => clearTimeout(timer);
  }, [starRating, index]);

  // Render star rating
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (animatedRating >= i) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} className="star filled" />);
      } else if (animatedRating >= i - 0.5) {
        stars.push(<FontAwesomeIcon key={i} icon={faStarHalfAlt} className="star half" />);
      } else {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} className="star empty" />);
      }
    }
    return stars;
  };

  const shouldShowMore = book.review && book.review.length > 150;

  return (
    <div className="book-item">
      <div className="book-main">
        <div className="book-info">
          <h3 className="book-title">{book.title}</h3>
          <p className="book-author mono">{book.author}</p>
        </div>

        <div className="book-rating">
          <div className="stars">
            {renderStars()}
          </div>
          <span className="rating-value mono">{starRating.toFixed(1)}</span>
        </div>
      </div>

      {book.review && book.review !== 'Add your review here' && (
        <div className="book-review-section">
          <p className={`book-review ${expanded ? 'expanded' : 'collapsed'}`}>
            {book.review}
          </p>
          {shouldShowMore && (
            <button
              className="toggle-review"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? 'Read Less' : 'Read More'}
            </button>
          )}
        </div>
      )}

      {book.tags && book.tags.length > 0 && (
        <div className="book-tags">
          {book.tags.map((tag, index) => (
            <span key={index} className="book-tag mono">{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookCard;
