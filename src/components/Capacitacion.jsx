import { useNavigate } from 'react-router-dom'

function Capacitacion({contenido}) {

    const navigate = useNavigate()

    const {titulo, descripcion, fecha, id, dia} = contenido
  return (
        <>
            <tr className="border-b">
                <td className="p-6">
                    <p className="text-1xl text-gray-800">{titulo}</p>
                    
                </td>
                <td className="p-6">
                    {descripcion}
                </td>
                <td className="p-6">
                    Día: {dia}
                </td>
                <td className="p-6">
                    {fecha}
                </td>
                <td className="p-6 flex gap-5 justify-center">
                    <button 
                        type="button"
                        className="text-green-600 hover:text-green-700 uppercase font-bold text-xs"
                        onClick={()=> navigate(`/capacitaciones/${id}/editar`)}
                    >
                        Editar
                    </button>
                    <button 
                        type="button"
                        className="text-red-600 hover:text-red-700 uppercase font-bold text-xs"
                    >
                        Eliminar
                    </button>
                    
                </td>
            </tr>
        </>
  )
}

export default Capacitacion