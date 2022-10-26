
const FormularioUsuario =({user}) => {
  return (
        <>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="nombre"
                >Nombre:</label>
                <input 
                    id="nombre"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Nombre Completo"
                    name="nombre"
                    defaultValue={user?.nombre}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="rol"
                >Tipo de usuario:</label>
                <input 
                    id="rol"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Escribe el rol del usuario (admin, ventas o global)"
                    name="rol"
                    defaultValue={user?.rol}
                /> 
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="usuario"
                >Identificación:</label>
                <input 
                    id="usuario"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Número de identificación"
                    name="usuario"
                    defaultValue={user?.usuario}
   
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="email"
                >Email:</label>
                <input 
                    id="email"
                    type="email"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Correo electronico del usuario"
                    name="email"
                    defaultValue={user?.email}

                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="direccion"
                >Dirección:</label>
                <input 
                    id="direccion"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Dirección del usuario"
                    name="direccion"
                    defaultValue={user?.direccion}

                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="ciudad"
                >Ciudad:</label>
                <input 
                    id="ciudad"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Ciudad del usuario"
                    name="ciudad" 
                    defaultValue={user?.ciudad}

                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="password"
                >Contraseña:</label>
                <input 
                    id="password"
                    type="password"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Contraseña"
                    name="password"
                />
            </div>
        </>
  )
}

export default FormularioUsuario