import { Outlet, Link, useLocation } from "react-router-dom"
import LogoSanavita from '../img/logo-blanco-sanavita.png'

function Layout() {
  const location = useLocation();
  return (
    <div>
        <div className="md:flex md:min-h-screen">
            <aside className="md:w-1/4 bg-green-600 px-5 py-10">
                <img className="m-3 mx-auto" src={LogoSanavita} alt="Logo Sanavita" srcSet={LogoSanavita} width="70%"/>
                  <nav className="m-10 text-center">
                    <Link 
                        className={`${location.pathname === '/capacitaciones' ? 'text-green-300' : 'text-white'} text-xl block mt-5 hover:text-green-300`}
                        to="/capacitaciones">Capacitaciones</Link>
                    <Link 
                        className={`${location.pathname === '/capacitaciones/nuevo' ? 'text-green-300' : 'text-white'} text-xl block mt-5 hover:text-green-300`}
                        to="/capacitaciones/nuevo">Crear Capacitaciones</Link>
                    <Link 
                        className={`${location.pathname === '/usuarios' ? 'text-green-300' : 'text-white'} text-xl block mt-5 hover:text-green-300`}
                        to="/usuarios">Usuarios</Link>
                    <Link 
                        className={`${location.pathname === '/usuarios/nuevo' ? 'text-green-300' : 'text-white'} text-xl block mt-5 hover:text-green-300`}
                        to="/usuarios/nuevo">Crear Usuario</Link>
                  </nav>
            </aside>
            <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
                <Outlet />
            </main>
        </div>
    </div>
  )
}

export default Layout