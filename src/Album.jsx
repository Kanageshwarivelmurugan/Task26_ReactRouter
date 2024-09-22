import React from 'react';

const Album = ({ title, description }) => {
  return (
    <div className="album">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Album;
