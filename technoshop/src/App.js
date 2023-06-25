import React, { useState, useEffect } from 'react';
import './App.css';
import Categories from './Categories';
import Products from './Products';

 function App() {
   return (
    <div className="main">
     <Categories />
      <Products productList={[]} />
 
    </div>
  );

   }
export default App;
