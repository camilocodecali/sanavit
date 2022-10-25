import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout'
import Login from './pages/Login'
import Usuarios from './pages/Usuarios'
import NuevoUsuario from './pages/NuevoUsuario'
import Capacitaciones, { loader as capacitacionesLoader } from './pages/Capacitaciones'
import NuevaCapacitacion, {action as nuevoClienteAction} from './pages/NuevaCapacitacion'
import ErrorPage from './components/ErrorPage'
import EditarCapacitacion, { loader as editarCapacitacionLoader, action as editarClienteAction} from './pages/EditarCapacitacion'
import { action as eliminarClienteAction} from './components/Capacitacion'


const router = createBrowserRouter([
  {
    index: true,
    path: '/',
    element: <Login />
  },
  {
    element: <Layout />,
    children:[
      {
        path: '/usuarios',
        element: <Usuarios />
      },
      {
        path: '/usuarios/nuevo',
        element: <NuevoUsuario />
      },
      {
        path: '/capacitaciones',
        element: <Capacitaciones />,
        loader: capacitacionesLoader,
        errorElement : <ErrorPage />
      },
      {
        path: '/capacitaciones/nuevo',
        element: <NuevaCapacitacion />,
        action: nuevoClienteAction,
        errorElement: <ErrorPage />
      },
      {
        path: '/capacitaciones/:contenidoId/editar',
        element: <EditarCapacitacion />,
        loader: editarCapacitacionLoader,
        action: editarClienteAction,
        errorElement: <ErrorPage />
      },
      {
        path: '/capacitaciones/:contenidoId/eliminar',
        action: eliminarClienteAction

      }

    ]
  }


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)