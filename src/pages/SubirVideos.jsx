import {  Form, useActionData, useLoaderData } from "react-router-dom";
import { actualizarContenido } from "../data/capacitaciones";
import { obtenerCapacitacion } from "../data/capacitaciones";

export async function loader({params}){
    const contenido = await obtenerCapacitacion(params.contenidoId)
    await localStorage.setItem('semanaContenido', contenido.attributes.semana)
    await localStorage.setItem('diaContenido', contenido.attributes.dia)
    await localStorage.setItem('rangoContenido', contenido.attributes.rango)
    await localStorage.setItem('tituloContenido', contenido.attributes.titulo)
    await localStorage.setItem('descripcionContenido', contenido.attributes.descripcion)
    await localStorage.setItem('idContenido', params.contenidoId)
    
}

export async function action({ request }) {
    const semanaContenido = localStorage.getItem('semanaContenido');
    const diaContenido = localStorage.getItem('diaContenido');
    const rangoContenido = localStorage.getItem('rangoContenido');
    const tituloContenido = localStorage.getItem('tituloContenido');
    const descripcionContenido = localStorage.getItem('descripcionContenido');
    const idContenido = localStorage.getItem('idContenido');

    console.log(semanaContenido);

    const formData = await request.formData();

    const data = Object.fromEntries(formData);

    const videoName = data.files.name

    await fetch('http://localhost:1337/api/upload/', {
      method: 'post',
      body: formData
    });

    const dataFinal = {data: {
        semana: semanaContenido,
        dia: diaContenido,
        rango: rangoContenido,
        titulo: tituloContenido,
        decripcion: descripcionContenido,
        media: videoName
    }}
    console.log(dataFinal);

    await actualizarContenido(idContenido,dataFinal);
    return redirect("/capacitaciones");

}

function SubirVideos() {
  return (
    <>
      <div className="mb-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 content-center gap-3">
    <Form method="post" encType="multipart/form-data">
        <label
          className="text-gray-800 col-span-0 sm:col-span-0 md:col-span-4"
          htmlFor="files"
        >
          Video:
        </label>
        <input
          id="files"
          type="file"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Seleccione el video"
          name="files"
        />
        <input
            type="submit"
            className="mt-5 w-full bg-green-800 p-3 uppercase font-bold text-white text-lg"
            value="Registrar video"
          />
    </Form>
      </div>
    </>
  );
}

export default SubirVideos;
