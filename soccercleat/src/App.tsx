import React from 'react';
import Hero from './components/Hero/Hero';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import ProductList from './components/PorductList/ProductList';
import ProductPum from './components/PorductList/ProductPum';
import ProductAdi from './components/PorductList/ProductAdi';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar/>
      <Hero />
      <Routes>
        <Route path="/nike" element={<ProductList/>} />
        <Route path="/adidas" element={<ProductAdi/>} />
        <Route path="/puma" element={<ProductPum/>} />
      </Routes>
    </div>
  );
}

export default App;