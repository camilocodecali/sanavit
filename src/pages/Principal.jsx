import CardDia from "../components/CardDia";
import { Line} from 'rc-progress';
import Redes from "../components/Redes";
import iconoJunior from '../img/junior.png'
import iconoSenior from '../img/senior.png'
import iconoExperto from '../img/experto.png'

function Principal() {
    
    const dias = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17",
    "18","19","20","21","22","23","24","25","26","27","28","29","30"];

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
                <div className="bg-verde-segundario p-20 mx-auto shadow-xl rounded-xl cursor-pointer hover:opacity-90">
                    <p className="text-white font-bold text-xl">Método Junior</p>
                    <img className="mt-5 content-center" src={iconoJunior} alt="icono nivel junior sanavita" />
                </div>
                <div className="bg-azul-senior p-20 mx-auto shadow-xl rounded-xl cursor-pointer hover:opacity-90 ">
                    <p className="text-white font-bold text-xl">Método Senior</p>
                    <img className="mt-5" src={iconoSenior} alt="icono nivel junior sanavita" />
                </div>
                <div className="bg-verde-terciario p-20 mx-auto shadow-xl rounded-xl cursor-pointer hover:opacity-90">
                    <p className="text-white font-bold text-xl">Método Experto</p>
                    <img className="mt-5" src={iconoExperto} alt="icono nivel junior sanavita" />
                </div>

            </div>

        </div>

    </>
  )
}

export default Principal