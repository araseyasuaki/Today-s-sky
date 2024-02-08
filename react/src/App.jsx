import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './routers/Home';
import Choices from './routers/Choices/Choices';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Choices" element={<Choices />} />
      </Routes>
    </>
  );
};
export default App;
