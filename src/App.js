import AutLogin from './pages/Autentication/AutLogin';

import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (

    <BrowserRouter>
      <Routes>
    
     <Route path = '' element={<AutLogin/>} />
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
