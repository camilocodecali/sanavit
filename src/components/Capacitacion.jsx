
function Capacitacion({contenido}) {


    const {titulo, descripcion, fecha, id, dia} = contenido
  return (
        <>
            <tr className="border-b">
                <td className="p-6">
                    <p className="text-1xl text-gray-800">{titulo}</p>
                    
                </td>
                <td className="p-6">
                    {descripcion}
                </td>
                <td className="p-6">
                    Día: {dia}
                </td>
                <td className="p-6">
                    {fecha}
                </td>
            </tr>
        </>
  )
}

export default Capacitacion