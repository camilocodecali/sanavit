
function Usuario({user}) {

  const {id, rol, usuario} = user;

  return (
    <>
        <tr className="border-b">
            <td className="p-6">{usuario}</td>
            <td className="p-6">{rol}</td>
            <td className="p-6 flex gap-5 justify-center">
              <button
                type="button"
                className="text-green-600 hover:text-green-700 uppercase font-bold text-xs"
              >
                Editar
              </button>
              <button
                type="button"
                className="text-red-600 hover:text-red-700 uppercase font-bold text-xs"
              >
                Eliminar
              </button>
            </td>
          </tr>
    </>
  )
}

export default Usuario;