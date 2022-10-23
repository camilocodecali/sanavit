import { useLoaderData } from "react-router-dom";
import Capacitacion from "../components/Capacitacion";

export function loader() {
  const contenidos = [
    {
        id: 1,
        titulo: 'Juan',
        descripcion: "Praesent sapien massa, convallis a pellentesque nec",
        fecha: "2022-10-07",
        dia: "1"
    },
    {
        id: 2,
        titulo: 'Karen',
        descripcion: "Praesent sapien massa, convallis a pellentesque nec",
        fecha: "2022-10-07",
        dia:"1"
    },
    {
        id: 3,
        titulo: 'Josue',
        descripcion: "Praesent sapien massa, convallis a pellentesque nec",
        fecha: "2022-10-07",
        dia:"2"
    },
    {
        id: 4,
        titulo: 'Miguel',
        descripcion: "Praesent sapien massa, convallis a pellentesque nec",
        fecha: "2022-10-07",
        dia:"2"
    },
    {
        id: 5,
        titulo: 'Pedro',
        descripcion: "Praesent sapien massa, convallis a pellentesque nec",
        fecha: "2022-10-07",
        dia:"3"
    },
];


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