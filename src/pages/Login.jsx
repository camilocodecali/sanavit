import { useNavigate } from 'react-router-dom'

function Login() {
  
  const navigate = useNavigate()

  return (
      <>
        <div className="bg-green-600 text-white m-auto w-full px-5 py-10 mt-5">
            <h1>Iniciar sesión</h1>

            <div className="flex justify-end">
              <button
                className="bg-green-800 text-white px-6 py-2 font-bold uppercase rounded-xl"
                onClick={() => navigate('/capacitaciones')}
              >
                Acceder
              </button>
            </div>

        </div>
      </>
  )
}

export default Login