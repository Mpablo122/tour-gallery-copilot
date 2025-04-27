import React from 'react';
import TourCard from './Tourcard';

const Gallery = ({ tours, onRemove }) => {
  return (
    <div className="gallery">
      {tours.map((tour) => (
        <TourCard
          key={tour.id}
          id={tour.id}
          name={tour.name}
          info={tour.info}
          image={tour.image}
          price={tour.price}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default Gallery;