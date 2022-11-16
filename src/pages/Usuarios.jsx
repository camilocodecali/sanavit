import { useLoaderData } from "react-router-dom";
import Usuario from "../components/Usuario"
import { obtenerUsuarios } from "../data/usuarios"
import Redes from "../components/Redes"

export function loader(){
  const users = obtenerUsuarios();
  return users;
}

function Usuarios() {
  const users = useLoaderData();

  return (
    <>
      <div className="flex justify-end">
         <Redes />

      </div>
      <h1 className="font-black text-4xl text-green-900">Usuarios</h1>
      <p className="mt-3">Usuarios disponibles</p>

      <table className="w-full bg-white shadow mt-5 table-auto rounded-xl">
        <thead className="bg-green-800 text-white">
          <tr>
            <th className="p-2">Usuario</th>
            <th className="p-2">Rol</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user)=>(
            <Usuario user={user} key={user.id} />
          ))}
            
        </tbody>
      </table>



    </>
  )
}

export default Usuarios