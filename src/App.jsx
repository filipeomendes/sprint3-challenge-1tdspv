import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Cabecalho from './components/Cabecalho'

function App() {

  return (
    <>
      <Cabecalho/>
      <Outlet/>
    </>
  )
}

export default App
