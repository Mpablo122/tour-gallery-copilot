import React from 'react';

const TourCard = ({ id, name, info, image, price, onRemove }) => {
  return (
    <div className="tour-card">
      <img src={image} alt={name} className="tour-image" />
      <div className="tour-details">
        <h2>{name}</h2>
        <p>{info}</p>
        <h4>${price}</h4>
        <button onClick={() => onRemove(id)} className="btn-not-interested">
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default TourCard;