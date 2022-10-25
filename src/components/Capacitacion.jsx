import { useNavigate, Form, redirect } from 'react-router-dom'
import { elminarContenido } from '../data/capacitaciones'

export async function action({params}){

    await elminarContenido(params.contenidoId)
    return redirect('/capacitaciones')
}

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
                <Form
                    method='post'
                    action={`/capacitaciones/${id}/eliminar`}
                    onSubmit={(e)=>{
                        if(!confirm('¿Deseas eliminar este registro?')){
                            e.preventDefault()
                        }
                    }}
                >    
                    <button 
                        type="submit"
                        className="text-red-600 hover:text-red-700 uppercase font-bold text-xs"
                    >
                        Eliminar
                    </button>
                </Form>  
                </td>
            </tr>
        </>
  )
}

export default Capacitacion