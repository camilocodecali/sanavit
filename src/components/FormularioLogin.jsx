
function FormularioLogin() {
  return (
    <>
        <div className="mb-4">
            <label
                className="text-white"
                htmlFor="usuario"
            >Usuario:</label>
            <input 
                id="usuario"
                type="text"
                className="mt-2 block w-full p-3 bg-transparent border-2 border-solid border-white rounded-xl placeholder-white"
                placeholder="Ingrese su usuario"
                name="usuario"
            />
        </div>
        <div className="mb-4">
            <label
                className="text-white"
                htmlFor="password"
            >Contraseña:</label>
            <input 
                id="password"
                type="password"
                className="mt-2 block w-full p-3 bg-transparent border-2 border-solid border-white rounded-xl placeholder-white"
                placeholder="Ingrese la contraseña"
                name="password"
            />
        </div>

    </>
  )
}

export default FormularioLogin