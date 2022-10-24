import { useLoaderData } from "react-router-dom";
import Capacitacion from "../components/Capacitacion";
import { obtenerCapacitaciones } from "../data/capacitaciones"

export function loader() {

  const contenidos = obtenerCapacitaciones();
  return contenidos;

}

function Capacitaciones() {

  const contenidos = useLoaderData()



  return (
      <>
        <h1 className="font-black text-4xl text-green-900">Capacitaciones</h1>
        <p className="mt-3">
            Capacitaciones disponibles
        </p>

        {contenidos.length ? (
           <table className="w-full bg-white shadow mt-5 table-auto">
            <thead className="bg-green-800 text-white">
              <tr>
                <th className="p-2">Capacitacion</th>
                <th className="p-2">Descripción</th>
                <th className="p-2">Día</th>
                <th className="p-2">Fecha de publicación</th>
                <th className="p-2">Acciones</th>
              </tr>
              </thead>
              <tbody>
                {contenidos.map (contenido =>(
                  <Capacitacion
                    contenido={contenido}
                    key={contenido.id}
                   />

                ))}
              </tbody>
            

           </table>
        ): (
          <p className="text-center mt-10">No hay capacitaciones aun</p>
        )}

      </>
  )
}

export default Capacitaciones