import { Outlet, Link, useLocation } from "react-router-dom"
import LogoSanavita from '../img/logo-blanco-sanavita.png'

function Layout() {
  const location = useLocation();
  const rol = localStorage.getItem('localRol');
  const nombre = localStorage.getItem('localNombre');
  return (
    <div>
        <div className="md:flex md:min-h-screen">
            <aside className="md:w-1/4 bg-green-600 px-5 py-10">
                <img className="m-3 mx-auto" src={LogoSanavita} alt="Logo Sanavita" srcSet={LogoSanavita} width="70%"/>
                <p className="text-center text-xs text-white">{nombre}</p>
                  <nav className="m-8 text-center">
                    <Link 
                        className={`${location.pathname === '/principal' ? 'text-green-300' : 'text-white'} 
                            text-xl  mt-5 hover:text-green-300 block`}
                            to="/principal">
                            Principal</Link>
                    <Link 
                        className={`${location.pathname === '/capacitaciones' ? 'text-green-300' : 'text-white'} 
                            text-xl  mt-5 hover:text-green-300 ${rol==='global'  ? 'hidden' : 'block'} ${rol==='ventas'  ? 'hidden' : 'block'}`}
                            to="/capacitaciones">Capacitaciones</Link>
                    <Link 
                        className={`${location.pathname === '/capacitaciones/nuevo' ? 'text-green-300' : 'text-white'} 
                            text-xl  mt-5 hover:text-green-300 ${rol==='global' ? 'hidden' : 'block'} ${rol==='ventas'  ? 'hidden' : 'block'}`}
                            to="/capacitaciones/nuevo">Crear Capacitaciones</Link>
                    <Link 
                        className={`${location.pathname === '/usuarios' ? 'text-green-300' : 'text-white'}
                            text-xl  mt-5 hover:text-green-300 ${rol==='global'  ? 'hidden' : 'block'}`}
                            to="/usuarios">Usuarios</Link>
                    <Link 
                        className={`${location.pathname === '/usuarios/nuevo' ? 'text-green-300' : 'text-white'}
                            text-xl  mt-5 hover:text-green-300 ${rol==='global'  ? 'hidden' : 'block'}`}
                            to="/usuarios/nuevo">Crear Usuario</Link>
                    <Link 
                        className= 'text-green-900 bg-white px-5 py-2 mt-10 rounded text-xl block mt-5 hover:text-green-300' 
                        to="/">Cerrar sesión</Link>
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