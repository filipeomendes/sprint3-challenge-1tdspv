import React from 'react';
import './App.css';
import { Outlet, useLocation } from 'react-router-dom';
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (
    <>
      {!isLoginPage && <Cabecalho />}
      <Outlet />
      {!isLoginPage && <Rodape />}
    </>
  );
}

export default App;
