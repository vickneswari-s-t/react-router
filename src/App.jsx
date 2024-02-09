import React from 'react';
import Navbar from './component/Navbar';
import All from './component/All';
import Full from './component/Full';
import Data from './component/Data';
import Cyber from './component/Cyber';
import Careers from './component/Careers';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/All" element={<All />} />
          <Route path="/Full" element={<Full />} />
          <Route path="/Data" element={<Data />} />
          <Route path="/cyber" element={<Cyber />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="*" element={<Navigate to="/All" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
