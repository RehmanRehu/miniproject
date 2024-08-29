import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';

const App = () => {
  const handleAddProduct = () => {
    
  };

  return (
    <div>
      <Header onAddProduct={handleAddProduct} />
      <ProductList />
    </div>
  );
};

export default App;