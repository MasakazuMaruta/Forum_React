import React, { useState,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostPage from './Component/PostPage';
import LoginPage from './Component/LoginPage';
import RegisterPage from './Component/RegisterPage';
import { useAuth } from './Component/useAuth';
import './App.css';
import { PrivateRouteMain } from './Component/PrivateRouteMain';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<LoginPage />} />
        <Route path="/form" element={<PostPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/auth" element={<PrivateRouteMain/>}/>
       </Routes>
    </Router>
  );
}

export default App;
