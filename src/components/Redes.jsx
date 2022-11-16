import React from 'react'
import LogoWhatsapp from '../img/whatsapp.png'
import LogoTelegram from '../img/telegram.png'

function Redes() {
  return (
    <>
        <div className='flex'>
            <p>Ingresa a nuestros grupos: </p>
            <img className='mx-2' src={LogoWhatsapp} alt="Logo Whatsapp" srcSet={LogoWhatsapp} width="30px" />
            <img className='mx-2' src={LogoTelegram} alt="Logo Whatsapp" srcSet={LogoTelegram} width="30px" />
        </div>
    </>
  )
}

export default Redes