import { useNavigate, Form } from 'react-router-dom'
import FormularioCapacitacion from '../components/FormularioCapacitacion'

export async function action({request}){
  const formData = await request.formData()

  const datos = Object.fromEntries(formData)
  console.log(datos);
}

function NuevaCapacitacion() {
  
  const navigate = useNavigate()
  return (
    <>
        <h1 className="font-black text-4xl text-green-900">Nueva Capacitación</h1>
        <p className="mt-3">
            Llena todos los campos para registrar una capacitación.
        </p>


        <div className="flex justify-end">
          <button
            className="bg-green-800 text-white px-6 py-2 font-bold uppercase rounded-xl"
            onClick={() => navigate('/capacitaciones')}
          >
            Volver
          </button>
        </div>

        <div className="bg-white shadow rounded-md md:w-4/4 mx-auto px-5 py-10 mt-5">

          <Form
            method='post'
          >
            <FormularioCapacitacion />
            <input 
              type="submit"
              className='mt-5 w-full bg-green-800 p-3 uppercase font-bold text-white text-lg'
              value="Registrar Capacitación"
            />

          </Form>
        </div>
    </>
  )
}

export default NuevaCapacitacion