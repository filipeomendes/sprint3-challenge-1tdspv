import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import './index.css'

import Login from './routes/Login.jsx'
import Sobre from './routes/Sobre.jsx'
import Maps from './routes/Maps.jsx'
import Solicitacao from './routes/Solicitacao.jsx'
import Status from './routes/Status.jsx'
import Contato from './routes/Contato.jsx'
import Error from './routes/Error.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path: "/",
        element: <Login/>
      },
      {
        path: "/maps",
        element: <Maps/>
      },
      {
        path: "/maps/solicitacao",
        element: <Solicitacao/>
      },
      {
        path: "/status",
        element: <Status/>
      },
      {
        path: "/sobre",
        element: <Sobre/>
      },
      {
        path: "/contato",
        element: <Contato/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
