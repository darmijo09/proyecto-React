import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <h2 className="text-center mt-4">Bienvenido a nuestra tienda</h2>
      <p className="text-center">{greeting}</p>
    </div>
  );
};

export default ItemListContainer;
