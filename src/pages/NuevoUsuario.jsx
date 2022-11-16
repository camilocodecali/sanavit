import { useNavigate, Form, useActionData, redirect } from "react-router-dom"
import FormularioUsuario from "../components/FormularioUsuario";
import Error from "../components/Error";
import { agregarUsuarios } from '../data/usuarios'
import Redes from "../components/Redes"

export async function action({request}) {
  const formData = await request.formData()

  const datos = Object.fromEntries(formData);

  //Validación
  const errores = [];
  if ( Object.values(datos).includes("")){
    errores.push("Todos los campos son obligatorios")
  }

  //Retornar si hay errores
  if(Object.keys(errores).length){
    return errores;
  }
  await agregarUsuarios(datos)

  return redirect('/usuarios')
  
}

function NuevoUsuario() {
  const navigate = useNavigate();
  const errores = useActionData();

  return (
    <>
      <div className="flex justify-end">
         <Redes />

      </div>
      <h1 className="font-black text-4xl text-green-900">Nuevo Usuario</h1>
      <p className="mt-3">
        Llena todos los campos para registrar un usuario.
      </p>

      <div className="flex justify-end">
        <button
          className="bg-green-800 text-white px-6 py-2 font-bold uppercase rounded-xl"
          onClick={()=> navigate('/usuarios')}
        >
          Volver
        </button>

      </div>

      <div className="bg-white shadow rounded-md md:w-4/4 mx-auto px-5 py-10 mt-5">
       {errores?.length && errores.map((error, i)=> <Error key={i} >{error}</Error> )}

       <Form method="post">
        <FormularioUsuario />
        <input
          type="submit"
          className="mt-5 w-full bg-green-800 p-3 uppercase font-bold text-white text-lg" 
          value="Registrar Usuario"
        />
      </Form> 
      </div>

    </>
  )
}

export default NuevoUsuario