import {  Form, useActionData } from "react-router-dom";


const FormularioCapacitacion = ({contenido}) => {
    return (
        <>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="semana"
                >Semana:</label>
                <input 
                    id="semana"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Semana que corresponda a la capacitación"
                    name="semana"
                    defaultValue={contenido?.semana}
                />
            </div>
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
                    defaultValue={contenido?.dia}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="rango"
                >Rango:</label>
                <input 
                    id="rango"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Rango que corresponda a la capacitación"
                    name="rango"
                    defaultValue={contenido?.rango}
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
                    defaultValue={contenido?.titulo}
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
                    defaultValue={contenido?.descripcion}
                />
            </div>
            {/* <div className="mb-4">
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
                    defaultValue={contenido?.media}
                />
            </div> */}
            <Form method="post" encType="multipart/form-data">
                <div className="mb-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 content-center gap-3">
                    <label
                        className="text-gray-800 col-span-0 sm:col-span-0 md:col-span-4"
                        htmlFor="media"
                    >Video:</label>
                    <input 
                        id="media"
                        type="file"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Seleccione el video"
                        name="media"
                        defaultValue={contenido?.media}
                    />
                    <input
                        type="submit"
                        className="mt-5 w-3/4 bg-orange-600 p-3 rounded-md uppercase font-bold text-white text-lg"
                        value="Subir video"
                    />
                </div>
            </Form>
        </>
    )
}

export default FormularioCapacitacion