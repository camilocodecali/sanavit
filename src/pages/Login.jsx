import { useNavigate, Form} from 'react-router-dom'
import FormularioLogin from '../components/FormularioLogin'

function Login() {
  
  const navigate = useNavigate()

  return (
      <>
        <div className="bg-green-600 text-white m-auto w-full px-5 py-10 mt-5 md:min-h-screen m">
          <h1 className="font-black text-4xl text-white">Iniciar sesión</h1>
          <p className="mt-3">
              Llena todos los campos para iniciar sesión.
          </p>

          <div className='md:w-4/4 px-5 py-10 mt-5'>
              <Form
                className='text-white uppercase text-center'
              >
              <FormularioLogin></FormularioLogin>
              </Form>
              <div className="flex justify-end">
                <button
                  className="bg-green-800 text-white px-6 py-2 font-bold uppercase rounded-xl"
                  onClick={() => navigate('/capacitaciones')}
                >
                  Acceder
                </button>
              </div>

          </div>


        </div>
      </>
  )
}

export default Login