import React from 'react'
import { Link } from 'react-router-dom'

function CardDia({dia}) {
  return (
    <>
        <div className="bg-verde-segundario max-w-sm overflow-hidden rounded p-5 text-white text-center text-xl">

            <Link to={`/dias/${dia}`}>Día #{dia}</Link>
        </div>
    </>
  )
}

export default CardDia