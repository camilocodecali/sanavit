
function FormularioLogin() {
  return (
    <>
    <div className="mb-4">
        <label
            className="text-gray-800"
            htmlFor="usuario"
        >Usuario:</label>
        <input 
            id="usuario"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Ingrese su usuario"
            name="usuario"
        />
    </div>
    <div className="mb-4">
        <label
            className="text-gray-800"
            htmlFor="contraseña"
        >Contraseña:</label>
        <input 
            id="contraseña"
            type="´password"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Ingrese la contraseña"
            name="contraseña"
        />
    </div>

</>
  )
}

export default FormularioLogin