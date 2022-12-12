import { Form, useNavigate, useLoaderData, useActionData, redirect } from 'react-router-dom'
import { obtenerCapacitacion, actualizarContenido } from "../data/capacitaciones";
import FormularioCapacitacion from "../components/FormularioCapacitacion";
import Error from '../components/Error';
import Redes from "../components/Redes"

export async function loader({params}){

    const contenido = await obtenerCapacitacion(params.contenidoId)

    if(Object.values(contenido).length === 0){
      throw new Response('',{
        status: 404,
        statusText: 'No hay resultados'
      })
    }
    
    return contenido
}

export async function action({request, params}){

  const formData = await request.formData();

  const datos = Object.fromEntries(formData);

  //Validación
  const errores = [];
  if (Object.values(datos).includes("")) {
    errores.push("Todos los campos son obligatorios");
  }

  //Retornar datos si hay errores
  if (Object.keys(errores).length) {
    return errores;
  }

  //actualizar cliente
  await actualizarContenido(params.contenidoId, datos);

  return redirect("/capacitaciones");



}

function EditarCapacitacion() {

  const navigate = useNavigate()
  const contenido = useLoaderData();
  const errores = useActionData();


  return (
    <>
      <div className="flex justify-end mb-10 md:mb-0">
         <Redes />

      </div>
    <h1 className="font-black text-4xl text-green-900">Editar Capacitación</h1>
    <p className="mt-3">
      Llena todos los campos para editar una capacitación.
    </p>

    <div className="flex justify-end">
      <button
        className="bg-green-800 text-white px-6 py-2 font-bold uppercase rounded-xl"
        onClick={() => navigate("/capacitaciones")}
      >
        Volver
      </button>
    </div>

    <div className="bg-white shadow rounded-md md:w-4/4 mx-auto px-5 py-10 mt-5">
        {errores?.length &&
        errores.map((error, i) => <Error key={i}>{error}</Error>)}

      <Form method="post">
        <FormularioCapacitacion
          contenido = {contenido}
        />
        <input
          type="submit"
          className="mt-5 w-full bg-green-800 p-3 uppercase font-bold text-white text-lg"
          value="Actualizar Capacitación"
        />
      </Form>
    </div>
    </>
  )
}

export default EditarCapacitacion