import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import Home from '@pages/Home';
import Coin from '@pages/Coin';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/coin'>
          <Route path=":id" element={<Coin />} />
        </Route>
        <Route path='*' element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
