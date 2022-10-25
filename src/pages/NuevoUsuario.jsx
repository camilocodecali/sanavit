import { useNavigate } from "react-router-dom"
import FormularioUsuario from "../components/FormularioUsuario";

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

      <div className="bg-white shadow rounded-md md:w-4/4 mx-auto px-5 py-10 mt-5">
        <FormularioUsuario />

      </div>

    </>
  )
}

export default NuevoUsuario