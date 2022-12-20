export async function obtenerCapacitaciones(){
    const respuesta = await fetch(import.meta.env.VITE_API_STRAPI_CONTENIDOS_URL)
    const resultado = await respuesta.json()
    return resultado.data;
}

export async function obtenerCapacitacion(id){
    const respuesta = await fetch(`${import.meta.env.VITE_API_STRAPI_CONTENIDOS_URL}/${id}`)
    const resultado = await respuesta.json()
    return resultado.data;
}

export async function obtenerVideos(){
    const respuesta = await fetch("http://localhost:1337/api/upload/files")
    const resultado = await respuesta.json()
    return resultado;
    
}

export async function subirVideo() {
    const form = document.querySelector('form');
    form.addEventListener('submit', async (e)=>{
        e.preventDefault();
         await fetch('http://localhost:1337/api/upload/',{
            method:'post',
            body: new FormData(e.target)
         })
    })


}

export async function agregarCapacitaciones(datos){
    console.log(datos);
    try {
        const respuesta = await fetch(import.meta.env.VITE_API_STRAPI_CONTENIDOS_URL, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(respuesta);
        await respuesta.json()

    } catch (error) {
        console.log(error);
    }
}

export async function actualizarContenido(id, datos){
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_STRAPI_CONTENIDOS_URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await respuesta.json()
        
    } catch (error) {
        console.log(error);
    }

}

export async function eliminarContenido(id){
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_STRAPI_CONTENIDOS_URL}/${id}`, {
            method: 'DELETE',
        })
        await respuesta.json()
        
    } catch (error) {
        console.log(error);
    }
}