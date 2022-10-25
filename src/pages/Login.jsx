import { useNavigate, Form} from 'react-router-dom'
import FormularioLogin from '../components/FormularioLogin'

function Login() {
  
  const navigate = useNavigate()

  return (
      <>
        <div className="flex h-screen bg-gradient-to-b from-green-300 to-green-600 text-white">
          <div className="m-auto md:w-1/4">
            <h1 className="font-black text-4xl text-white">Iniciar sesión</h1>
              <p className="mt-3">
                  Llena todos los campos para iniciar sesión.
              </p>
                <Form
                  className='text-white uppercase'
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