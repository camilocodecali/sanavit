export async function obtenerUsuarios(){
    const respuesta = await fetch(import.meta.env.VITE_API_USUARIOS_URL)
    const resultado = await respuesta.json()
    return resultado;
}
