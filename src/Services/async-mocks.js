import React, { useState, useEffect } from 'react';

const asyncMock = ({ itemId, categoryId }) => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulación de una llamada asíncrona a una API
        // Aquí podrías hacer llamadas a una API real
        // const response = await fetch(`API_URL/${itemId}/${categoryId}`);
        // const jsonData = await response.json();
        // setData(jsonData);

        // Por ahora, simulemos datos de ejemplo
        const exampleData = [
          { id: 1, name: 'Producto 1', price: 10 },
          { id: 2, name: 'Producto 2', price: 20 },
          { id: 3, name: 'Producto 3', price: 30 }
        ];
        setData(exampleData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [itemId, categoryId]);

  return data;
};

export default asyncMock;
