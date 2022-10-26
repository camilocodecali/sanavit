import { useNavigate, useLoaderData } from "react-router-dom"
import { obtenerCapacitaciones } from "../data/capacitaciones";
import Contenido from "../components/Contenido";

export async function loader({params}){
    const dia = params.dia;
    const contenidos = await obtenerCapacitaciones();
    return [dia,contenidos];
}


function Dias({}) {
    const navigate = useNavigate()
    const [dia, contenidos] = useLoaderData()
    console.log(contenidos);
  return (
    <>
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

        </div>
    </>
  )
}

export default Dias