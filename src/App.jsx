//Task 1 - Setup root component with state and props structure
import React, { useState } from 'react';
import Gallery from './components/Gallery';
import './styles/styles.css';
function App() {
  const [tours, setTours] = useState([]);
  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  return (
    <main>
      {/* The tour of tours  */}
      <h1>Tour Explorer</h1>
      <h2>Explore the world with us</h2>
      {/* Rendering the Gallery component and passing the tours, setTours, and removeTour function as props */}
      <Gallery tours={tours} setTours={setTours} onRemove={removeTour} />
    </main>
  );
}
export default App;