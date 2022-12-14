import Redes from "../components/Redes";
import { Line } from 'rc-progress'
import CardDia from "../components/CardDia";
import { useNavigate, useLoaderData } from "react-router-dom";

export async function loader({params}){
    const nivel =params.nivel;
    const semana = params.semana;
    return [nivel, semana]
}

function Semanas() {

    const navigate = useNavigate()
    const dias = ["1", "2", "3", "4", "5", "6", "7", "8"]
    const porcentaje = localStorage.getItem('localPorcentaje');
    const [ nivel, semana ] = useLoaderData()

  return (
    <>
        <div className="flex justify-end mb-10 md:mb-0">
            <Redes/>
        </div>
        <div className="">
                <h1 className="font-black text-4xl text-green-900">Sistema de capacitación</h1>
                <p className="mt-3">
                    Selecciona el día que quieras consultar
                </p>
        </div>
        <div className="flex justify-end">
            <button
                className="bg-green-800 text-white px-6 py-2 font-bold uppercase rounded-xl"
                onClick={() => navigate("/principal")}
            >
                Volver
            </button>
        </div>

        <div className="bg-white shadow rounded-md md:w-4/4 mx-auto px-5 py-10 mt-5">
            <div className="mx-10">
                <p className="font-bold text-xl">{porcentaje}%</p>
                <Line percent={porcentaje} strokeWidth={4} strokeColor="#00A142" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10">
                {dias.map((dia, i) =>(
                    <CardDia key={i} dia={dia} semana={semana} nivel={nivel}/>
                ))}
            </div>
        </div>
    </>
  )
}

export default Semanas