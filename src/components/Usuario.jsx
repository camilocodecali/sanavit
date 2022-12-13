import { useNavigate, Form, redirect } from "react-router-dom";
import { eliminarUsuario } from "../data/usuarios"

export async function action({params}){
  await eliminarUsuario(params.userId)
  return redirect('/usuarios')
}

function Usuario({user}) {

  const {rol, usuario} = user.attributes;
  const id = user.id
  const navigate = useNavigate();

  return (
    <>
        <tr className="border-b">
            <td className="p-6">{usuario}</td>
            <td className="p-6">{rol}</td>
            <td className="p-6 flex gap-5 justify-center">
              <button
                type="button"
                className="text-green-600 hover:text-green-700 uppercase font-bold text-xs"
                onClick={()=> navigate(`/usuarios/${id}/editar`)}
              >
                Editar
              </button>
              
              <Form
                method="post"
                action={`/usuarios/${id}/eliminar`}
                onSubmit={(e)=>{
                  if(!confirm('¿Deseas eliminar el usuario?')){
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

export default Usuario;