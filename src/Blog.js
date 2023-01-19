import React from 'react';
import Nav from './components/Nav';
import Create from './components/Create';
import Edit from './components/Edit';
import Home from './components/Home';

import { Routes, Route } from 'react-router-dom';

export default function Blog() {
  return (
    <div>
      <h2>My Blog</h2>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Nav />} /> */}
        <Route path="/Create" element={<Create />} />
        <Route path="/Edit" element={<Edit />} />
      </Routes>
    </div>
  );
}
