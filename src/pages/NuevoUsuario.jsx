import { useNavigate } from "react-router-dom"

function NuevoUsuario() {
  const navigate = useNavigate();


  return (
    <>
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
    </>
  )
}

export default NuevoUsuario