import React from 'react';
// import './Loader.css'; // Create this CSS file for styling

const Loader: React.FC = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loader;