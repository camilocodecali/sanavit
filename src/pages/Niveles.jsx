import Redes from "../components/Redes";
import { Line } from 'rc-progress'
import { useNavigate, useLoaderData } from "react-router-dom";
import CardSemana from "../components/CardSemana";
import video from '../img/dia1.mp4'

export async function loader({params}){
    const nivel =params.nivel;
    return nivel
}

function Niveles() {

    const navigate = useNavigate()
    const semanas = ["1", "2", "3"]
    const porcentaje = localStorage.getItem('localPorcentaje');
    const  nivel  = useLoaderData()

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


            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 p-10">
                <div className="p-10">
                    <p className="uppercase text-xl font-bold mb-5">NIVEL {nivel}</p>
                    <video src={video}  width="750" height="500" controls loop  >
                    Tu navegador no admite el elemento <code>video</code>.
                    </video>
                </div>
                <div className="grid  gap-5 p-10">
                    {semanas.map((semana, i) =>(
                        
                        <CardSemana key={i} semana={semana} nivel={nivel}/>
                    ))}
                </div>

            </div>
        </div>
    </>
  )
}

export default Niveles