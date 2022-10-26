export async function obtenerUsuarios(){
    const respuesta = await fetch(import.meta.env.VITE_API_USUARIOS_URL)
    const resultado = await respuesta.json()
    return resultado;
}

export async function obtenerUsuario(id){
    const respuesta = await fetch(`${import.meta.env.VITE_API_USUARIOS_URL}/${id}`)
    const resultado = await respuesta.json()
    return resultado;
}

export async function agregarUsuarios(datos){
    try {
        const respuesta = await fetch(import.meta.env.VITE_API_USUARIOS_URL,{
            method: 'POST',
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

export async function actualizarUsuario(id, datos){
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_USUARIOS_URL}/${id}`,{
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

export async function eliminarUsuario(id){
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_USUARIOS_URL}/${id}`,{
            method: 'DELETE'
        })

        await respuesta.json()

        
    } catch (error) {
        console.log(error);
    }
}