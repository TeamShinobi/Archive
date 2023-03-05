import AutLogin from './pages/Autentication/AutLogin';
import AutRegister from './pages/Autentication/AutRegister';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (

    <BrowserRouter>
      <Routes>

        <Route path='/' element={<AutLogin />} />
        <Route path='/registration' element={<AutRegister />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
