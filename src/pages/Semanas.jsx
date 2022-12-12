import Redes from "../components/Redes";
import { Line } from 'rc-progress'
import CardDia from "../components/CardDia";

function Semanas() {

    const dias = ["1", "2", "3", "4", "5", "6", "7", "8"]

    const porcentaje = localStorage.getItem('localPorcentaje');

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

        <div className="bg-white shadow rounded-md md:w-4/4 mx-auto px-5 py-10 mt-5">
            <div className="mx-10">
                <p className="font-bold text-xl">{porcentaje}%</p>
                <Line percent={porcentaje} strokeWidth={4} strokeColor="#00A142" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10">
                {dias.map((dia, i) =>(
                    <CardDia key={i} dia={dia}/>
                ))}
            </div>
        </div>
    </>
  )
}

export default Semanas