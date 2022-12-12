import { Link } from "react-router-dom";


function CardSemana({semana, nivel}) {
  return (
    <>
        <div className="bg-verde-segundario max-w-sm overflow-hidden rounded p-5 text-white text-center text-xl">
        
        <Link to={`/semanas/${semana}/${nivel}`}>Semana #{semana}</Link>
        
        </div>
    </>
  )
}

export default CardSemana