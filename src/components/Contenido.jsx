import video from '../img/dia1.mp4'


function Contenido({contenidoFilter, videos}) {

  const {id, titulo, descripcion, media, dia} = contenidoFilter
  const arrayVideos = videos
  const progreso = []
  const puntos = 10;


  const videoFinal = arrayVideos.filter(arrayVideo => arrayVideo.name===(media))


  return (
    <>
      {media=="" ? (
      
      <div className=" max-w-sm overflow-hidden rounded p-5  text-center text-xl">
      <video src={`http://sanavita.vip/api${videoFinal[0].url}`}  width="750" height="500" controls loop  >
        Tu navegador no admite el elemento <code>video</code>.
      </video>
        <h3 className="mt-5">{titulo}</h3>
        <p className="text-gray-700 text-sm">{descripcion}</p>
      </div>
      
      ):(
      
      <p className="text-center mt-10">No hay capacitaciones aun</p>
      
      )}


    </>
  )
}

export default Contenido