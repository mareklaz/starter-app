import React from 'react';
import './scss/styles.css';
import { Routes, Route } from 'react-router-dom';
import Start from './screens/Start/Start';
import NavBar from './components/NavBar/NavBar';
import Home from './screens/Home/Home';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <div className='global-main-container'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
