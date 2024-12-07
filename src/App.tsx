import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import Cadastro from '../views/Cadastro';
import Login from '../views/LogIn';
import Settings from '../views/Settings';
import FormPage from '../views/Form';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/form" element={<FormPage />} />
    </Routes>
  );
};

export default App;
