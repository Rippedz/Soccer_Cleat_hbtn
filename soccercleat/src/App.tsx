import React from 'react';
import Hero from './components/Hero/Hero';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import ProductList from './components/PorductList/ProductNike';
import ProductPum from './components/PorductList/ProductPum';
import ProductAdi from './components/PorductList/ProductAdi';
import Logs from './components/Log/Log';
import ProductPage from './components/ProductPage/ProductPage';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Logs />} />
        <Route path="/nike" element={<ProductList />} />
        <Route path="/adidas" element={<ProductAdi />} />
        <Route path="/puma" element={<ProductPum />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
