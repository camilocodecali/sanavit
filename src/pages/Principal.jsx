import imgJunior from '../img/junior.png'
import imgSenior from '../img/senior.png'
import imgExperto from '../img/experto.png'
import { Line} from 'rc-progress';
import Redes from "../components/Redes";

import { Link } from "react-router-dom";

function Principal() {
    

    const porcentaje = localStorage.getItem('localPorcentaje');

  return (
    <>
            <div className="flex justify-end mb-10 md:mb-0">
                <Redes />

            </div>
            <div className="">
                <h1 className="font-black text-4xl text-green-900">Capacitaciones</h1>
                <p className="mt-3">
                    Selecciona el nivel que quieras realizar
                </p>
            </div>



        <div className="bg-white shadow rounded-md md:w-4/4 mx-auto px-5 py-10 mt-5">
            <div className="mx-10" >
                <p className="font-bold text-xl">{porcentaje}%</p>
                <Line percent={porcentaje} strokeWidth={4} strokeColor="#00A142" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-20">
                <Link className="mx-auto" to={`/niveles/junior`}><div className="bg-verde-segundario p-20 shadow-xl rounded-xl  cursor-pointer hover:opacity-90">
                    <p className="text-white font-bold text-xl">Método Junior</p>
                    <img className="mt-5 content-center" src={imgJunior} alt="icono nivel junior sanavita" />
                </div></Link>
                <Link className="mx-auto" to={`/niveles/senior`}><div className="bg-azul-senior p-20 mx-auto shadow-xl rounded-xl cursor-pointer hover:opacity-90 ">
                    <p className="text-white font-bold text-xl">Método Senior</p>
                    <img className="mt-5" src={imgSenior} alt="icono nivel junior sanavita" />
                </div></Link>
                <Link className="mx-auto" to={`/niveles/experto`}><div className="bg-verde-terciario p-20 mx-auto shadow-xl rounded-xl cursor-pointer hover:opacity-90">
                    <p className="text-white font-bold text-xl">Método Experto</p>
                    <img className="mt-5" src={imgExperto} alt="icono nivel junior sanavita" />
                </div></Link>

            </div>

        </div>

    </>
  )
}

export default Principal