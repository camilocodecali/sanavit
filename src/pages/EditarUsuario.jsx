import { useNavigate, Form, useLoaderData, useActionData, redirect } from "react-router-dom"
import FormularioUsuario from "../components/FormularioUsuario"
import { obtenerUsuario } from "../data/usuarios"
import Error from "../components/Error";
import { actualizarUsuario } from "../data/usuarios";

export async function loader({params}){

    const user = await obtenerUsuario(params.userId);
    
    //validarr existencia del usuario
    if(Object.values(user).length === 0){
        throw new Response('',{
            status:404,
            statusText: 'No hay resultados'
        })
    }

    return user

}

export async function action({request, params}){
    const formData = await request.formData();

    const datos = Object.fromEntries(formData);

    //validacion
    const errores =[];
    if(Object.values(datos).includes("")){
        errores.push("Todos los campos son obligatorios")
    }

    //Retornar error
    if(Object.keys(errores).length){
        return errores;
    }

    //actualizar usuario
    await actualizarUsuario(params.userId, datos);

    return redirect("/usuarios")

}


function EditarUsuario() {
    const navigate = useNavigate()
    const user = useLoaderData()
    const errores = useActionData();

  return (
    <>
        <h1 className="font-black text-4xl text-green-900">Editar Capacitación</h1>
        <p className="mt-3">
        Llena todos los campos para editar una capacitación.
        </p>
        <div className="flex justify-end">
            <button
                className="bg-green-800 text-white px-6 py-2 font-bold uppercase rounded-xl"
                onClick={() => navigate("/usuarios")}
            >
                Volver
            </button>
        </div>
        <div className="bg-white shadow rounded-sm md:w-4/4 mx-auto px-5 py-10 mt-5">
            {errores?.length &&
            errores.map((error,i)=> <Error key={i}>{error}</Error>)}

            <Form method="post">
                <FormularioUsuario
                    user={user}
                />
                <input 
                    type="submit"
                    className="mt-5 w-full bg-green-800 p-3 uppercase font-bold text-white text-lg"
                    value="Actualizar Usuario"
                />
            </Form>
        </div>
    </>
  )
}

export default EditarUsuario