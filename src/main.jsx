import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout'
import Login, {action as loginAction} from './pages/Login'
import Usuarios, {loader as usuariosLoader} from './pages/Usuarios'
import NuevoUsuario, {action as nuevoUsuarioAction} from './pages/NuevoUsuario'
import Capacitaciones, { loader as capacitacionesLoader } from './pages/Capacitaciones'
import NuevaCapacitacion, {action as nuevoClienteAction} from './pages/NuevaCapacitacion'
import ErrorPage from './components/ErrorPage'
import EditarCapacitacion, { loader as editarCapacitacionLoader, action as editarClienteAction} from './pages/EditarCapacitacion'
import { action as eliminarClienteAction} from './components/Capacitacion'
import EditarUsuario, {loader as editarUsuarioLoader, action as editarUsuarioAction} from './pages/EditarUsuario'
import { action as eliminarUsuarioAction } from './components/Usuario'
import Principal from './pages/Principal'
import Dias, {loader as diasLoader} from './pages/Dias'
import Semanas from './pages/Semanas'

const router = createBrowserRouter([
  {
    index: true,
    path: '/',
    element: <Login />,
    action: loginAction
  },
  {
    element: <Layout />,
    children:[
      {
        path: '/usuarios',
        element: <Usuarios />,
        loader: usuariosLoader
      },
      {
        path: '/usuarios/nuevo',
        element: <NuevoUsuario />,
        action: nuevoUsuarioAction,
        errorElement: <ErrorPage />
      },
      {
        path: '/usuarios/:userId/editar',
        element: <EditarUsuario />,
        loader: editarUsuarioLoader,
        action: editarUsuarioAction,
        errorElement: <ErrorPage />
      },
      {
        path:'/usuarios/:userId/eliminar',
        action: eliminarUsuarioAction
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

      },
      {
        path: '/principal',
        element: <Principal />
      },
      {
        path: '/dias/:dia',
        element: <Dias />,
        loader: diasLoader
      },
      {
        path: '/semanas',
        element: <Semanas/>
      }

    ]
  }


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)