import { useLoaderData } from "react-router-dom";
import Capacitacion from "../components/Capacitacion";
import { obtenerCapacitaciones } from "../data/capacitaciones";
import Redes from "../components/Redes"

export async function loader() {
  const contenidos = await obtenerCapacitaciones();
  return contenidos;
}

function Capacitaciones() {
  const contenidos = useLoaderData();
  return (
    <>
      <div className="flex justify-end mb-10 md:mb-0">
         <Redes />

      </div>
      <h1 className="font-black text-4xl text-green-900">Capacitaciones</h1>
      <p className="mt-3">Capacitaciones disponibles</p>

      {contenidos.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto rounded-xl">
          <thead className="bg-green-800 text-white">
            <tr>
              <th className="p-2">Capacitación</th>
              <th className="p-2">Descripción</th>
              <th className="p-2">Día</th>
              <th className="p-2">Semana</th>
              <th className="p-2">Rango</th>
              <th className="p-2">Subir video</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {contenidos.map((contenido,i) => (
              <Capacitacion contenido={contenido} key={contenido.id} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-10">No hay capacitaciones aun</p>
      )}
    </>
  );
}

export default Capacitaciones;
