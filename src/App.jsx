import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
