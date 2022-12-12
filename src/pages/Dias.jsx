import { useNavigate, useLoaderData } from "react-router-dom"
import { obtenerCapacitaciones } from "../data/capacitaciones";
import Contenido from "../components/Contenido";
import Redes from "../components/Redes"

export async function loader({params}){
    const dia = params.dia;
    const contenidos = await obtenerCapacitaciones();
    return [dia,contenidos];
}


function Dias({}) {
    const navigate = useNavigate()
    const [dia, contenidos] = useLoaderData()

    const contenidosFilter = contenidos.filter(contenido => contenido.dia ===(dia));

  return (
    <>
    <div className="flex justify-end mb-10 md:mb-0">
         <Redes />

      </div>
        <h1 className="font-black text-4xl text-green-900">Día # {dia}</h1>
        <p className="mt-3">
            Consulte la capacitación de su interes
        </p>
        <div className="flex justify-end">
            <button
                className="bg-green-800 text-white px-6 py-2 font-bold uppercase rounded-xl"
                onClick={() => navigate("/principal")}
            >
                Volver
            </button>
        </div>
        <div className="bg-white shadow rounded-md md:w-4/4 mx-auto px-5 py-10 mt-5">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 p-10">
            {contenidosFilter.map((contenidoFilter)=>
                <Contenido 
                    key={contenidoFilter.id}
                    contenidoFilter={contenidoFilter}
                />
            )}
            </div>
        </div>
    </>
  )
}

export default Dias