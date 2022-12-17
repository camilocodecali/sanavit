import { useNavigate, Form, redirect } from 'react-router-dom'
import { eliminarContenido } from '../data/capacitaciones'

export async function action({params}){

    await eliminarContenido(params.contenidoId)
    return redirect('/capacitaciones')
}

function Capacitacion({contenido}) {

    const navigate = useNavigate()

    const {titulo, descripcion, fecha, dia, rango, semana, media} = contenido.attributes
    const id = contenido.id
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
                    <p className="text-1xl text-gray-800">{semana}</p>
                    
                </td>
                <td className="p-6">
                    <p className="text-1xl text-gray-800">{rango}</p>
                    
                </td>
                <td className="p-6">
                    <button 
                        type="button"
                        className={`${media ? 'bg-red-700' : 'bg-yellow-700'  }  hover:bg-red-400 text-white uppercase font-bold text-xs p-5 rounded-md`}
                        onClick={()=> navigate(`/capacitaciones/video/${id}`)}
                    >
                    { media && media.length ? (
                    <>Subir</>
                    ):(<>Editar</>)}
                        
                    </button> 
                    
                </td>
                <td className="p-6  gap-5 justify-center">
   
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