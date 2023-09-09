import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/main';
import Main2 from '../pages/main2';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main2" element={<Main2 />} />
      </Routes>  
    </BrowserRouter>
  );
};

export default Router;