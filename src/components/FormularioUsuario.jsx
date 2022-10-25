
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
                    placeholder="Día que corresponda a la capacitación"
                    name="nombre"
                    defaultValue={user?.dia}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="rol"
                >Tipo de usuario:</label>
                <select 
                    name="rol" 
                    id="rol" 
                    className="mt-2 block w-full p-3 bg-gray-50"
                    defaultValue={user?.dia}
                    >
                    <option value="admin">Administrador</option>
                    <option value="ventas" selected>Venta</option>
                    <option value="global">Global</option>
                </select>
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="media"
                >URL del video:</label>
                <input 
                    id="media"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Inserte la URL del video"
                    name="media"
                    defaultValue={user?.media}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="dia"
                >Identificación:</label>
                <input 
                    id="dia"
                    type="number"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Día que corresponda a la capacitación"
                    name="dia"
                    defaultValue={user?.dia}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="dia"
                >Email:</label>
                <input 
                    id="dia"
                    type="email"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Día que corresponda a la capacitación"
                    name="dia"
                    defaultValue={user?.dia}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="dia"
                >Email:</label>
                <input 
                    id="dia"
                    type="email"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Día que corresponda a la capacitación"
                    name="dia"
                    defaultValue={user?.dia}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="dia"
                >Dirección:</label>
                <input 
                    id="dia"
                    type="email"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Día que corresponda a la capacitación"
                    name="dia"
                    defaultValue={user?.dia}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="dia"
                >Ciudad:</label>
                <input 
                    id="dia"
                    type="email"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Día que corresponda a la capacitación"
                    name="dia"
                    defaultValue={user?.dia}
                />
            </div>
        </>
  )
}

export default FormularioUsuario