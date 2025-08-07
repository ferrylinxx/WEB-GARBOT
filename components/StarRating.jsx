import React, { useState } from 'react';

const StarRating = ({ 
  rating = 0, 
  onRatingChange, 
  readonly = false, 
  size = 'md',
  showValue = true 
}) => {
  const [hoverRating, setHoverRating] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const handleStarClick = (starValue) => {
    if (!readonly && onRatingChange) {
      onRatingChange(starValue);
    }
  };

  const handleStarHover = (starValue) => {
    if (!readonly) {
      setHoverRating(starValue);
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    if (!readonly) {
      setHoverRating(0);
      setIsHovering(false);
    }
  };

  const getStarColor = (starIndex) => {
    const currentRating = isHovering ? hoverRating : rating;
    if (starIndex <= currentRating) {
      return 'text-yellow-400';
    }
    return 'text-slate-300 dark:text-slate-600';
  };

  return (
    <div className="flex items-center gap-2">
      {showValue && (
        <span className="text-sm font-medium text-slate-900 dark:text-white min-w-[2rem]">
          {rating.toFixed(1)}
        </span>
      )}
      <div 
        className="flex items-center gap-1"
        onMouseLeave={handleMouseLeave}
      >
        {[1, 2, 3, 4, 5].map((starValue) => (
          <button
            key={starValue}
            type="button"
            disabled={readonly}
            onClick={() => handleStarClick(starValue)}
            onMouseEnter={() => handleStarHover(starValue)}
            className={`
              ${sizeClasses[size]} 
              ${readonly ? 'cursor-default' : 'cursor-pointer hover:scale-110'} 
              transition-all duration-200 
              ${getStarColor(starValue)}
              ${!readonly ? 'hover:drop-shadow-sm' : ''}
            `}
            title={readonly ? `Rating: ${rating}/5` : `Calificar con ${starValue} estrella${starValue > 1 ? 's' : ''}`}
          >
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              className="w-full h-full"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </button>
        ))}
      </div>
      {!readonly && isHovering && (
        <span className="text-xs text-slate-500 dark:text-slate-400 ml-2">
          {hoverRating > 0 ? `${hoverRating}/5` : ''}
        </span>
      )}
    </div>
  );
};

export default StarRating;
