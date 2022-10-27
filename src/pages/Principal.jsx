import CardDia from "../components/CardDia";
import { Line} from 'rc-progress';

function Principal() {
    
    const dias = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17",
    "18","19","20","21","22","23","24","25","26","27","28","29","30"];

    const porcentaje = localStorage.getItem('localPorcentaje');

  return (
    <>
        <h1 className="font-black text-4xl text-green-900">Sistema de capacitación</h1>
        <p className="mt-3">
            Selecciona el día que quieras consultar
        </p>

        <div className="bg-white shadow rounded-md md:w-4/4 mx-auto px-5 py-10 mt-5">
            <div className="mx-10" >
                <p className="font-bold text-xl">{porcentaje}%</p>
                <Line percent={porcentaje} strokeWidth={4} strokeColor="#00A142" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 p-10">
                {dias.map((dia, i)=>(
                    <CardDia key={i} dia={dia} />
                ))}
            </div>
        </div>

    </>
  )
}

export default Principal