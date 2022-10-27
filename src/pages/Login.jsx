import {  Form, useActionData, redirect} from 'react-router-dom'
import FormularioLogin from '../components/FormularioLogin'
import LogoSanavita from '../img/logo-blanco-sanavita.png'
import Error from '../components/Error';
import { obtenerUsuarios } from '../data/usuarios';

export async function action({ request }){
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);

  //Validacion
  const errores = [];
  if(Object.values(datos).includes("")){
    errores.push("Todos los campos son obligatorios")
  }
  //Retornar error
  if(Object.keys(errores).length){
    return errores;
  }

  const usuariosList = await obtenerUsuarios();
  const usuarioFilter = usuariosList.filter(usuarioList => usuarioList.usuario === (datos.usuario) && usuarioList.password === (datos.password) )

  if(usuarioFilter[0]){
    localStorage.setItem('localNombre', usuarioFilter[0].nombre)
    localStorage.setItem('localRol', usuarioFilter[0].rol)
    localStorage.setItem('localPorcentaje', usuarioFilter[0].porcentaje)
    console.log(localStorage);
  
    if(usuarioFilter[0].rol === "global" || usuarioFilter[0].rol === "ventas"){
      return redirect(`/principal`)
    }else if(usuarioFilter[0].rol === "admin") {
      return redirect(`/principal`)
    }
  } else {
    return redirect ('/')
  }



}

function Login() {
  
  const errores = useActionData();

  return (
      <>
        <div className="flex h-screen  text-white bg-login">
          <div className="m-auto md:w-1/4 px-5">
            <img className="m-3 mx-auto" src={LogoSanavita} alt="Logo Sanavita" srcSet={LogoSanavita} width="70%"/>
              {errores?.length &&
              errores.map((error, i) => <Error key={i}>{error}</Error>)}

                <Form
                  method="post"
                  className='text-white uppercase mt-5'
                >
                  <FormularioLogin></FormularioLogin>
                  <input
                      type="submit"
                      className="bg-white text-green-800 px-6 py-2 mt-5 font-bold uppercase rounded-xl text-center w-full"
                      value="Acceder"
                    />
                </Form>

                    

          </div>
        </div>
      </>
  )
}

export default Login