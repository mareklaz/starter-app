import React from 'react';
import './scss/styles.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <h1>Hola mundo</h1>
      <Routes>
        <Route path='/' element={<Start />}></Route>
      </Routes>
    </div>
  );
}

export default App;
