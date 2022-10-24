
function FormularioLogin() {
  return (
    <>
    <div className="mb-4">
        <label
            className="text-gray-800"
            htmlFor="dia"
        >Día:</label>
        <input 
            id="dia"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Día que corresponda a la capacitación"
            name="dia"
        />
    </div>
    <div className="mb-4">
        <label
            className="text-gray-800"
            htmlFor="titulo"
        >Título:</label>
        <input 
            id="titulo"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Título de la capacitación"
            name="titulo"
        />
    </div>
    <div className="mb-4">
        <label
            className="text-gray-800"
            htmlFor="descripcion"
        >Descripción:</label>
        <textarea
            as="textarea"
            id="descripcion"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
            placeholder="Descripción de la capacitación"
            name="descripcion"
        />
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
        />
    </div>
</>
  )
}

export default FormularioLogin