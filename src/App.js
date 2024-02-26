import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ListProducts from './components/ListProducts';
import AddProduct from './components/AddProduct';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ListProducts />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </>
  );
}

export default App;
